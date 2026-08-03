let peso = Number(prompt("Peso: "));
let altura = Number(prompt("Altura: "));
console.log("IMC: ",imc = peso/(altura*altura));
if (imc >= 18.5 && imc <= 24.9){
    classificacao = "abaixo do peso"
}else if (imc >= 25 && imc <= 29.9){
    classificacao = "peso normal"
}else if (imc >= 30 && imc <= 34.9){
    classificacao = "obesidade grau I"
}else if (imc >= 35 && imc <= 39.9){
    classificacao = "obesidade grau II"
} else if (imc>= 40){
    classificacao = "obesidade grau III"
}
console.log(classificacao)