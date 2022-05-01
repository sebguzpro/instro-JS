//1. numero y multiplos de 5 con while
var elnu = prompt('Elige un número y te mostraré los múltiplos del 5 que sean menores.')  
m5 = 1
while (m5 <= elnu) {
    if(m5%5===0){
    console.log(m5)}
    m5++
} 

//2. lo mismo pero con do while
var elnu = prompt('Elige un número y te mostraré los múltiplos del 5 que sean menores.')  
var m5 = 0
do {
    if(m5%5===0){
    console.log(m5)}
    m5++
} 
while (m5 <= elnu) 

//3. for
var contador = 0
for (var index = 1; index <= 50; index++){
if(!(index%2==0)){
    contador = contador + 1
    console.log(`${index} es impar`)
 }
}
console.log(`Del 1 al 50 hay ${contador} números impares`)
