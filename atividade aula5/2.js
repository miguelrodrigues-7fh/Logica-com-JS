const numeros = [2, 3, 4, 7, 6, 9];
let maiorNumero = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]; 
    }
}
console.log("O maior número é:", maiorNumero);