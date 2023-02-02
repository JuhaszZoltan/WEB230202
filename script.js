function invalid_username() {
    var element = document.getElementById("username");
    element.classList.add("redborder");
    document.getElementById("msg").innerHTML = "a mező kitöltése kötelező!";
}

function invalid_email() {
    var element = document.getElementById("email");
    element.classList.add("redborder");
}