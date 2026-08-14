let matriz = []; 


for (let i = 0; i < 3; i++) { 
    let linha = []; 
    for (let j = 0; j < 3; j++) { 
        linha.push(Number(prompt("Digite seu numero: "))); 
    } 
    matriz.push(linha); 
} 


for (let linha of matriz) { 
    let soma = 0; 
    for (let valor of linha) { 
        soma += valor; 
    } 
    console.log("Valores: ",linha, "Soma da linha: ", soma); 
}