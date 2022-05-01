//Actividad5

// 5.1 for

let l1 = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0]
for (var l1e = 0;  l1e <= 9; l1e++){
   if(l1[l1e] >= 3){
       console.log(l1[l1e])
   } else{l1.push[l1e]}
} 

// 5.2 while

let list = []
var round = 0
var linea = 1
while (round < 5){
        list.push(prompt(`tienes 5 lineas para escribir algo y esta es la ${linea}`))
        console.log(list)
    round ++
    linea++
}
