const modal = document.querySelector(".modal");

const abrir = document.querySelector("#abrir");

const fechar = document.querySelector("#fechar");

const entrar = document.querySelector("#entrar");

const mensagem = document.querySelector("#mensagem");

/* ABRIR MODAL */

abrir.addEventListener("click", () => {

    modal.style.display = "flex";

});

/* FECHAR MODAL */

fechar.addEventListener("click", () => {

    modal.style.display = "none";

});

/* VALIDAR LOGIN */

entrar.addEventListener("click", () => {

    const usuario =
        document.querySelector("#usuario").value;

    const senha =
        document.querySelector("#senha").value;

    if(usuario === "admin" && senha === "admin"){

        mensagem.innerHTML = "Login realizado com sucesso!";

        mensagem.style.color = "green";

    }else{

        mensagem.innerHTML = "Usuário ou senha inválidos!";

        mensagem.style.color = "red";

    }

});