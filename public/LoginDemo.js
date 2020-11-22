
function login() {
    axios.post('http://localhost:80/login', {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    })
    .then ((response) => {
        const resp = response.data;
    	console.log(resp);
        Cookies.set(document.getElementById('email').value, resp.slice(1, resp.length-1), { expires: 7 });
    }, (error) => {
        document.getElementById("loginmessage").innerHTML+="Login failed. Username or password is wrong.";
        console.log("hey :)");
    })
} 

document.getElementById('submit').addEventListener('click', login); 