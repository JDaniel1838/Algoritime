export default function maquinaEscribir() {
    const typed = new Typed(".typed", {
        strings: ["MATEMÁTICAS", "Suma de fracciones", "Decimal a Binario","División de fracciones","Decimal a Octal"],
        typeSpeed: 75,
        startDeley: 1000,
        backSpeed: 75,
        smartBackspace: true,
        shuffle: false,
        backDelay: 1500,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: "|",
        contentType: null
    });
}



