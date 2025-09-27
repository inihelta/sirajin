function togglePass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    }   else {
        x.type = "password";
    }
}
login = () => { location.pathname = "dashboard.html" }
async function dologin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const btn = document.getElementById("loginButton");
    btn.disabled = true;         // disable tombol
    btn.innerText = "Loading..."; // kasih indikator loading
    
    if (username.length > 1 && password.length > 0) {
        const url = `https://script.google.com/macros/s/AKfycbx7_bmJ9sWL0O5ckgGVzS3JYV1PLPN02bY4NTHlK8lSrdzKDVxopQHagoY5lNNugejGAg/exec?username=${username}&password=${password}`;
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data)

        
        if (data.login) {
            sessionStorage.setItem("username", username);
            window.location.href = "dashboard.html";
        }   else {
            alert("Username atau password salah!");
            btn.disabled = false;         // disable tombol
            btn.innerText = "Login"; // kasih indikator loading
        }
    } else {
        // console.log("isi username/password")
    }
}