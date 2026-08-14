let matriz = [];

let line = prompt("Digite a quantidade de linhas desejadas: ")
let colum = prompt("Digite a quantidade de colunas desejadas: ")

    for (let i = 0; i<line; i++){
        let linha = [];
        for (let j = 0; j<colum; j++){
            if( i === j){
                linha.push(1)
            }else{
                linha.push(0)}
        }
    matriz.push(linha)
};
for(row of matriz){
    let dados = "";
    for (info of row){
    dados+= String(info) + " "
    }
console.log(dados);
}