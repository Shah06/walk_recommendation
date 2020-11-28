import {formSubmission} from './javascript/script.js';
const url1 = 'http://localhost:80/profile';
const url2 = 'http://localhost:80/update';

axios.post(url1, {
    sessionId: Cookies.get("sessionID"),
})
.then ((response) => {
    const resp = response.data[0];
    id = resp.id;
    document.getElementById('fullNameChange').setAttribute('value', resp.name);
    document.getElementById('emailChange').setAttribute('value', resp.email);
    document.getElementById('cityChange').setAttribute('value', resp.city);
}, (error) => {
    console.log(error);
})

function updateProfile() {
    axios.post(url2, {
        sessionId: Cookies.get("sessionID"),
        updateFields: formSubmission()
    }).then((response) => {
        console.log(response);
        document.getElementById('messageLog').innerHTML = 'You have successfully updated your information.'
    }, (error) => {
        console.log(error);
        document.getElementById('messageLog').innerHTML = 'There was an error in updating your information.'
    })
}
document.getElementById('update').addEventListener('click', updateProfile);