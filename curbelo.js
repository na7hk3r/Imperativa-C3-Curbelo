// Mathias Curbelo - C3 - 31-8-23

// Ejercicio 1:

const restarPares = (num1, num2) =>
  num1 % 2 === 0 && num2 % 2 === 0
    ? num1 - num2
    : "Lo siento, uno o más parámetros no son pares";
const resultado = restarPares(8, 4);

console.log(resultado);
console.log("=======");

// Ejercicio 2:

const controlAcceso = (edad, entrada) => {
  if (entrada) {
    if (edad >= 18) {
      return true;
    } else {
      return "Sólo puedes acceder con un adulto acompañante";
    }
  } else {
    return false;
  }
};

console.log(controlAcceso(29, true));
console.log("=======");

// Ejercicio 3:

let productos = [
  {
    producto: "remera",
    tipo: "indumentaria",
    precio: 2100,
  },
  {
    producto: "notebook",
    tipo: "tecnologia",
    precio: 200000,
  },
  {
    producto: "celular",
    tipo: "tecnologia",
    precio: 27000,
  },
  {
    producto: "protector solar",
    tipo: "cosmetica",
    precio: 2500,
  },
  {
    producto: "pantalon",
    tipo: "indumentaria",
    precio: 7500,
  },
  {
    producto: "tablet",
    tipo: "tecnologia",
    precio: 60000,
  },
];

const filtroTecProd = (arr) => {
  let productosFiltrados = [];

  for (let i = 0; i < arr.length; i++) {
    let producto = arr[i];

    if (producto.tipo === "tecnologia" && producto.precio >= 50000) {
      productosFiltrados.push(producto);
    }
  }

  return productosFiltrados;
};

let productosFiltrados = filtroTecProd(productos);

console.log(productosFiltrados);
console.log("=======");
console.log("Mathias Curbelo - C3");
