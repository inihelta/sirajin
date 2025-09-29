
function toggleLogoutModal() {
    const element = document.getElementById('modalLogout')
    element.style.display = (element.getAttribute('data-toggle') == "false") ? "block" : "none"; 
    element.setAttribute('data-toggle', (element.getAttribute('data-toggle') == "false") ? "true" : "false"); 
}
document.getElementById("modalLogoutF").addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return;
    toggleLogoutModal()
});   
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (document.getElementById('modalLogout').getAttribute('data-toggle') == "true") {
            toggleLogoutModal()
        }
    }
}); 
if (sessionStorage.getItem("username") == null) {
    window.location.href = "index";
}
document.getElementById("infoUsername").innerText = sessionStorage.getItem("username")
function dologout(){
    sessionStorage.removeItem("username");
    window.location.href = "index";
}
document.getElementById("infoUsername").addEventListener('click', (event) => {
    toggleLogoutModal()
});   
