// Ler o número de maçãs (exemplo usando prompt)
let quantidade = parseInt(prompt("Digite o número de maçãs compradas:"));
let preco;
// Verifica o preço unitário
if (quantidade < 12) {
    preco = 1.30;
} else {
    preco = 1.00;
}
// Calcula o custo total
let total = quantidade * preco;
// Exibe o resultado
alert("O custo total da compra é: R$ " + total.toFixed(2));