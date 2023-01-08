function solicitarnombre(){
  let nombre = prompt("ingrese su nombre")
  alert("El nombre ingresado es "+ nombre)
}
function multiplicar (parametro1,parametro2,parametro3,parametro4){
  let resultadoM=parametro1*parametro2/parametro3 + parametro4
  alert( "pagaria con impuestos iva $"+resultadoM)
   let total=resultadoM+costoenvio;
   alert("Pagaria con envio $"+ total)
}

solicitarnombre();
const descuento = "650";
let salir = "";
let iva=21;
let iva2=100;
let costoenvio=3500


do {
  const monto = parseInt( prompt("Monto de su compra$$"));
  if (monto>"5000") {
let resta=monto-descuento
alert("con el descuento paga $"+resta);
multiplicar(iva,resta,iva2,resta);
  
  }else {
    multiplicar(iva,monto,iva2,monto) 
  }

 
  salir = prompt("desea usted salir");
} while (salir != "si");
