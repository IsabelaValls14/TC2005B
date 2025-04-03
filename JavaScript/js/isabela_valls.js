/*
 * Example functions to practice JavaScript
 *
 * Isabela Valls Chavez
 * 01-04-2025
 */

"use strict";

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
export function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

  return arr;
}

// Escribe dos funciones: la primera con nombre invertArray que invierta un arreglo de números y regrese 
// un nuevo arreglo con el resultado; la segunda, con nombre invertArrayInplace, que modifique el mismo arreglo 
// que se pasa como argumento.No se permite usar la función integrada 'reverse'.
 export function invertArray(arr) {
     let arrSwapped = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        arrSwapped.push(arr[i]);

    }
    return arrSwapped;
}

export function invertArrayInplace(arr) {
    let left = 0;
    let right =  arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp

        left++;
        right--;
    }
    return arr;
}

// Escribe una función llamada capitalize que reciba una cadena de texto y regrese 
// una nueva con la primer letra de cada palabra en mayúscula.
export function capitalize(str) {
    const words = str.split(" ");
    const capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            let firstLetter = word[0].toUpperCase();
            let restOfWord = word.slice(1);
            capitalizedWords.push(firstLetter + restOfWord);
        } else {
            capitalizedWords.push("");
        }
    }
    return capitalizedWords.join(" ");
}

// Escribe una función llamada mcd que calcule el máximo común divisor de dos números.
export function mcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;   
}


// Crea una función llamada hackerSpeak que cambie una cadena de texto a 'Hacker Speak'. 
// Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
export function hackerSpeak(texto) {
        const mapa = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5'
    };

    return texto
        .split('')
        .map(char => {
            const lowerChar = char.toLowerCase();
            return mapa[lowerChar] ? mapa[lowerChar] : char;
        })
        .join(''); 
}

// Escribe una función llamada factorize que reciba un número, y regrese una lista con todos sus factores. Por ejemplo:
// factorize(12) -> [1, 2, 3, 4, 6, 12].
export function factorize(num) {
    const factores = [];
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factores.push(i);
        }
    }

    return factores;
}
// Escribe una función llamada deduplicate que quite los elementos duplicados de un arreglo y regrese
//  una lista con los elementos que quedan.Por ejemplo:
//  deduplicate([1, 0, 1, 1, 0, 0]) -> [1, 0]
export function deduplicate(arr) {
    return [...new Set(arr)];
}

// Escribe una función llamada findShortestString que reciba como parámetro una lista de cadenas de texto,
//     y regrese la longitud de la cadena más corta.

export function findShortestString(cadenas) {
    if (cadenas.length === 0) return 0;

    let minLength = cadenas[0].length;

    for (let i = 1; i < cadenas.length; i++) {
        if (cadenas[i].length < minLength) {
            minLength = cadenas[i].length;
        }
    }

    return minLength;
}
// Escribe una función llamada isPalindrome que revise si una cadena de texto es un palíndromo o no.
export function isPalindrome(arr) {
    if (arr.length == 0) {
        return true;
    }
    let left = 0;
    let right =  arr.length - 1;

    while (left < right) {
        if (arr[left] != arr[right]) {
            return false
        }

        left++;
        right--;
    }
    return true;
}
// Escribe una función llamada sortStrings que tome una lista de cadena de textos y devuelva una nueva
//  lista con todas las cadenas en orden alfabético.
export function sortStrings(strings) {
    return strings.sort();
}

// Escribe una función llamada stats que tome una lista de números y devuelva una lista con dos elementos: la mediana y 
// la moda. Por ejemplo:  stats([8, 4, 2, 6, 8, 13, 17, 2, 4, 8]) -> [ 7.2, 8 ]
export function stats(arr) {
    if (arr.length == 0) {
        return [0, 0];
    }

    let res = [];
    let suma = 0, promedio = 0, contador = 0;

    for (let i=0; i<arr.length; i++) {
        suma = suma + arr[i];
    }
    promedio = suma / arr.length;
    res.push(promedio);

    const elementos_unicos = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (elementos_unicos.has(arr[i])) {
            elementos_unicos.set(arr[i], elementos_unicos.get(arr[i]) + 1);
        } else {
            elementos_unicos.set(arr[i], 1);
        }
    }

    let maxKey = null;
    let maxValue = 0;

    for (const [key, value] of elementos_unicos) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }
    res.push(maxKey);
    return res;
}




// Escribe una función llamada popularString que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
export function popularString(strings) {
    if (!Array.isArray(strings) || strings.length === 0) return "";

    const counts = {};
    let maxCount = 0;
    let mostPopular = "";

    for (const str of strings) {
        counts[str] = (counts[str] || 0) + 1;

        if (counts[str] > maxCount) {
            maxCount = counts[str];
            mostPopular = str;
        }
    }

    return mostPopular;
}


// Escribe una función llamada isPowerOf2 que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
export function isPowerOf2(n) {
       if (n < 1) return false;
    return (n & (n - 1)) === 0;
}
// Escribe una función llamada sortDescending que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
export function sortDescending(num) {
    if (!Array.isArray(num)) return [];

    return [...num].sort((a, b) => b - a);
}
// npm test test/tc2005b_test.js