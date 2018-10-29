/*
Ejemplo para cargar el módulo  modulo-utilidades
import { recortar } from './modulo-utilidades.js';
*/

document.getElementById("enviar").addEventListener("click",function(e){
   var nombreSinrecortar = document.getElementById("nombre");
   var nombreRecortado = document.getElementById("recortado");
    nombreRecortado.value= recortar(nombreSinrecortar.value);
});
