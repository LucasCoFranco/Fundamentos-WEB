nota1 = parseInt(console.log("Insira o valor da primeira nota: "))
nota2 = parseInt(console.log("Insira o valor da segunda nota: "))
nota3 = parseInt(console.log("Insira o valor da terceira nota: "))
nota4 = parseInt(console.log("Insira o valor da quarta nota: "))

media = ((nota1 + nota2 + nota3 + nota4) / 4)

if (media >= 6){
    console.log("Sua nota é: " + media)
    console.log("Aprovado")
} else {
    console.log("Sua nota é: " + media);
    console.log("Reprovado");
}

module.exports = media 
var http = require('http')

http.createServer(function(req, res0){
    res0.end("Calculadora")
}).listen(8081)

console.log("O servidor está ativo!");