const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const COLOR = "red";
const ANCHO_LINEA = 3;
let x_movil, y_movil;

canvas.addEventListener("mousedown", activar);
document.addEventListener("mouseup", desactivar);
canvas.addEventListener("touchmove", dibujandoEnMovil);
document.addEventListener("touchend", desactivarMovil);

function activar() {
    canvas.addEventListener("mousemove", dibujar);
}

function desactivar() {
    canvas.removeEventListener("mousemove", dibujar);
}

function dibujar(e) {
    dibujarLinea(e.layerX, e.layerY, e.layerX+e.movementX, e.layerY+e.movementY);
}

function dibujandoEnMovil(e){
    const xFinal = e.changedTouches[0].clientX-e.path[0].offsetLeft+window.scrollX;
    const yFinal = e.changedTouches[0].clientY-e.path[0].offsetTop+window.scrollY;
    dibujarLinea(x_movil, y_movil, xFinal, yFinal);
    x_movil = xFinal;
    y_movil = yFinal;
}

function desactivarMovil(){
    x_movil = undefined;
    y_movil = undefined;
}

function dibujarLinea(x_inicial, y_inicial, x_final, y_final) {
    ctx.beginPath();
    ctx.strokeStyle = COLOR;
    ctx.lineWidth = ANCHO_LINEA;
    ctx.moveTo(x_inicial, y_inicial);
    ctx.lineTo(x_final, y_final);
    ctx.stroke();
    ctx.closePath();
}