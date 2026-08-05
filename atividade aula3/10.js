let l1 = Number(prompt("Digite o primeiro lado: "));
let l2 = Number(prompt("Digite o segundo lado: "));
let l3 = Number(prompt("Digite o terceiro lado: "));
let classe = "";

if (l1+l2>l3 && l1+l3>l2 && l2+l3>l1) {
    
    if (l1==l2 && l2==l3) {
        classe = "Equilátero";
    } else if (l1==l2 || l2==l3 || l1==l3) {
        classe = "Isósceles";
    } else {
        classe = "Escaleno";
    };
    
    console.log(classe);

} else {
    console.log("Não forma triângulo");
}