let aftCode = 8;
    function cadproduto() {
        let nome = prompt("Digite o nome do novo produto: ");
        let quant = +prompt("Digite a quantidade em estoque: ");
        let dindin = +prompt("Digite o preço unitário: ");
        produtos.push([aftCode, nome, quant, dindin]); 
        console.log( "Produto: " + nome + " cadastrado com sucesso! (Código: )" + aftCode + ")"); 
        aftCode++;
    }
    function exibirEstoque() {
        console.clear();
        console.log("=== LISTA DE PRODUTOS EM ESTOQUE ===");
        for (row of produtos) {
            console.log("Cód: " + row[0] + " | Nome : " + row[1] + " | quant: " + row[2] + " | Preço: R$ " + row[3].toFixed(2));
        }
    }