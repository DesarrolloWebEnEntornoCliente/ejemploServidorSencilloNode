'use strict';

/* Esta función  elimina los espacios duplicados de una cadena de caracteres*/
function recortar(string) {
    var result = string.trim();

    return result;
}


// para index.html
//export { recortar };

//para mocha
module.exports = recortar;
