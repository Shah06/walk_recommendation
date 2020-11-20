
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  //const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
function test2() {
    axios.get('http://localhost:3000').then ((response) => {
    console.log(response);}, (error) => {
    console.log(error);
    })
}
//onsubmit="event.preventDefault(); return false;"
function logTest() {
    console.log("Test");
}
function signUpDataTest() {
    console.log(document.getElementById('fullname').value);
}
function signUp () {
    axios.post('http://localhost:80/signup', {
        name: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        city: document.getElementById('city').value
    })
    .then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    })
} 
function usersTest () {
   axios.get('http://localhost:80/users',)
    .then ((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    })
} 

function test() {
    axios.post('https://reqres.in/api/users', {
        name: 'Bobby',
        job: 'propane manager'
    }).then((response)=>{
        console.log(response);
    }, (error)=>{
        console.log(error);
    })
} 

document.getElementById('submit').addEventListener('click', usersTest); 
