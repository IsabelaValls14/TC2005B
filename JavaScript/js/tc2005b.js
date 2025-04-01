/*
 * Example functions to practice JavaScript
 *
 * Isabela Valls Chavez
 * 01-04-2025
 */

"use strict";

function area(base, height) {
    let area = base * height / 2;
    return area;
}

console.log( area(4, 7) );


export function firstNonRepeating(string) {
    for (let i=0; i<string.length; i++) {
        let repeated = false;
        for (let j=0; j<string.length; j++) {
            if (string[i] == string[j] && i != j) {
                repeated = true;
                break;
            }
        }
        //console.log(`Char: ${string[i]}, repeated: ${repeated}`);
        if (!repeated) {
            return string[i];
        }
    }
}
console.log( firstNonRepeating("This is a test") );
console.log( firstNonRepeating("abacddbec") );

// Escribe una función llamada bubbleSort que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
function bubbleSort(array) {

}

// Escribe dos funciones: la primera con nombre invertArray que invierta un arreglo de números y regrese 
// un nuevo arreglo con el resultado; la segunda, con nombre invertArrayInplace, que modifique el mismo arreglo 
// que se pasa como argumento.No se permite usar la función integrada 'reverse'.
function invertArray(array) {

}
function invertArrayInplace(array) {

}

// Escribe una función llamada capitalize que reciba una cadena de texto y regrese 
// una nueva con la primer letra de cada palabra en mayúscula.
function capitalize(array) {

}

// Escribe una función llamada mcd que calcule el máximo común divisor de dos números.
function mcd(num1, num2) {
    
}


// Crea una función llamada hackerSpeak que cambie una cadena de texto a 'Hacker Speak'. 
// Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
function hackerSpeak() {
    
}

// Escribe una función llamada factorize que reciba un número, y regrese una lista con todos sus factores. Por ejemplo:
// factorize(12) -> [1, 2, 3, 4, 6, 12].
function factorize() {

}
// Escribe una función llamada deduplicate que quite los elementos duplicados de un arreglo y regrese
//  una lista con los elementos que quedan.Por ejemplo:
//  deduplicate([1, 0, 1, 1, 0, 0]) -> [1, 0]
function deduplicate() {
    
}

// Escribe una función llamada findShortestString que reciba como parámetro una lista de cadenas de texto,
//     y regrese la longitud de la cadena más corta.
function findShortestString() {
    
}

// Escribe una función llamada isPalindrome que revise si una cadena de texto es un palíndromo o no.
function isPalinfrome(){

}
// Escribe una función llamada sortStrings que tome una lista de cadena de textos y devuelva una nueva
//  lista con todas las cadenas en orden alfabético.
function sortStrings() {
    
}

// Escribe una función llamada stats que tome una lista de números y devuelva una lista con dos elementos: la mediana y 
// la moda. Por ejemplo:  stats([8, 4, 2, 6, 8, 13, 17, 2, 4, 8]) -> [ 7.2, 8 ]
function stats() {
    
}

// Escribe una función llamada popularString que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
function popularString() {
    
}

// Escribe una función llamada isPowerOf2 que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
function isPowerOf2() {
    
}
// Escribe una función llamada sortDescending que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
function sortDescending() {
    
}

// Puedes utilizar el archivo de prueba en el repositorio del curso para validar tus funciones. Entra al directorio 'JavaScript', y usa el comando:

// npm test test/tc2005b_test.js