
function cambiarColor() {
    let nuevoColor = crearColorRGB();
    document.getElementsByTagName("body")[0].style.backgroundColor = nuevoColor;
    document.getElementById("random-rgb").innerHTML = nuevoColor; // mostrar en el div contenedor el código rgb del color
}

function crearColorRGB() {
    const arrayRGB = [];
    for (let i = 0; i < 3; i++) {
        let numero = Math.floor(Math.random() * 256);
        arrayRGB.push(numero);
    }
    const stringRGB = "rgb(" + arrayRGB.toString() + ")";
    return stringRGB;
}