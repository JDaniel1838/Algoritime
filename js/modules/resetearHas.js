export default function resetarHast() {

    let RutaCompleta = window.location.hash.length;
    if (RutaCompleta>=1) {
        window.location.hash = "";
    }
    

    


}