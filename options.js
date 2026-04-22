const menuBtn = document.getElementById('menuBtn');
const navOptions = document.getElementById('navOptions');

menuBtn.addEventListener('click', () => {
    // La función toggle añade la clase si no está, y la quita si está.
    navOptions.classList.toggle('show');
});