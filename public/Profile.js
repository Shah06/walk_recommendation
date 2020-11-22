axios.post('http://localhost:80/profile', {
    sessionId: Cookies.get("sessionID"),
})
.then ((response) => {
    const resp = response.data;
	console.log(resp);
    const id = resp["id"];
    const name = resp["name"];
    const email = resp["email"];
    const city = resp["city"];
}, (error) => {
    console.log(error);
})

function updateProfile() {
    axios.post('http://localhost:80/update', {
        sessionId: Cookies.get("sessionID"),
        updateFields: {
            name: document.getElementById('fullNameChange').value,
            password: document.getElementById('passwordChange').value,
            email: document.getElementById('emailChange').value,
            city: document.getElementById('cityChange').value
        }
    }).then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    })
}
document.getElementById('Update')