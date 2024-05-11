const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    window.scrollY > 0 ? header.classList.add('fixed') : header.classList.remove('fixed');
})
