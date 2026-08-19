let nomes = [];
let quantidades = [];
let precos = [];
let valoresTotais = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do produto " + (i + 1) + ": ");
    let qtd = prompt("Digite a quantidade em estoque de " + nome + ": ");
    let preco = prompt("Digite o preço unitário de " + nome + ": ");

    qtd = parseInt(qtd);
    preco = parseFloat(preco);

    let valorTotal = qtd * preco;

    nomes.push(nome);
    quantidades.push(qtd);
    precos.push(preco);
    valoresTotais.push(valorTotal);
}

console.clear();
console.log("=== RELATÓRIO DE ESTOQUE ===");

for (let i = 0; i < 5; i++) {
    let dados = "";
    dados += "Produto: " + nomes[i] + "\n";
    dados += "Quantidade: " + quantidades[i] + "\n";
    dados += "Preço unitário: R$ " + precos[i].toFixed(2) + "\n";
    dados += "Valor em estoque: R$ " + valoresTotais[i].toFixed(2) + "\n";
    
    console.log(dados);
}


let maiorValor = valoresTotais[0];
let produtoMaiorValor = nomes[0];
let produtosPoucaUnidade = "";

for (let i = 0; i < 5; i++) {
    if (valoresTotais[i] > maiorValor) {
        maiorValor = valoresTotais[i];
        produtoMaiorValor = nomes[i];
    }

    if (quantidades[i] < 5) {
        produtosPoucaUnidade += nomes[i] + " (" + quantidades[i] + " unid.) ";
    }
}

console.log("=== INFORMAÇÕES EXTRAS ===");
console.log("Produto com maior valor em estoque: " + produtoMaiorValor + " (R$ " + maiorValor.toFixed(2) + ")");

if (produtosPoucaUnidade === "") {
    console.log("Produtos com menos de 5 unidades: Nenhum");
} else {
    console.log("Produtos com menos de 5 unidades: " + produtosPoucaUnidade);
}