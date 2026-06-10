const formulario = document.getElementById("formulario");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const toast = document.getElementById("toast");
const tema = document.getElementById("tema");
const pagina = document.getElementById("pagina");

tema.addEventListener("click", () => {
    pagina.classList.toggle("dark");
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    if(usuario.value.trim() === ""){
        mensagem.innerHTML = "Digite o usuário";
        mensagem.style.color = "#ff8080";
        usuario.focus();
        return;
    }

    if(senha.value.trim() === ""){
        mensagem.innerHTML = "Digite a senha";
        mensagem.style.color = "#ff8080";
        senha.focus();
        return;
    }

    mensagem.style.color = "#fff";
    mensagem.innerHTML = "Validando acesso...";

    setTimeout(() => {
        if(
            usuario.value === "admin" &&
            senha.value === "admin"
        ){
            mensagem.innerHTML = "Login realizado com sucesso!";
            mensagem.style.color = "#7CFC00";
            mostrarToast( "Bem-vindo ao sistema!" );
        }
        else{
            mensagem.innerHTML = "Usuário ou senha inválidos";
            mensagem.style.color = "#ff8080";
        }
    }, 1500);

});

function mostrarToast(texto){
    toast.innerHTML = texto;
    toast.classList.add("mostrar");
    setTimeout(() => {
        toast.classList.remove("mostrar");

    }, 3000);

}

