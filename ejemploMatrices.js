let arrayMatriz = []
let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY
console.table(arrayMatriz)

console.log('=================')

console.log(arrayMatriz.length)
for(let i=0; i<arrayMatriz.length; i++) {
    console.table(arrayMatriz[i])
}

console.log('================')

//Primera columna:
for(let i=0; i<arrayMatriz.length; i++) {
    console.table(arrayMatriz[i][0])
}

//Primera fila:
for(let i=0; i<arrayMatriz[0].length; i++) {
    console.table(arrayMatriz[0][i])
}

console.log('=================')


//Bucle que recorre el primer array
for(let i=0; i<arrayMatriz.length; i++) {
    //Bucle que recorre el array que está en la posición i
    for(let j=0; j<arrayMatriz[i].length; j++) {
        console.table(arrayMatriz[i][j]);
    }
}


/*Por ahora, trabajamos con matrices de dos dimensiones
pero también existen matrices multidireccionales*/
