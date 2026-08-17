let matriz = [];
for (let i = 0; i < 2; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(Number(prompt("Digite seu numero: ")));
    }
    matriz.push(linha);
}
let cont = 0;
for (let linha of matriz) {
    for (let numero of linha) {
        if (numero > 0) {       
            cont++ 
            
        }
    }
}
console.log("Quantos são positivos: " + cont);