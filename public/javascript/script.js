export function formData() {
    return {
        name: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        city: document.getElementById('city').value
    }
}

export function passwordCheck() {
    if (document.getElementById('password').value != document.getElementById('pwConfirm').value) {
        document.getElementById('errorLog').innerHTML = "Your passwords do not match";
        return false;
    }
    return true;
}

export function redirectToHome() {
    const url = './index.html';
    window.location.assign(url);
}
export function logOut() {
    const url ='./login.html';
    deleteAllCookies();
    window.location.assign(url);
    document.getElementById('loginmessage').innerHTML = "You have successfully logged out";
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
