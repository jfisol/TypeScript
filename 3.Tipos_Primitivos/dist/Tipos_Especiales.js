"use strict";
//Tipos primitivos especiales
//tipo any
let desconocido; // cuando no se conoce el tipo de dato automaticamente ts lo define como any
//otra forma
let desconocido2;
desconocido = 'Hola Mundo';
desconocido = 12;
console.log('Tipo Any: ' + desconocido2);
console.log('-----');
//Tipo void
let vacio; //no tiene tipo de retorno, este se utiliza con funciones
function mostrarContenido(curso) {
    console.log('nombre del curso: ' + curso);
}
console.log('tipo Void: ' + mostrarContenido('Typescript'));
console.log('-----');
//never
let nunca; //la funcion nunca retorna un valor valido
function retornaError(error) {
    throw new Error(error);
}
console.log(retornaError('error Inesperado '));
console.log('-----');
//Tipo null y Undefined
let variableUndefined = undefined; // se puede utilizar cono tipo y definir, esto significa la ausencia de un valor
let variableNull = null;
