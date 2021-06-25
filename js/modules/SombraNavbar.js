export default function SombraNavbar() {
    const $navbar = document.getElementById("navbar"),
        $Seccion2 = document.getElementById("Session2"),
        $Seccion3 = document.getElementById("Session3"),
        $MenuVertical = document.querySelector(".MenuV"),
        PosicionSession2 = $Seccion2.getBoundingClientRect(),
        PosicionSession3 = $Seccion3.getBoundingClientRect();


    
    document.addEventListener("scroll", (e) => {
        $MenuVertical.classList.remove("activado");
        if (e.path[1].scrollY!=0) {
            if ($navbar.classList.length===0) {
                $navbar.classList.add("sombra");
            }
        } else {
            $navbar.classList.remove("sombra");
        }

        

    });

    document.addEventListener("click", (e) => {
        let AnchoNav = document.getElementById("inicio").clientHeight;

        /* Session1 */
        if (e.target.matches(".Nav2")) {
            window.scroll({
                top: (PosicionSession2.top-AnchoNav),
                left: 0,
                behavior: 'smooth'
            });
        }

        /* Session2 */
        if (e.target.matches(".Nav3")) {
            window.scroll({
                top: (PosicionSession3.top-AnchoNav),
                left: 0,
                behavior: 'smooth'
            });
        }
    });


}