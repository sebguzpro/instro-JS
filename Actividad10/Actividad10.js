// https://ydkjs-exercises.com/up-going/ch1/q8
// cuestionario cap 1 y 2-hasta la 19 You Don't Know JS

/** 1
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo números más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
// => function arrow
var arr=[3,4,6,1,5,2,9,10,23,12]
const  numberHL=(arr)=>{
  ordenArr=arr.map(function(elements){
    return elements
})
ordenArr.sort(function(a,b){return a-b})
console.log(ordenArr)
console.log("segundo más bajo:" + ordenArr[1])
console.log("segundo más alto" + ordenArr[ordenArr.length-2])
}

console.log(numberHL(arr))
/*2
const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];

Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
al String "name" para que devuelva algo así: 

            ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
*/

const coleccion = [
  {a: 11, b:224, name: "M48 Bulldog"},
  {a:23, b:56, name: "Object 140"},
  {a: 32, b:75, name: "T57 Heavy"},
]
function union(array){
  let conc = []
  const ab = array.map((data)=> data.a + data.b);
  const names= array.map((item)=> item.name);
  for(let i=0; i<ab.length;i++){
    conc.push(ab[i]+" "+names[i]+"-+-");
  }
  conc=conc.reduce((prev,curr)=> prev+curr);
  return conc;
}
console.log(union(coleccion))
// responde
// 235 M48 Bulldog-+-79 Object 140-+-107 T57 Heavy-+-

    /** 2
  * Dadas dos matrices de enteros,
  * encuentra qué elementos faltan en la segunda matriz
  * de la primera matriz.

Ejemplo

La matriz es la lista original. Los números que faltan son
     matriz = [7,2,5,3,5,3]
     br = [7,2,5,4,6,3,5,3]

     Los números que faltan en arr son [4,6]

*/
 matriz = [7,2,5,3,5,3]
 br = [7,2,5,4,6,3,5,3]
let notHere=[];
for(let i=0; i<br.length;i++){
  if(matriz.includes(br[i])){
    continue;
  } else {
    notHere.push(br[i]);
  }
}
console.log(notHere);
