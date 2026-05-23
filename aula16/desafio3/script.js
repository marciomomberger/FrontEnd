function adicionarProduto() {
    // pega os valores dos campos
    let nome = document.getElementById("nome").value;
    let preco = document.getElementById("preco").value;
    // validação
    if(nome == "" || preco == "") {
        alert("Preencha todos os campos");
        return;
    }
    // seleciona tabela
    let tabela = document.getElementById("tabelaProdutos");
    // cria linha
    let linha = document.createElement("tr");
    // cria coluna nome
    let colunaNome = document.createElement("td");
    colunaNome.innerHTML = nome;
    // cria coluna preço
    let colunaPreco = document.createElement("td");
    colunaPreco.innerHTML = "R$ " + parseFloat(preco).toFixed(2);
    // adiciona colunas na linha
    linha.appendChild(colunaNome);
    linha.appendChild(colunaPreco);
    // adiciona linha na tabela
    tabela.appendChild(linha);
    // limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
}