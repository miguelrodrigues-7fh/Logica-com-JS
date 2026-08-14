let numeros = [];
let quantidadePares = 0;


for (let i = 0; i < 8; i++) {
    
    let input = parseInt(prompt(`Digite o ${i + 1}º número: `));
    
    
    numeros.push(input);

    
    if (input % 2 === 0) {
        quantidadePares++;
    }
}


alert(`Quantidade de números pares: ${quantidadePares}`);