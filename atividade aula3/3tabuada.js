let n = Number(prompt("Seu número: "));
if (n % 2 == 0) {
    status = "par" }
else { status = "ímpar"}
if (n >=1 ){
    classificacao = "positivo"
}else if (n ==0){
    classificacao = "zero"
}else if (n <=0){
    classificacao = "negativo"
}else {
    classificacao = 'numero invalido digite outro'
}

console.log(status, classificacao)