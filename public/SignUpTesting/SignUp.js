
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

function signUp () {
    axios.post('http://localhost:80/signup', {
        name: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        city: document.getElementById('city').value
    })
    .then((response) => {
        console.log(response);
        document.getElementById('errorLog').innerHTML = "Your signup was successful. You may login.";
        return;
    }, (error) => {
        console.log(error);
        document.getElementById('errorLog').innerHTML += "There was an error with your signup. Please try again.";
        return;
    })
} 
function usersVerification() {
   axios.get('http://localhost:80/users',)
    .then ((response) => {
        let i, checker = true;
        for (i = 0; i < response.data.length; i++) {
            console.log("usersVerification working");
            if (document.getElementById('email') == response.data[i].email) {
                document.getElementById('errorLog').innerHTML = "Your email is taken. Please use another email.";
                checker = false;
                break;
            }
        }
        if (checker) {signUp();}
    }, (error) => {
        console.log(error);
    });
} 

function credentialTest() {
  if (document.getElementById('password').value != document.getElementById('pwConfirm').value) {
      document.getElementById('errorLog').innerHTML = "Your passwords do not match";
  }
  else {
      console.log("credentialTest working");
    usersVerification();
  }
}
document.getElementById('submit').addEventListener('click', credentialTest); 
