const carrusel = document.getElementById("carruselIma");
const imagenes = document.querySelectorAll("#carruselIma img");
const btnAtras = document.getElementById("botonAtras");
const btnAdelante = document.getElementById("botonAdelante");

let indice = 0;

function actualizarCarrusel() {
    // Calculamos cuánto desplazar las imágenes
    const desplazamiento = -indice * 100; 
    imagenes.forEach(img => {
        img.style.transform = `translateX(${desplazamiento}%)`;
    });
}

btnAdelante.addEventListener("click", () => {
    indice++;
    // Si llega al final, vuelve al principio
    if (indice >= imagenes.length) {
        indice = 0;
    }
    actualizarCarrusel();
});

btnAtras.addEventListener("click", () => {
    indice--;
    // Si retrocede del principio, va a la última
    if (indice < 0) {
        indice = imagenes.length - 1;
    }
    actualizarCarrusel();
});