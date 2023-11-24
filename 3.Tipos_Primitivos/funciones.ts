//funciones y arreglos genericos

function saludo(nombre?:string): string{//simbolo opcional
    if(nombre)
     return `Hola ${nombre}`;
    return 'Hola!'
    }

console.log(saludo('Saturno'));
console.log(saludo());


console.log('--------')

console.log('arreglos Genericos');

let cursos: string[];
cursos = ['TypeScript', 'Angular'];

//Arreglos con generics

let nombres: Array<string>;
nombres = ['Saturno', 'Tierra', 'Venus'];

let arreglo:any[] = [1, false, 'ddd']
