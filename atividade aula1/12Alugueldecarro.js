let num1 = Number(prompt("Dias usados: "));
let num2 = Number(prompt("Quilômetros rodados:"));
console.log("Por dias de uso:", num1*60);
console.log("Por quilômetros rodados:", num2*0.15);
console.log("Valor a pagar: ", (num1*60)+(num2*0.15));