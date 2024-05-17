function comparacao(valor1, valor2) {
    if (valor1 && valor2) {
        return "Ambos são verdadeiros"
    } else if (!valor1 && !valor2) {
        return "Ambos são falsos"
    } else {
        return "Um dos valores é verdadeiro e o outro é falso"
    }
}
    
    const valor1 = true;
    const valor2 = false;

    console.log(comparacao(valor1, valor2));
