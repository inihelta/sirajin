function togglePass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    }   else {
        x.type = "password";
    }
}
login = () => {location.pathname = "dashboard.html"}