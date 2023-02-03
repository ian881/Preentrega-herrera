
const formulario = document.getElementById("formulario");

 formulario.addEventListener("submit", (Event) => {
Event.preventDefault();
const inputnombre = document.getElementById("nombre")
const inputapellido = document.getElementById("Apellido")
const inputprecio = document.getElementById("precio")
const inputdestino = document.getElementById("destino")

localStorage.setItem("descuento",650)
localStorage.setItem("iva",21)
localStorage.setItem("iva2",100)

let descuento=localStorage.getItem("descuento")
let iva=localStorage.getItem("iva")
let iva2=localStorage.getItem("iva2")
let nombrett= inputnombre.value
let apellidott=inputapellido.value
let enviocost= parseInt (inputdestino.value);
const monto =parseInt (inputprecio.value);
let destinott = inputdestino.value

function multiplicar (parametro1,parametro2,parametro3,parametro4){
  let resultadoM=parametro1*parametro2/parametro3 + parametro4
  document.getElementById("impuestosp").innerHTML="su monto con impuestos seria $"+resultadoM
let finish=resultadoM + enviocost;
console.log(finish)
document.getElementById("totalp").innerHTML="Su precio total seria $"+finish
}


  if (monto>"5000") {
let resta=monto-descuento;

document.getElementById("montop").innerHTML="su monto seria $"+resta;
multiplicar(iva,resta,iva2,resta);

  
  }else {
    document.getElementById("montop").innerHTML="su monto seria $"+monto;
    multiplicar(iva,monto,iva2,monto) ;
  }
 
  document.getElementById("nombreP").innerHTML="Bienvenido "+ nombrett + apellidott
document.getElementById("enviop").innerHTML="su costo de envio seria $"+enviocost







 });






  

   



      

