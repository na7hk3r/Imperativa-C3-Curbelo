let num1 = 37;
let num2 = 85;
let num3 = 74;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if..

let result = undefined;

if (num1 > num2 && num1 > num3) {
  result = num1;
} else if (num2 > num1 && num2 > num3) {
  result = num2;
} else {
  result = num3;
}

console.log(result);
