//Boolean
let estaConectado = true;
let estaInscrito: boolean;

function tieneDescuento(curso){
    if(curso === 'typescript')
        return true;
    return false;
    
}

console.log(`tieneDescuento(angular):`, tieneDescuento('angular'));