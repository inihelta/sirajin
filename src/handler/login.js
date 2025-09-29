document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("username") != null && localStorage.getItem("role") != null) {
        if (localStorage.getItem("role") == "admin") {
            window.location.href = "dashboard";
        } else if (localStorage.getItem("role") == "normal") {
            window.location.href = "portal";
        }
    }
});




function togglePass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    }   else {
        x.type = "password";
    }
}
const login = () => { location.pathname = "dashboard" }


async function dologin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const btn = document.getElementById("loginButton");
    btn.disabled = true;         // disable tombol
    btn.innerText = "Loading..."; // kasih indikator loading
    
    if (username.length > 1 && password.length > 0) {
        const url = `https://script.google.com/macros/s/AKfycbxNjqyW9DpgJJ3AHHXinmrjjjq9NXTKVH4edncHyUfVtR8Uvv-mwHY9ukyfMRSZS8zGDw/exec` + `?username=${username}&password=${password}`;
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data)

        
        if (data.login) {
            localStorage.setItem("username", username);
            localStorage.setItem("role", data.role);
            if (data.role == "admin") {
                window.location.href = "dashboard";
            } else if (data.role == "normal") {
                window.location.href = "portal";
            }
        }   else {
            alert("Username atau password salah!");
            btn.disabled = false;         // disable tombol
            btn.innerText = "Login"; // kasih indikator loading
        }
    } else {
        // console.log("isi username/password")
    }
}