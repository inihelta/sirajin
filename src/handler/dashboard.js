function toggleModal() {
    const element = document.getElementById('modal')
    element.style.display = (element.getAttribute('data-toggle') == "false") ? "block" : "none"; 
    element.setAttribute('data-toggle', (element.getAttribute('data-toggle') == "false") ? "true" : "false"); 
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (document.getElementById('modal').getAttribute('data-toggle') == "true") {
            toggleModal()
        }
    }
});   
const username = sessionStorage.getItem("username")
if (username == null) {
    window.location.href = "index.html";
}
if (sessionStorage.getItem("role") == null || sessionStorage.getItem("role") != "admin") {
    window.location.href = "index.html";
}

document.getElementById("infoUsername").innerText = username

function dologout(){
    sessionStorage.removeItem("username");
    window.location.href = "index.html";
}

document.getElementById("infoUsername").addEventListener('click', (event) => {
    toggleLogoutModal()
});   


function toggleLogoutModal() {
    const element = document.getElementById('modalLogout')
    element.style.display = (element.getAttribute('data-toggle') == "false") ? "block" : "none"; 
    element.setAttribute('data-toggle', (element.getAttribute('data-toggle') == "false") ? "true" : "false"); 
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (document.getElementById('modalLogout').getAttribute('data-toggle') == "true") {
            toggleLogoutModal()
        }
    }
}); 

document.getElementById("modalLogoutF").addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return;
    toggleLogoutModal()
});   
document.getElementById("modalF").addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return;
    toggleModal()
});   
document.getElementById("modaldoneF").addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return;
    toggledonemodal()
});   

// async function submitAbsen() {
//     const tanggal = document.getElementById("dateTanggal").value;
//     const nama = "Ahmad Adnan Okhtar".toUpperCase(); // ini bisa ambil dari sessionStorage login
//     const absen = 3; // contoh: hadir
//     const btn = document.getElementById("submitabsen")
//     btn.disabled = true;         // disable tombol
//     btn.innerText = "Loading..."; // kasih indikator loading


//     const res = await fetch("https://script.google.com/macros/s/AKfycbwoLyiAG7C3ZEhrHIXjAHolaX7BsS9EEZ7DPS0lkH1M6BH9SXklhR1ZL7iRXB1xIuRs/exec", {
//         mode: "no-cors",
//         method: "POST",
//         body: JSON.stringify({ nama, tanggal, absen }),
//         headers: { "Content-Type": "application/json" }
//     });
//     const data = res;
//     console.log(data)
//     if (data.success) {
//         alert("Absen berhasil!");
//     }
// }

const goTop = document.querySelector(".btnGoTop")
    window.addEventListener("scroll", ()=>{
        window.pageYOffset > 500 ? goTop.classList.add("active") : goTop.classList.remove("active");
    })
    goTop.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    })


function toggledonemodal() {
    const element = document.getElementById('modalSelesai')
    element.style.display = (element.getAttribute('data-toggle') == "false") ? "block" : "none"; 
    element.setAttribute('data-toggle', (element.getAttribute('data-toggle') == "false") ? "true" : "false"); 
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (document.getElementById('modalSelesai').getAttribute('data-toggle') == "true") {
            toggledonemodal()
        }
    }
});