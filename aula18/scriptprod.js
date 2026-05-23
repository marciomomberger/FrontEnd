// ======================================
// ELEMENTOS LOGIN
// ======================================

const abrirModal =
document.getElementById("abrirModal");

const overlay =
document.getElementById("overlay");

const fechar =
document.getElementById("fechar");

const entrar =
document.getElementById("entrar");

const usuario =
document.getElementById("usuario");

const senha =
document.getElementById("senha");

const mensagem =
document.getElementById("mensagem");

const sistema =
document.getElementById("sistema");

// ======================================
// ELEMENTOS PRODUTOS
// ======================================

const nomeProduto =
document.getElementById("nomeProduto");

const precoProduto =
document.getElementById("precoProduto");

const salvarProduto =
document.getElementById("salvarProduto");

const tabelaProdutos =
document.getElementById("tabelaProdutos");

// ======================================
// PESQUISA E TEMA
// ======================================

const pesquisa =
document.getElementById("pesquisa");

const trocarTema =
document.getElementById("trocarTema");

// ======================================
// VARIÁVEIS
// ======================================

let produtos = [];

let temaEscuro = true;

// ======================================
// ABRIR MODAL
// ======================================

abrirModal.addEventListener("click", () => {

    overlay.style.display = "flex";

});

// ======================================
// FECHAR MODAL
// ======================================

fechar.addEventListener("click", () => {

    overlay.style.display = "none";

});

// ======================================
// LOGIN
// ======================================

entrar.addEventListener("click", () => {

    const user = usuario.value;

    const pass = senha.value;

    // LOGIN CORRETO

    if(user === "admin" && pass === "123"){

        overlay.style.display = "none";

        abrirModal.style.display = "none";

        sistema.style.display = "block";

    }

    // LOGIN INVÁLIDO

    else{

        mensagem.innerHTML =
        "Usuário ou senha inválidos!";

        mensagem.style.color = "red";
    }

});

// ======================================
// SALVAR PRODUTO
// ======================================

salvarProduto.addEventListener("click", () => {

    // VALIDAÇÃO

    if(
        nomeProduto.value === "" ||
        precoProduto.value === ""
    ){

        alert("Preencha todos os campos!");

        return;
    }

    // OBJETO PRODUTO

    const produto = {

        nome: nomeProduto.value,

        preco: precoProduto.value
    };

    // ADICIONA NA LISTA

    produtos.push(produto);

    // ATUALIZA TABELA

    atualizarTabela();

    // LIMPA CAMPOS

    nomeProduto.value = "";

    precoProduto.value = "";
});

// ======================================
// ATUALIZAR TABELA
// ======================================

function atualizarTabela(){

    tabelaProdutos.innerHTML = "";

    produtos.forEach((produto, indice) => {

        tabelaProdutos.innerHTML += `

            <tr>

                <td>${produto.nome}</td>

                <td>R$ ${produto.preco}</td>

                <td>

                    <button
                        class="excluir"
                        onclick="excluirProduto(${indice})"
                    >
                        Excluir
                    </button>

                </td>

            </tr>

        `;
    });
}

// ======================================
// EXCLUIR PRODUTO
// ======================================

function excluirProduto(indice){

    produtos.splice(indice, 1);

    atualizarTabela();
}

// ======================================
// PESQUISA
// ======================================

pesquisa.addEventListener("input", () => {

    const valor =
    pesquisa.value.toLowerCase();

    const linhas =
    tabelaProdutos.querySelectorAll("tr");

    linhas.forEach((linha) => {

        const nome =
        linha.children[0]
        .textContent
        .toLowerCase();

        if(nome.includes(valor)){

            linha.style.display = "";

        }

        else{

            linha.style.display = "none";
        }
    });
});

// ======================================
// TROCAR TEMA
// ======================================

trocarTema.addEventListener("click", () => {

    document.body.classList.toggle("light");

    temaEscuro = !temaEscuro;
});