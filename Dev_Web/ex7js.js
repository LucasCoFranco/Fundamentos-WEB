console.log("Vamos calcular seu IMC?")
const readline = require('node:readline');
const peso = 0;
const altura = 0;
const valor =  peso / (altura * 2);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Qual é seu peso? ', peso =>{
    console.log(`Seu peso é de ${peso} kg`);
    rl.question('Qual é sua altura? (em cm) ', altura =>{
        console.log(`Sua altura é de ${altura} cm`);
    
        if (valor < 18.5) {
            console.log("Abaixo do Peso"); 
        } else if (valor >= 18.5 && valor < 25) {
            console.log("Peso normal"); 
        } else if (valor >= 25 && valor < 30) {
            console.log("Acima do peso"); 
        } else if (valor >= 30) {
            console.log("Sobrepeso"); 
        }
        rl.close();
    })
})

/*rl.question('Qual é sua altura? (em cm) ', altura =>{
    console.log(`Sua altura é de ${altura} cm`);
    rl.close();
})

var valor = peso / (altura * 2)
    
if (valor < 18.5) {
    return "Abaixo do Peso"
    } else if (valor >= 18.5 && valor < 25) {
        return "Peso normal"
    } else if (valor >= 25 && valor < 30) {
        return "Acima do peso"
    } else if (valor >= 30) {
        return "Sobrepeso"
    }*/










