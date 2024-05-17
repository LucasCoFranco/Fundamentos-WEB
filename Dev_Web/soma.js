var soma = function(n1,n2){
    return n1 + n2
}

module.exports = soma

var soma = require('./soma.js')

console.log(soma(10,10))

