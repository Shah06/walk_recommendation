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