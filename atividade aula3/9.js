const usuarioCorreto = "ADMIY";
const senhaCorreta = "4325";
const usuarioDigitado = prompt("Digite o seu usuário:");
const senhaDigitada = prompt("Digite a sua senha:");
if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}