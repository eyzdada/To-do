let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let numerosPares = []

numeros.forEach(function (pegaCadaNumero) {
    if (pegaCadaNumero % 2 === 0){
    numerosPares.push(pegaCadaNumero)
    }
    })
    console.log(numerosPares)