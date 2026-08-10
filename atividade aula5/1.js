let numeros = [];
for (let i = 0; i < 5; i++) {
    let entrada = prompt(`Digite o ${i + 1}° número: `);
    numeros.push(Number(entrada));
}
let somaTotal = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
console.log("Soma total:", somaTotal);
