let tabuleiro = [];
for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(" ");
    }
    tabuleiro.push(linha);
}

let jogadorAtual = "X";
let jogoAtivo = true;
let jogadas = 0;

while (jogoAtivo) {
    
    console.clear(); 
    for (let i = 0; i < 3; i++) {
        let linhaFormatada = "";
        for (let j = 0; j < 3; j++) {
            linhaFormatada += tabuleiro[i][j];
            if (j < 2) linhaFormatada += " | ";
        }
        console.log(linhaFormatada);
        if (i < 2) console.log("---+---+---");
    }

    let lin = prompt("Jogador " + jogadorAtual + ", escolha a LINHA (0, 1 ou 2):");
    let col = prompt("Jogador " + jogadorAtual + ", escolha a COLUNA (0, 1 ou 2):");

    lin = parseInt(lin);
    col = parseInt(col);

   if (lin >= 0 && lin <= 2 && col >= 0 && col <= 2) {
        
       if (tabuleiro[lin][col] === " ") {
            tabuleiro[lin][col] = jogadorAtual;
            jogadas++;

             let venceu = false;
            
            for (let i = 0; i < 3; i++) {
               if (tabuleiro[i][0] === jogadorAtual && tabuleiro[i][1] === jogadorAtual && tabuleiro[i][2] === jogadorAtual) venceu = true;
                if (tabuleiro[0][i] === jogadorAtual && tabuleiro[1][i] === jogadorAtual && tabuleiro[2][i] === jogadorAtual) venceu = true;
            }
            if (tabuleiro[0][0] === jogadorAtual && tabuleiro[1][1] === jogadorAtual && tabuleiro[2][2] === jogadorAtual) venceu = true;
            if (tabuleiro[0][2] === jogadorAtual && tabuleiro[1][1] === jogadorAtual && tabuleiro[2][0] === jogadorAtual) venceu = true;

            if (venceu) {
                 for (row of tabuleiro) {
                    let dados = "";
                    for (info of row) { dados += info + " "; }
                    console.log(dados);
                }
                console.log("Jogador " + jogadorAtual + " venceu!");
                jogoAtivo = false;
            } 
            else if (jogadas === 9) {
                for (row of tabuleiro) {
                    let dados = "";
                    for (info of row) { dados += info + " "; }
                    console.log(dados);
                }
                console.log("Empate!");
                jogoAtivo = false;
            } 
           else {
                if (jogadorAtual === "X") {
                    jogadorAtual = "O";
                } else {
                    jogadorAtual = "X";
                }
            }

        } else {
            console.log("Essa posição já está ocupada! Tente novamente.");
        }
    } else {
        console.log("Posição inválida! Digite números de 0 a 2.");
    }
}