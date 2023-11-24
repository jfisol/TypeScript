"use strict";
//funciones y arreglos genericos
function saludo(nombre) {
    if (nombre)
        return `Hola ${nombre}`;
    return 'Hola!';
}
console.log(saludo('Saturno'));
console.log(saludo());
console.log('--------');
console.log('arreglos Genericos');
let cursos;
cursos = ['TypeScript', 'Angular'];
//Arreglos con generics
let nombres;
nombres = ['Saturno', 'Tierra', 'Venus'];
let arreglo = [1, false, 'ddd'];
