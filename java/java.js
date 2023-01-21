function solicitarnombre(){
  let nombre = prompt("ingrese su nombre")
  alert("El nombre ingresado es "+ nombre)
}
function multiplicar (parametro1,parametro2,parametro3,parametro4){
  let resultadoM=parametro1*parametro2/parametro3 + parametro4
  alert( "pagaria con impuestos iva $"+resultadoM)
   
}

solicitarnombre();
const descuento = "650";
let salir = "";
let iva=21;
let iva2=100;
let costoenvio=3500

const paises=[
  {
    pais:"argentina",
    envio:850,
  },

  {
    pais:"chile",
    envio:1200,
  },

  {
    pais:"uruguay",
    envio:1500,
  },
  {
    pais:"paraguay",
    envio:2000,
  },
]

do {
  const monto = parseInt( prompt("Monto de su compra$$"));
  if (monto>"5000") {
let resta=monto-descuento
alert("con el descuento paga $"+resta);
multiplicar(iva,resta,iva2,resta);
  
  }else {
    multiplicar(iva,monto,iva2,monto) 
  }
 
  let envioalpais= prompt("para que pais es el envio ?solo para uruguay,paraguay,chile y argentina")

  const encontrar = paises.find( (paises)=>paises.pais === envioalpais );
  console.log(encontrar);
 

  alert("Usted pagaria un envio de $"+encontrar.envio
  
  )

  salir = prompt("desea usted salir");
} while (salir != "si");
