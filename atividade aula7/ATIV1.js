let produtos = [
    [1, "Placa de Vídeo A", 20, 1990.00],
    [2, "Placa de vídeo B", 40, 2599.90],
    [3, "Monitor oled", 45, 530.00],
    [4, "Teclado Membrana", 90, 55.90],
    [5, "Teclado Mecânico", 80, 199.90],
    [6, "Mouse Wireless", 75, 90.00],
    [7, "Fone Abafador", 55, 89.99],
];
let aftCode = 8;

    function cadproduto() {
        let nome = prompt("Digite o nome do novo produto: ");
        let quant = +prompt("Digite a quantidade em estoque: ");
        let dindin = +prompt("Digite o preço unitário: ");
        produtos.push([aftCode, nome, quant, dindin]); 
        console.log( "Produto: " + nome + " cadastrado com sucesso! (Código: " + aftCode + ")"); 
        aftCode++;
    }
    function exibirEstoque() {
        console.clear();
        console.log("=== LISTA DE PRODUTOS EM ESTOQUE ===");
        for (row of produtos) {
            console.log("Cód: " + row[0] + " | Nome : " + row[1] + " | quant: " + row[2] + " | Preço: R$ " + row[3].toFixed(2));
        }
    }
    function consultEstoque() {
        let receCog = (prompt(String("Insira o código do produto desejado: ")));
        for (row of produtos) {
            console.log(row[0]);
        }
    }