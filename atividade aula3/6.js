let op = String(prompt("Digite a operação desejada: "));
let pri = Number(prompt("primeiro número: "));
let seg = Number(prompt("segundo número: "));

let classificacao;

 if ("so" == op || "SO" == op){
    classificacao = "soma"
    console.log("Resultado: ", pri+seg);
}else if ("su" == op || "SU" == op){
    classificacao = "subtração"
    console.log("Resultado: ", pri-seg);
}else if ("mul" == op || "MUL" == op){
    classificacao = "multiplicação"
    console.log("Resultado: ", pri*seg);
}else if ("div" == op || "DIV" == op){
    classificacao = "divisão"
    console.log("Resultado: ", pri/seg);

}

console.log(classificacao)