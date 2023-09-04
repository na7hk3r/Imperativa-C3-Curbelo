let num1 = 25;
let num2 = 626;
let num3 = 6235;
let num4 = 4445;

const numeros = [num1, num2, num3, num4];

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.

let result = numeros[0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > result) {
    result = numeros[i];
  }
}

console.log(result);
