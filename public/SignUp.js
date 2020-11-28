import {formData, passwordCheck} from './javascript/script.js';
const url = 'http://localhost:80/signup';
  function signUp () {
    if (passwordCheck())
    axios.post(url, 
      formData()
    )
    .then((response) => {
        console.log(response);
        document.getElementById('errorLog').innerHTML = "Your signup was successful. You may login.";
        return;
    }, (error) => {
        console.log(error);
        document.getElementById('errorLog').innerHTML = "Your email is taken. Please use another email.";
        return;
    })
} 
document.getElementById('submit').addEventListener('click', signUp); 
