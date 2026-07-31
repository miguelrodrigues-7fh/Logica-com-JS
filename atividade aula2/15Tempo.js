let hora = Number(prompt("Horas: "));
let min = Number(prompt("Minutos: "));
const minutos = Math.round(((hora)*60+min))
const segundos = Math.round(((minutos)*60))
console.log("Tempo: ", minutos, segundos)