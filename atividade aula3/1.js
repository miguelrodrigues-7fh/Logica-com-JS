let unidadeT = String(prompt("Digite a Unidade desejada: "));
let temperaturaV = Number(prompt("Digite a temperatura: "));
if ("f" == unidadeT || "F" == unidadeT){
    console.log("Conversão para °C: ", (temperaturaV - 32) * 5/9);
    console.log("conversão para °K: ", ( temperaturaV - 32) * 5/9 + 273.15) ;
} else if  ("c" == unidadeT || "C" == unidadeT){
    console.log("Conversão para °F: ", ( temperaturaV* 9/5) + 32);
    console.log("conversão para °K: ", (temperaturaV + 273.15 ))
} else if ("k" == unidadeT || "K" == unidadeT){
    console.log("Conversão para °F: ", ( temperaturaV* 9/5) + 32);
    console.log("Conversão para °C: ", );
} else {
    console.log("Unidade não disponível ou errada");
}