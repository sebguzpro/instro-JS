//1. num divisible entre dos
var n = prompt("elige un número")
if(n % 2 == 0){
    console.log('es divisible entre 2')
}else{
    console.log('no es divisible entre 2')
}

//2. num es par

var n = prompt("elige un múmero")
if(n % 2 == 0){
    alert('es divisible entre 2')
}else{
    alert('no es divisible entre 2')
}

//3. 1000 ganaste

var n = prompt("elige un múmero")
if(n == 1000){
    alert('Ganaste un Premio')
}else{
    alert('Lo sentimos sigue participando')
}

//4. num +> que otro

var n1 = prompt("elige un número")
var n2 = prompt("elige un número")
if(n1>n2){
    console.log(n2 + " es menor que " + n1)
}else if(n2>n1){
    console.log(n1 + " es menor que" + n2)
}

//5. mayor de 3

var n1 = prompt("elige un número")
var n2 = prompt("elige otro número")
var n3 = prompt("elige uno más")

if(n1>n2 && n1>n3){
   document.write(n1 + " es mayor que " + n2 + " y " + n3)
}else if(n2>n1 && n2>n3) 
{
    document.write(n2 + " es mayor que " + n1 + " y " + n3)
}
else if(n3>n1 && n3>n2)
{
    document.write(n3 + " es mayor que " + n1 + " y " + n2)
}
else if(n1 == n2 && n2>n3){
    document.write(n1 + " y  " + n2 + " son mayores que " + n3)

}
else if(n1 == n3 && n3>n2){
    document.write(n1 + " y  " + n3 + " son mayores que " + n2)

}
else if(n2 == n3 && n2>n1){
    document.write(n2 + " y  " + n3 + " son mayores que " + n1)

}
else if(n1 == n3 && n3>n2){
    document.write(n1 + " y  " + n3 + " son mayores que " + n2)

}

//6. id Disco
var n = prompt("Por favor, ingrese su nombre:").toLowerCase()
var a = prompt("Indique su edad:")
if (a >= 18 && n == "mario"  || a >= 18 && n == "carlos" )
{
   alert('Bienvenido a la zona VIP')
}
else if(a > 18) {
  alert('Bienvenido a zona general.')
}
else if(a < 18) {
 alert('Solo aceptamos mayores de 18')
}



