let alunos = [];

for (let i = 0; i < 4; i++) {
    let nome = prompt("[Aluno " + (i + 1) + "/4] Digite o nome: ");
    
    let notas = [];
    let soma = 0;
    
    for (let j = 0; j < 3; j++) {
        let nota = +prompt("Digite a nota " + (j + 1) + " para o aluno " + nome + ": ");
        notas.push(nota);
        soma += nota;
    }
    
    let media = soma / 3;
    
    alunos.push({
        nome: nome,
        notas: notas,
        media: media
    });
}

let resultadoFinal = "--- Dados dos Alunos Cadastrados ---\n\n";

for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    
    resultadoFinal += (i + 1) + ". Nome: " + aluno.nome + "\n";
    resultadoFinal += "   Notas: [ " + aluno.notas.join(" | ") + " ]\n";
    resultadoFinal += "   Média: " + aluno.media.toFixed(2) + "\n\n";
}

console.log(resultadoFinal);