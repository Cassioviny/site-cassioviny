var typed = new Typed(".text", {
    strings: ["Desenvolvedor Front-end ", "YouTuber", "Desenvolvedor Web"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const logos = document.querySelectorAll(".logo, .logo2");
const header = document.querySelector(".header");
const sobre = document.querySelector("#sobre");
let temporizadorCabecalho;

function atualizarLogo() {
    const esconderLogo = window.innerWidth <= 1000 && window.scrollY >= sobre.offsetTop - 20;
    logos.forEach((logo) => logo.classList.toggle("logo-hidden", esconderLogo));
}

function aoRolar() {
    atualizarLogo();

    if (window.innerWidth > 1000) {
        header.classList.remove("header-hidden");
        return;
    }

    header.classList.add("header-hidden");
    clearTimeout(temporizadorCabecalho);
    temporizadorCabecalho = setTimeout(() => {
        header.classList.remove("header-hidden");
    }, 250);
}

window.addEventListener("scroll", aoRolar, { passive: true });
window.addEventListener("resize", () => {
    atualizarLogo();

    if (window.innerWidth > 1000) {
        header.classList.remove("header-hidden");
    }
});
atualizarLogo();
