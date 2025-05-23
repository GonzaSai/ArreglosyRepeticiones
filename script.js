//Ejercicio 1

//1

let frutas = ['Manzana', 'Naranja', 'Mandarina']


//2
frutas.push('Durazno')

//3

frutas.unshift('Ciruela')

//4

frutas.pop()

//5

frutas.shift()

//6

console.log(frutas)

//Ejercicio 2

//1

let nombres = ['Messi', 'Julian', 'Di Maria', 'De Paul', 'Dibu']

//2

console.log(nombres.length)

//3

nombres.push('Cuti', 'Alexis')


//4

console.log(nombres.length)

//Ejercicio 3

//1

let numeros = [1, 2, 3, 4]

//2 y 3

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice])
    
}

//Ejercicio 4

//1

let numeros2 = [5, 6, 7, 8]

let suma = 0

//2 y 3

for (let indice2 = 0 ; indice2 < numeros2.length; indice2++) {
    suma += numeros2[indice2]
    console.log(suma)
}

//Ejercicio 5

//1
let palabra1 = prompt('Introduce una palabra')
let palabra2 = prompt('Introduce una palabra')
let palabra3 = prompt('Introduce una palabra')
let palabra4 = prompt('Introduce una palabra')
let palabra5 = prompt('Introduce una palabra')

//2

let palabras = []
palabras.push(palabra1, palabra2, palabra3, palabra4, palabra5)

//3

console.log(palabras)
