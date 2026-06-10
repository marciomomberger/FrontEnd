// script.js

// ELEMENTOS
const overlay = document.getElementById("overlay")
const modalLogin = document.getElementById("modalLogin")
const modalCadastro = document.getElementById("modalCadastro")
const modalLista = document.getElementById("modalLista")
const btnLogin = document.getElementById("btnAbrirLogin")
const btnCadastro = document.getElementById("btnAbrirCadastro")
const btnLista = document.getElementById("btnAbrirLista")
const btnTema = document.getElementById("btnTema")

// PRODUTOS

let produtos = []

// FUNÇÕES

function fecharModais(){
  modalLogin.classList.remove("ativo")
  modalCadastro.classList.remove("ativo")
  modalLista.classList.remove("ativo")
  overlay.classList.remove("ativo")
}

function abrirModal(modal){
  fecharModais()
  modal.classList.add("ativo")
  overlay.classList.add("ativo")
}

// EVENTOS

btnLogin.addEventListener("click", () => {
  abrirModal(modalLogin)
})

btnCadastro.addEventListener("click", () => {
  abrirModal(modalCadastro)
})

btnLista.addEventListener("click", () => {
  mostrarProdutos()
  abrirModal(modalLista)
})

// FECHAR

document.querySelectorAll(".fechar")
.forEach(botao => {
  botao.addEventListener("click", fecharModais)

})
overlay.addEventListener("click", fecharModais)

// LOGIN

const formLogin = document.getElementById("formLogin")
const msgLogin = document.getElementById("msgLogin")
formLogin.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = document.getElementById("emailLogin").value
  const senha = document.getElementById("senhaLogin").value

  // LOGIN SIMPLES

  if(email === "admin@email.com" && senha === "1234"){
    msgLogin.innerHTML = "✅ Login realizado!"
    msgLogin.style.color = "green"

  }else{
    msgLogin.innerHTML = "❌ Email ou senha inválidos"
    msgLogin.style.color = "red"
  }

})

// CADASTRO PRODUTO
const formProduto = document.getElementById("formProduto")
formProduto.addEventListener("submit", (e) => {
  e.preventDefault()
  const nome = document.getElementById("nomeProduto").value
  const preco = document.getElementById("precoProduto").value
  produtos.push({
    nome,
    preco
  })
  alert("Produto cadastrado!")
  formProduto.reset()
})

// MOSTRAR PRODUTOS

function mostrarProdutos(){
  const lista = document.getElementById("listaProdutos")
  lista.innerHTML = ""
  if(produtos.length === 0){
    lista.innerHTML = `
      <p>Nenhum produto cadastrado.</p>
   `
    return
  }

  produtos.forEach((produto, index) => {
    lista.innerHTML += `
      <div class="item">
        <h3>${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco}</p>
        <button onclick="removerProduto(${index})"class="btn-salvar"> Excluir </button>
      </div>
    `
  })
}

// REMOVER
function removerProduto(index){
  produtos.splice(index, 1)
  mostrarProdutos()
}

// TEMA
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark")
  if(document.body.classList.contains("dark")){
    btnTema.innerHTML = "☀️"
  }else{
    btnTema.innerHTML = "🌙"
  }

})