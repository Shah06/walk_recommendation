'use strict';

// Requirements
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cookieParser = require('cookie-parser')
const mysql = require('mysql');
const fs = require('fs');
const {v4 : uuidv4} = require('uuid');

// Configuration variables
const PORT = 8080;
const HOST = 'node_app';

// OpenWeatherMap configuration
const WEATHER_KEY = '97fa8fdde798392409ad1b20091e89fe';

// SQL stuff
let isSqlSetup = false;

// Persistent DB connection
const SQL_HOST = 'mysql';
const SQL_USER = 'root';
const SQL_PASSWD = 'password';
const SQL_DB = 'db';
const SQL_CON = mysql.createConnection({
	host: SQL_HOST,
	user: SQL_USER,
	password: SQL_PASSWD,
	database: SQL_DB,
	multipleStatements: true
});
SQL_CON.connect((err) => {
	if (err) throw err;
	console.log("Connected to MySQL database...");
});
SQL_CON.query(fs.readFileSync('./sql_files/users.sql', 'utf-8'), (err, results) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Ran users.sql successfully...");
	}
});
const authSession = function(sessionId, callback) {
	sessionId = SQL_CON.escape(sessionId);
	let sql = `SELECT * FROM sessions WHERE sessionID=${sessionId};`;
	SQL_CON.query(sql, (err, results) => {
		if (err || Object.keys(results).length < 1) {
			callback(null);
		} else {
			callback(results);
		}
	});
}

// setup express middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// static files in /public
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('walk_recommendation test response.');
});

app.post('/weather', (req, res) => {

	let sessionId = req.body.sessionId;
	authSession(sessionId, (auth) => {
		if (!auth) {
			res.status(401).end();
		} else {
			let userId = SQL_CON.escape(auth[0].userId);
			let sql = `SELECT * FROM users WHERE id=${userId};`;
			SQL_CON.query(sql, (err, response) => {
				if (err || Object.keys(response).length < 1) {
					console.log(err);
					res.status(500).end();
				} else {
					// get city
					let city = response[0].city;
					let apiPath = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+WEATHER_KEY;
					console.log(apiPath);
					axios.get(apiPath)
						.then(apiData => {
							console.log(apiData);
							res.send(apiData.data);
						}).catch(err => {
							const resp = "Invalid city: " + city + " on record for " + response[0].email;
							res.status(400).send(resp);
						}).finally(() => {});
				}

			});
		}
	});

});

app.get("/users", (req, res) => {

	SQL_CON.query(`SELECT * FROM users;`, (err, results) => {
		res.send( err ? err : results );
	});

});

app.post('/signup', (req, res) => {

	let name = SQL_CON.escape(req.body.name);
	let email = SQL_CON.escape(req.body.email);
	let city = SQL_CON.escape(req.body.city);
	let password = SQL_CON.escape(req.body.password);

	let sql = `INSERT INTO users (name, email, city, password) VALUES (${name}, ${email}, ${city}, ${password});`
	SQL_CON.query(sql, (err, results) => {
		if (err) {
			res.status(400).end();
		} else {
			res.send('Successfully created record');
		}
	});

});

app.post("/login", (req, res) => {

	let email = SQL_CON.escape(req.body.email);
	let password = SQL_CON.escape(req.body.password);

	// connect to mysql
	let sql = `SELECT * FROM users WHERE email=${email} AND password=${password};`
	SQL_CON.query(sql, (err, results) => {
		if (err) {
			res.send(err);
		} else {
			let results_size = Object.keys(results).length;
			if (0 === results_size) {
				res.status(401).send("Invalid email/password");
			} else {

				// create a session in sessions table
				let sessionId = SQL_CON.escape(uuidv4());
				let userId = SQL_CON.escape(results[0].id);
				let sessionSql = `INSERT INTO sessions (sessionId, userId) VALUES (${sessionId}, ${userId});`
				SQL_CON.query(sessionSql, (err, results) => {
					if (err) console.log(err);
				});

				res.send(sessionId);
			}
		}
	});

});

app.post("/update", (req, res) => {

	let sessionId = req.body.sessionId;
	authSession(sessionId, (auth) => {
		if (!auth) {
			res.status(401).end();
		} else {
			let userId = SQL_CON.escape(auth[0].userId);
			let sql = `UPDATE users SET `
			for (const param of Object.keys(req.body.updateFields)) {
				console.log(param, req.body.updateFields[param]);

				let column = SQL_CON.escape(param);
				column = column.substring(1, column.length-1);
				if (column == 'id') continue;	// prevent user from modifying their id
				let value = SQL_CON.escape(req.body.updateFields[param]);

				sql = sql + `${column}=${value}, `

			}
			sql = sql.slice(0, -2);	// get rid of comma and trailing space
			sql = sql + ` WHERE id=${userId};`;
			console.log(sql);

			SQL_CON.query(sql, (err, results) => {
				if (err) {
					console.log(err);
					res.status(401).end();
				} else {
					res.send("Successfully updated record");
				}
			});
		}
	})

});

app.post("/profile", (req, res) => {

	let sessionId = req.body.sessionId;
	authSession(sessionId, (auth) => {
		if (!auth) {
			res.status(401).end();
		} else {
			let userId = SQL_CON.escape(auth[0].userId);
			let sql = `SELECT id, name, email, city FROM users WHERE id=${userId};`;
			SQL_CON.query(sql, (err, results) => {
				if (err) {
					console.log(err);
					res.status(401).send();
				} else {
					res.send(results);
				}
			})
		}
	});

});

app.post("/logout", (req, res) => {

	let sessionId = req.body.sessionId;
	let everywhere = req.body.everywhere;

	authSession(sessionId, (auth) => {
		if (!auth) {
			res.status(401).send();
		} else {
			sessionId = SQL_CON.escape(sessionId);
			let sql;
			if (everywhere) {
				let userId = SQL_CON.escape(auth[0].userId);
				sql = `DELETE FROM sessions WHERE userId=${userId};`;
				SQL_CON.query(sql, (err, results) => {
					if (err) {
						console.log(err);
						res.status(401).send();
					} else {
						res.send(`Successfully destroyed all sessions for user with id ${userId}`);
					}
				});
			} else {
				let sql = `DELETE FROM sessions WHERE sessionId=${sessionId};`;
				SQL_CON.query(sql, (err, results) => {
					if (err) {
						console.log(err);
						res.status(401).send();
					} else {
						res.send(`Successfully destroyed session ${sessionId} for user with id ${auth[0].userId}`);
					}
				});
			}
		}
	})

});

app.listen(PORT);

















