'use strict';
// module "mi-modulo.js"
 function sayHelloInEnglish() {
  return "HELLO";
};

 function sayHelloInSpanish() {
  return "Hola";
};

/*const modulo = "mi-modulo";

var objeto = {
    propiedades:{
        nombre:'modulo',
        nacimiento:'Alcobendas'
    },
    saludo: function(){
        console.log(`Hola, soy un objeto de ${modulo}`);
    }
}

export { saludo, modulo, objeto };

*/

export { sayHelloInEnglish, sayHelloInSpanish };
