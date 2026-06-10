const formulario = document.getElementById("formulario")
const usuario = document.getElementById("usuario")
const senha = document.getElementById("senha")
const mensagem = document.getElementById("mensagem")
const toast = document.getElementById("toast")
const tema = document.getElementById("tema")
const pagina = document.getElementById("pagina")

tema.addEventListener("click", () => {
    pagina.classList.toggle("dark")
})

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    if(usuario.value === "" || senha.value === ""){
        mensagem.innerHTML = "Preencha todos os campos"
        mensagem.style.color = "red"
        return
    }

    mensagem.innerHTML = "Carregando..."
 
    setTimeout(() => {
        mensagem.innerHTML = "Login realizado!"
        mensagem.style.color = "green"
        toast.innerHTML = "Bem-vindo!"
        toast.style.opacity = "1"
        setTimeout(() => {
            toast.style.opacity = "0"
        }, 3000)
    }, 2000)

})