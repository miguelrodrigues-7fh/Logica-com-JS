let ano = Number(prompt("Ano: "));
let anobissexto;


if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
    anobissexto = "É um ano Bixesto";
} else {
    anobissexto = "Não é um ano bissexto";
}


console.log(anobissexto);