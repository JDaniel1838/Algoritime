export default function ScrollSpy() {
    const $sessions = document.querySelectorAll(".ScrollSpy");
    
    const cb = (entradas) => {
        entradas.forEach(el => {
            const id = el.target.getAttribute("data-selector");
            if (el.isIntersecting) {
                
                document.querySelectorAll(`.${id}`).forEach(el => {
                    el.classList.add("activado");
                });
            } else {
                document.querySelectorAll(`.${id}`).forEach(el => {
                    el.classList.remove("activado");
                });
            }
        });
    } 
    const observer = new IntersectionObserver(cb, {
        rootMargin:"-300px"
    });
    

    $sessions.forEach(el => {
        observer.observe(el);
    });
}