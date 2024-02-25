const blinds = document.querySelectorAll('.blinds');
const slats = document.querySelectorAll('.slat');

function toggleDarkMode() {
    document.body.classList.toggle('dark')
    
    for(let slat of slats) {
        slat.classList.toggle('dark')
        slat.classList.toggle('rounded')
    }
}

for(let blind of blinds) {
    blind.addEventListener('click', toggleDarkMode);
}