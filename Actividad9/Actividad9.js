/ Ejercicios de Objetos y sus métodos básicos:
// usar 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//como referencia


/**
 * Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 * 
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */
    var student = {
        name: "David Rayy",
        age: "34",
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
    //1.
    console.log(student.name)
    //2.
    console.log(student['age'])
    //3. 
    student.name = "Steve Jobs";
    console.log(student.name)

/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
 */
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: "12",
    };
  

    Object.keys(student).length

    Object.getOwnPropertyNames(student).forEach(
        function (val, idx, array) {
          console.log(val +  ' -> ' + student[val]);
        }
    );
// Responde
// name -> David Rayy
// sclass -> VI
// rollno -> 12



/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
student.hasOwnProperty('name'); 
// responde: 
// true


/** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:
 * var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: "12",
};
delete student.rollno;
    console.log(student.rollno);  // Prints: undefined
    console.log(student.sclass);
//responde
// undefined 
// VI

/**
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 * 
    * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
La nueva edad debe ser 35.
 */ 
var student = {
    name: "David Rayy",
    age: "34",
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

student.age = "36";
console.log(student.age)



/**
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto:
 * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

    La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
 */
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

student.pet = 'cow';
console.log(student)

/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/

const objeto = {}
objeto.name = prompt("Name")
objeto.age = prompt("Age")
objeto.nationality = prompt("Nationality")
objeto.idNumber = prompt("idNumber")
console.log(objeto)
