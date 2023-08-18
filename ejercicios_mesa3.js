//Grupo 3: Jurany Ramirez, Mathias Curbelo, Julian Callejas, Josmar Diaz, Zabdiel

let numbers =[22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);

// devuelve undefined

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ];
console.log(grupoDeAmigos[5]);

// devuelve "Ironman"

let str = "un string cualquiera";
let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ];
console.log(arrayAleatorio[arrayAleatorio.length - 1]);

// devuelve "Un string cualquiera"

console.log("==================================")

/////////////////////////////////////////////////

let arrayPeliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log(arrayPeliculas[1]);
console.log(arrayPeliculas[4]);

for (let i = 0; i < arrayPeliculas.length; i++){
    arrayPeliculas[i] = arrayPeliculas[i].toUpperCase();
}
console.log(arrayPeliculas)

console.log("==================================")

/////////////////////////////////////////////////

let arrayPeliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

for (let i = 0; i < arrayPeliculas2.length; i++){
    arrayPeliculas2[i] = arrayPeliculas2[i].toUpperCase();
}

let newArray = [];
function arrayJoin(arr, arr2) {
    for (let i = 0; i < arr.length; i++){
        newArray.push(arr[i]);
    }
    let juego = arr2.pop()
    for (let i = 0; i < arr2.length; i++){
        newArray.push(arr2[i])
    }
    return newArray;
};

console.log(arrayJoin(arrayPeliculas, arrayPeliculas2));

console.log("==================================")

/////////////////////////////////////////////////

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(scores1, scores2) {
    if (scores1.length !== scores2.length) {
        return "Diferentes";
    }
    for (let i = 0; i < scores1.length; i++) {
        if (scores1[i] !== scores2[i]) {
            return "Diferentes";
    }
}

    return "Iguales";
}
let resultado = compararCalificaciones(asiaScores, euroScores);
console.log(resultado);

console.log("==================================")

/////////////////////////////////////////////////
////////////////     BONUS       ////////////////

const inversor = (array) =>{
    return array.reverse();
}

const imprimirInverso  = (array) =>{
    for (let index = array.length-1; index >=  0; index--) {
        console.log(array[index])
    }
}

imprimirInverso([1,2,3,4,5])

const newArray2 = inversor([1,2,3,4,5]);
console.log(newArray2)

//
const sumaArray= (array) =>{
    let suma= 0
    for (let index = 0 ; index < array.length; index++) {
        suma = suma + array[index]
    }
    console.log(suma)
}

sumaArray([-5,100,19])

//
const joinString = (array) =>{
    let newString= '' 
    for (let index = 0 ; index < array.length; index++) {
        newString += array[index]
    }
    console.log(newString)
}

joinString(['h','o','l','a'])