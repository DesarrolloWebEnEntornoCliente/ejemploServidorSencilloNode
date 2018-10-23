import { recortar } from './utilidades.js';

//import { sayHelloInEnglish, sayHelloInSpanish } from './mi-modulo.js';
//alert(sayHelloInEnglish());

document.getElementById("enviar").addEventListener("click",function(e){
   var nombreSinrecortar = document.getElementById("nombre");
   var nombreRecortado = document.getElementById("recortado");
    nombreRecortado.value= recortar(nombreSinrecortar.value);
});
