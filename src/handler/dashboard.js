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