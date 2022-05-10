//A7 
//funcion buscar palabras
// crear string de palabras y palabra, como params

function findWord (phrase, word){
    word = word.toLowerCase();
    phrase = phrase.toLowerCase();
    if(phrase.indexOf(word)!=-1){
        return true;
    } else{return false
    }
}

var find = findWord("Hace 500 años habia un java s", "JAVA");
console.log(find)


//7.2 sum array with .reduce
const array = [1, 2, 3, 4, 10, 11]
 function myFunction(){
     let sum = array.reduce((a,b)=>a+b, 0);
     console.log(sum);
    }

    myFunction()
// responde 31

//7.3
//palíndromo = P

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   palindrome("computadora");
//responde false
palindrome("madam");
//responde true

//7.4 temp converter

function convTemp(temp, scale){
    if (scale == 1) { 
        res = ((temp*9/5)+32)
    } else if( scale == 0){
        res =((temp-32)*5/9)
    }
    return res
}
var temp1 = prompt("Temp: ")
var scale1 = prompt("Scale?      Celsius = 1 or Fahrenheit = 0 ")//si tiene celsius el resultado es fhrht, si tiene fhrht le da celsius
console.log(convTemp(temp1, scale1))
