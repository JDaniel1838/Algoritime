const d = document;

export default function showPassword() {

    const $icon = d.querySelector(".showPass"),
        InputPass = d.getElementById("passwordForm"),
        $icon2 = d.querySelector(".showPassLogin"),
        InputPass2 = d.getElementById("passwordLogin"),
        $crearCuenta = d.getElementById("formCreateCuenta"),
        $iniciarSesion = d.getElementById("iniciarsesion"),
        $DivCreateCuenta = d.querySelector(".createCuenta"),
        $DivIniciarSesion = d.querySelector(".Registrarse"),
        $MenuVertical=d.querySelector(".MenuV"),
        $AbriMenu = d.querySelector(".AbrirMenu"),
        $CerrarMenu= d.querySelector(".cerrarMenu"),
        $ContentForm = d.querySelector(".Login");
    
    let booleano = false;
    
    d.addEventListener("click", (e) => {
        
        if (e.target === $icon) {
            
            if (!booleano) {
                $icon.attributes[1].nodeValue = "#fd7d5d";
                booleano = true;
                InputPass.attributes[1].nodeValue = "text";
                
            } else {
                $icon.attributes[1].nodeValue = "#29323C";
                booleano = false;
                InputPass.attributes[1].nodeValue = "password";
                
            }
            
        }
        if (e.target === $icon2) {
            
            if (!booleano) {
                $icon2.attributes[1].nodeValue = "#fd7d5d";
                booleano = true;
                InputPass2.attributes[1].nodeValue = "text";
                
            } else {
                $icon2.attributes[1].nodeValue = "#29323C";
                booleano = false;
                InputPass2.attributes[1].nodeValue = "password";
                
            }
            
        }
        if (e.target === $crearCuenta) {

            /* Quitamos clases a los 2 div y el activo a la clase este limpio */

            $DivIniciarSesion.classList.remove("animate__fadeIn");
            $DivIniciarSesion.classList.remove("animate__fadeOut");
            $DivCreateCuenta.classList.remove("animate__fadeIn");
            $DivCreateCuenta.classList.remove("animate__fadeOut");


            /* Añadimos animación de salida */
            $DivIniciarSesion.classList.add("activo");
            $DivIniciarSesion.classList.add("animate__fadeOut");

            /* Despues de 400 mls quita clase activo */
            setTimeout(() => {
                $DivIniciarSesion.classList.remove("activo");
                $DivIniciarSesion.classList.remove("animate__fadeOut");
            }, 400);
            
            
            /* Después de 400 mls añade la clase activo y la animación de
            entrada en el nuevo div */

            setTimeout(() => {
                $DivCreateCuenta.classList.add("activo");
                $DivCreateCuenta.classList.add("animate__fadeIn");
                

            }, 400);


            
            
        
        }
        if (e.target === $iniciarSesion) {

            $DivIniciarSesion.classList.remove("animate__fadeIn");
            $DivIniciarSesion.classList.remove("animate__fadeOut");
            $DivCreateCuenta.classList.remove("animate__fadeIn");
            $DivCreateCuenta.classList.remove("animate__fadeOut");


            $DivCreateCuenta.classList.add("animate__fadeOut");

            setTimeout(() => {
                $DivCreateCuenta.classList.remove("activo");
                $DivCreateCuenta.classList.remove("animate__fadeOut");
            }, 400);


            setTimeout(() => {
                $DivIniciarSesion.classList.add("activo");
                $DivIniciarSesion.classList.add("animate__fadeIn");
            }, 400);

        }

        if (e.target.matches(".BtnRegistro")) {
            $ContentForm.classList.add("activo");
            $ContentForm.classList.add("animate__fadeIn");

            setTimeout(() => {
                $ContentForm.classList.remove("animate__fadeIn");
            }, 400);
            /* Deshabilita scroll */
            d.getElementsByTagName("html")[0].style.overflow = "hidden";

        }

        if (e.target.matches(".exitform")) {
            $ContentForm.classList.add("animate__fadeOut");
            

            setTimeout(() => {
                $ContentForm.classList.remove("activo");
                $ContentForm.classList.remove("animate__fadeOut");
            }, 600);

            /*Deshabilita Scroll  */
            d.getElementsByTagName("html")[0].style.overflow = "scroll";
        }

        if (e.target === $AbriMenu) {
            $MenuVertical.classList.add("activado");
            $MenuVertical.classList.add("animate__fadeIn");
        }
        if (e.target === $CerrarMenu) {
            $MenuVertical.classList.remove("animate__fadeIn");
            $MenuVertical.classList.remove("activado");
        }
        

    });

}