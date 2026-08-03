let nota = Number(prompt("Insira sua nota: "));
let classificacao;
if (nota >= 7 ){
    classificacao = "Aprovado"
}else if (nota >= 6.9 && nota <= 5 ){
    classificacao = "Recuperação"
}else if (nota <= 4.9 ){
    classificacao = "Reprovado"
}
console.log(classificacao)