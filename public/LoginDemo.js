axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
function login() {
    axios.post('http://localhost/login', {
        name: document.getElementById('email').value,
        password: document.getElementById('password').value
    })
    .then ((response) => {
    	console.log(response);
        Cookies.set(document.getElementById('email').value, response, { expires: 7 });
    }, (error) => {
        console.log(error);
    })
} 

document.getElementById('submit').addEventListener('click', login); 
