# Archivo tsconfig

- Es un archivo json
- Su presencia indica que el directorio es la raíz de un proyecto Typescript
- Permite Configurar opciones para el compilador
- Especifica los archivos principales


1- Se ejecuta `tsc --init` en el directorio Raiz del proyecto o donde este el archivo.
2-El comando anterior crea un archivo json
3- `tsc --watch `es para ver los cambios que se realizan en el archivo typescript y de forma automática se cambia en el archivo js.


# Personalizar el comportamiento del compilador

Se empieza trabajando en el archivo json.

## Incluir archivos 

Ejemplo:

``
"include": [
    "2.Archivo_tsconfig/*.ts" //se asegura que todos los archivos dentro de la carpeta sean compilados.
],

"exclude": [
    "2.Archivo_tsconfig/test.ts" // excluye este archivo perteneciente a la carpeta
]


``

## Crear un directorio para archivos JS

1- Se crea una carpeta dist, esta contendra los archivos js resultantes de la compilación de los archivos typescript.
2- Se ubica la ipción  `outDir` en json y se le da la ubicacion del directorio, en este caso sera ./dist