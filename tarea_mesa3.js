/*
    Integrantes Grupo3
    Hans Urpay, 
    Karen Urbano, 
    Mathias Curbelo, 
    Juan Palaceto, 
    Mariana Ampudia Gonzalez, 
    Roger Cabezas, 
    Lia Torres
*/

// Agregar caminos
let edad = 19;
if (edad < 0) {
  console.log("Error, edad inválida. Por favor, ingrese un número válido.");
} else if (edad < 18) {
  console.log("No puede pasar al bar.");
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else if (edad >= 21) {
  console.log("Bienvenido, felicidades por ser mayor wey.");
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
}
if (edad % 2 !== 0) {
  console.log("¿Sabías que tu edad es impar?");
}

///////////////////////////////
// Total A Pagar.

const totalAPagar = (vehiculo, litrosConsumidos) => {
  let precioTotal = litrosConsumidos;
  switch (vehiculo) {
    case "coche":
      litrosConsumidos *= 86;
      break;
    case "moto":
      litrosConsumidos *= 70;
      break;
    case "autobus":
      litrosConsumidos *= 55;
      break;
  }

  if (precioTotal >= 0 && precioTotal <= 25) {
    litrosConsumidos += 50;
  } else if (precioTotal > 25) {
    litrosConsumidos += 25;
  }
  return litrosConsumidos;
};

console.log(totalAPagar("moto", 30));

//////////////

// Incompleto por tiempo //

// let pollo = 150;
// let carne = 200;
// let vegetariano = 100;

// let oreganoYParmesano = 50;
// let negroAvena = 60;
// let sinGluten = 75;

// let queso = 20;
// let tomate = 15;
// let lechuga = 10;
// let cebolla = 15;
// let mayonesa = 5;
// let mostaza = 5;

// let totalSandwich = undefined;

// const armadoDeSandwich = (tipo, tipodePan, extras) => {
//     switch (tipo) {
//         case "pollo":
//             pollo = "pollo"
//     }
// }

// //total sandwich += pollo

