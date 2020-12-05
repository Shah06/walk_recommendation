export function formData() {
    let nameValue, emailValue, passwordValue, cityValue;
    if (document.getElementById('fullname').value != "") nameValue = document.getElementById('fullname').value;
    if (document.getElementById('email').value != "") emailValue = document.getElementById('email').value;
    if (document.getElementById('password').value != "") passwordValue = document.getElementById('password').value;
    if (document.getElementById('city').value != "") cityValue = document.getElementById('city').value;
    
    return {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
        city: cityValue
    }
}
export function formChecker(stringName) {
    const name = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const city = document.getElementById('city').value;
    const pwConfirm = document.getElementById('pwConfirm').value;
    if (name == "" || (email == "" || (password == "" || (city == "" || pwConfirm == "")))) {
        document.getElementById(stringName).innerHTML = "Please fill in all categories";
        return false;
    }
    return true;
}

export function passwordCheck() {
    if (document.getElementById('password').value != document.getElementById('pwConfirm').value) {
        document.getElementById('errorLog').innerHTML = "Your passwords do not match";
        return false;
    }
    return true;
}

export function redirectToHome() {
    const url = './dashboard.html';
    window.location.assign(url);
}
export function logOut() {
    const url ='./login.html';
    deleteAllCookies();
    let myValues = "You have successfully logged out";
    localStorage.setItem('loginResult', myValues);
    window.location.assign(url);
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

export function sessionValidation() {
    const sessionCookie = Cookies.get("sessionID");
    if (sessionCookie == null) {
        let myValues = "Please login first";
        localStorage.setItem('loginResult', myValues);
        window.location.assign("./login.html");
    }
}
