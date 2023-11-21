let boxMinux = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");
let subtotal= document.getElementById("subtotal");
let numeroProductos = document.getElementById("numeroProductos");
let valorProducto = 350000;
let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto);
document.getElementById("precioUnidad").innerHTML = valorProducto;

boxPlus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML;
    if (auxCant < 10) {
        auxCant++;
        boxCantidad.innerHTML = auxCant;
        determinarSingularPlural(auxCant);
        calcularSubtotal()
    }
});
boxMinus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML;
    if (auxCant > 0) {
        auxCant--;
        boxCantidad.innerHTML = auxCant;
        determinarSingularPlural(auxCant);
        calcularSubtotal()
    }
});
function calcularSubtotal(){
    let auxCant = valorProducto * Number(boxCantidad.innerHTML);
    let auxCantUMil = Intl.NumberFormat("de-DE").format(auxCant);
    document.getElementById("precioUnidad").innerHTML = valorProducto;
    document.getElementById('subtotal').innerHTML = "$" +auxCantUMil;
};
function determinarSingularPlural(auxCant) {
    if (auxCant == 1) {
        numeroProductos.innerHTML = " ("+auxCant+ " Producto)";
    }else if ((auxCant == 0) || auxCant > 1){
        numeroProductos.innerHTML = " ("+auxCant+ " Productos)";
    };
}