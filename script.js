
function CalcularImpuestos(precioInicial){
    let precioGan = precioInicial * 0.45;
    let impPais = precioInicial * 0.30;
    let precioTotal = precioGan + impPais + precioInicial;
    alert("Precio original: $"+precioInicial+"\nImpuesto pais: $"+impPais+"\nImpuesto a las ganancias: $"+precioGan+"\nPrecio total: $"+precioTotal);
}

while(CalcularImpuestos){
let precioJuego = parseFloat(prompt('ingresa el precio de tu juego en pesos (sin impuestos)'));

if(precioJuego > 0){
CalcularImpuestos(precioJuego);
}else{
    alert("ingrese un precio valido");
}
}
