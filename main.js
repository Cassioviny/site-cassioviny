if (document.querySelector(".text")) {
    var typed = new Typed(".text", {
        strings: ["Desenvolvedor Front-end ", "YouTuber", "Desenvolvedor Web"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

const logos = document.querySelectorAll(".logo, .logo2");
const header = document.querySelector(".header");
const sobre = document.querySelector("#sobre");
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
let temporizadorCabecalho;

function fecharMenu() {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
}

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");
});

navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

function atualizarLogo() {
    if (!sobre) return;
    const esconderLogo = window.innerWidth <= 1000 && window.scrollY >= sobre.offsetTop - 20;
    logos.forEach((logo) => logo.classList.toggle("logo-hidden", esconderLogo));
}

function aoRolar() {
    atualizarLogo();

    if (navbar.classList.contains("active")) {
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

    if (window.innerWidth > 700) {
        fecharMenu();
    }
});
atualizarLogo();
