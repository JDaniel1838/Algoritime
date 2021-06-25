import maquinaEscribir from "./modules/maquinaEscribir.js";
import resetarHast from "./modules/resetearHas.js";
import ScrollSpy from "./modules/ScrollSpy.js";
import showPassword from "./modules/showPassword.js";
import SombraNavbar from "./modules/SombraNavbar.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    
    resetarHast();
    maquinaEscribir();
    SombraNavbar();
    ScrollSpy();
    showPassword();
    ScrollReveal().reveal('.headline');
});

