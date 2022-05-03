//Actividad6

//6.1 concat arrays


var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
var comingSoonAnimals = ['panther', 'dragon', 'turtle']
var acsa = animals.concat(comingSoonAnimals)
console.log(acsa)



//6.2 order number list
var arr = [4,6,1,0,8,2]
var arrOrd = arr.sort(function(a,b){return a-b})
console.log(arrOrd)

//6.3 cow to animals
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
animals.unshift("cow")/*podría ser animals.push("cow") */
console.log(animals)

//6.3 retira eagle
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
animals.shift()/* shift quita el primero */
console.log(animals)
