"use strict";
//Boolean
let estaConectado = true;
let estaInscrito;
function tieneDescuento(curso) {
    if (curso === 'typescript')
        return true;
    return false;
}
console.log(`tieneDescuento(angular):`, tieneDescuento('angular'));
