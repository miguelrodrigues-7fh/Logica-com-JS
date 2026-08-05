let valorCompra = String(prompt("Digite o valor da compra:"));

let valorFinal;

if (valorCompra<= 100) {
    valorFinal = valorCompra;
} else if (valorCompra<= 500) {
    valorFinal = valorCompra * 0.90; 
} else {
    valorFinal = valorCompra * 0.80; 
}
console.log("O valor final da compra é: R$ " + valorFinal.toFixed(2));