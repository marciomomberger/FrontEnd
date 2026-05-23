// ELEMENTOS
const abrirModal = document.getElementById("abrirModal");
const overlay = document.getElementById("overlay");
const fechar = document.getElementById("fechar");
const entrar = document.getElementById("entrar");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
// ABRIR MODAL
abrirModal.addEventListener("click", () => {
    overlay.style.display = "flex";
});
// FECHAR MODAL
fechar.addEventListener("click", () => {
    overlay.style.display = "none";
    limparCampos();
});
// VALIDAR LOGIN
entrar.addEventListener("click", () => {
    const user = usuario.value;
    const pass = senha.value;
    // LOGIN CORRETO
    if(user === "admin" && pass === "123"){
        mensagem.innerHTML = "Login realizado!";
        mensagem.style.color = "lightgreen";
    }
    // LOGIN ERRADO
    else{
        mensagem.innerHTML = "Usuário ou senha inválidos!";
        mensagem.style.color = "red";
    }

});
// LIMPAR CAMPOS
function limparCampos(){
    usuario.value = "";
    senha.value = "";
    mensagem.innerHTML = "";
}
