# walk_recommendation

NodeJS + MySQL + Docker app that recommends walking, eating, and sleeping times based on user schedule, weather, and air quality.

Our development agenda can be accessed through our [Trello Board](https://trello.com/b/EL3RPsok/walkrecommendation) (you must have permission to access).

*Recent updates: added `/profile` and `/logout` endpoints.*

## Running

**Requirements**
- Docker
- npm
- docker-compose

Running walk_recommendation is simple:

```sh
chmod +x setup-docker.sh
./setup-docker.sh
```

Note: ensure that you have adequate permissions to open ports 80 and 3306.

# Backend API

If you are developing a front-end, **please familiarize yourself with this section**, specifically the **POST endpoints** section.

Note that if not defined in the endpoints listed below, a route will attempt to resolve to `/public`. For instance, `/bootstrap/js/bootstrap.js` will resolve to `/public/bootstrap/js/bootstrap.js`.

All front-end files should be placed in `/public` **except** for template files (eg `header.html`). 

Template files should go in `/views`.

## GET endpoints
### /
Prints a test message.
### /users
For development only, returns the whole `users` table;

## POST endpoints
### /signup
Allows the creation of a new user. The fields `email`, `password`, `name`, and `city` fields must be defined.


Example JSON request body:
```JSON
{
  "name": "John Smith",
  "email": "jsmith@example.com",
  "password": "bad_password123",
  "city": "La Jolla, CA, US"
}
```
Successful response:
`Successfully created record`

On failure, the server will return a `400 Bad Request` status code.

### /login
Allows the user to log in given `email` and `password`. The server will then send back a `sessionId`. This `sessionId` will be used to authenticate any other requests. A successful response will be in the form of a UUID (uuid4, to be precise).


Example JSON request body:
```JSON
{
  "email": "jsmith@example.com",
  "password": "bad_password123"
}
```
Successful response:
`'94da21b2-65f0-4cd5-a8b6-6c4ce3499ce0'`

*Note: trim the single quotes off the UUID to make requests.*

On failure, the server will return a `401 Unauthorized` status code.

### /logout
Destroys a specific `sessionId` for a user, logging them out. If the parameter `everywhere` is set to `true`, then all sessions for the user will be destroyed (logging them out everywhere). Note that everywhere does not need to be specified


Example request and response:
```JSON
{
  "sessionId": "94da21b2-65f0-4cd5-a8b6-6c4ce3499ce0",
  "everywhere": true
}
```
`Successfully destroyed all sessions for user with id 101`


Example request and response #2:
```JSON
{
  "sessionId": "94da21b2-65f0-4cd5-a8b6-6c4ce3499ce0"
}
```
`Successfully destroyed session 'a3230de8-b2be-46b8-8134-1e448bbd6018' for user with id 101`


On failure, the server will return a `401 Unauthorized` status code.


### /profile
Returns a JSON object representing the user's profile information given a `sessionID`. The user's password will not be returned.


Example JSON request:
```JSON
{
  "sessionId": "94da21b2-65f0-4cd5-a8b6-6c4ce3499ce0"
}
```


Example JSON response object:
```JSON
[{
  "id": 101,
  "name": "John Smith",
  "email": "jsmith@example.com",
  "city": "La Jolla, CA, US"
}]
```

On failure, the server will return a `401 Unauthorized` status code.


### /update
Updates specified records. Note that a `sessionId` must be specified. Any number of fields that exist can be specified in the `updateFields` object. For instance, the example below can omit any 3 of the 4 fields and the request would still be valid.


Example JSON request body:
```JSON
{
  "sessionId": "94da21b2-65f0-4cd5-a8b6-6c4ce3499ce0",
  "updateFields": {
    "name" : "Jane Doe",
    "password": "b3tt3Rp@5sw0rD!",
    "email": "janedoe@example.com",
    "city": "San Francisco"
  }
}
```
Successful response:
`Successfully updated record`

On failure, the server will return a `401 Unauthorized` status code.

### /weather
Gets the weather data for a specific user's city, according to [OpenWeatherMap's 5 day forecast](https://openweathermap.org/forecast5).


Example JSON request body:
```JSON
{
  "sessionId": "94da21b2-65f0-4cd5-a8b6-6c4ce3499ce0"
}
```

For a successful response example, refer to the OpenWeatherMap 5 day forecast [format documentation](https://openweathermap.org/forecast5#format)