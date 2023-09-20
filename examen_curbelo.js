
// Ejercicio 1:
const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
];

const bubbleSortAutos = (arrayAutos) => {
    let array = arrayAutos.length;

    for (let i = 0; i < array - 1; i++) {
        for (let j = 0; j < array - i - 1; j++) {
            if (arrayAutos[j].modelo > arrayAutos[j + 1].modelo) {
                let temp = arrayAutos[j];
                arrayAutos[j] = arrayAutos[j + 1];
                arrayAutos[j + 1] = temp;
            }
        }
    }

    let autosFiltrados = [];
    for (let i = 0; i < array; i++) {
        if (arrayAutos[i].modelo >= 2020) {
            autosFiltrados.push(arrayAutos[i]);
        }
    }

    return autosFiltrados;
}

let autosNuevosOrdenados = bubbleSortAutos(autos);

console.log("Ejercicio 1: ");
console.log(autosNuevosOrdenados);
console.log("* * *");





// Ejercicio 2:
let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
];

const ordenNotaPromedio = (arrayEstudiantes) => {
    let array = arrayEstudiantes.length;

    for (let i = 0; i < array - 1; i++) {
        for (let j = 0; j < array - i - 1; j++) {
            if (arrayEstudiantes[j].notaPromedio < arrayEstudiantes[j + 1].notaPromedio) {
                [arrayEstudiantes[j], arrayEstudiantes[j + 1]] = [arrayEstudiantes[j + 1], arrayEstudiantes[j]];
            }
        }
    }

    return arrayEstudiantes;
};

let estudiantesOrdenados = ordenNotaPromedio(estudiantes);

console.log("Ejercicio 2: ");
console.log(estudiantesOrdenados);
console.log("* * *");





// Ejercicio 3:

let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

const obtenerColumna = (matriz, columna) => {
    let columnaEspecifica = [];
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i][columna] !== undefined) {
            columnaEspecifica.push(matriz[i][columna]);
        }
    }
    return columnaEspecifica;
}

let columnaDeseada = obtenerColumna(matrix, 2);

console.log("Ejercicio 3: ");
console.log(columnaDeseada);


const reemplazarImparesPorCero = (matriz) => {
    let nuevaMatriz = [];
    for (let i = 0; i < matriz.length; i++) {
        let fila = [];
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 !== 0) {
                fila.push(0);
            } else {
                fila.push(matriz[i][j]);
            }
        }
        nuevaMatriz.push(fila);
    }
    return nuevaMatriz;
}

let nuevaMatrix = reemplazarImparesPorCero(matrix);

console.table(nuevaMatrix);
console.log("* * *");
console.log("Mathias Curbelo, Camada 3");
