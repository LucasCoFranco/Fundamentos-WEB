function IMC(peso, altura) {
    valor = peso / (altura * 2)
    if (valor < 18.5) {
        return "Abaixo do Peso"
    } else if (valor >= 18.5 && valor < 25) {
        return "Peso normal"
    } else if (valor >= 25 && valor < 30) {
        return "Acima do peso"
    } else if (valor >= 30) {
        return "Sobrepeso"
    }
}

const peso = 1 
const altura = 1

const readline = require('readline');

// Crie uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunte ao usuário e espere por uma resposta
rl.question('Digite seu peso: ', (peso) => {
    console.log(`Você digitou: ${peso}`);

rl.question('Digite seu peso: ', (altura) => {
    console.log(`Você digitou: ${altura}`);
  // Feche a interface de leitura
  rl.close();
});

IMC (peso, altura);


