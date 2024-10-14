function soma(numero1, numero2){

    resultado = numero1 + numero2
    return resultado
}

console.log(some(5, 10))
soma(8, 18)

const personagens = ['Steven', 'Ametista', 'Pérola', 'Peridote']

personagens.push('Garnet')

console.log(`O nome da personagem é: ${personagens[2]}`)

function adicionar(){
    
    const personagens = ['Steven', 'Ametista', 'Pérola', 'Peridote']
    const usuario = document.getElementById('personagem').value

// Adiciona um personagem no final da lista
   // personagens.push(novoPersonagem)

//Adiciona um personagem no começo da lista
//personagens.unshift(novoPersonagem)

//exclui o ultimo
//personagens.pop()

//exclui o primeiro
//personagens.shift()

//Atualizar um array
//personagens[2] = 'Garnet'

console.log(personagens)

personagens.forEach(function (pegaPersonagem) {
console.log(`O nome da personagem é: ${ppegaPersonagem.toUpperCase()}`)
})

console.log(personagens)

}

const numeros = [2,4,6,8]
