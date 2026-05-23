const abrirModal = document.getElementById("abrirModal");
const fecharModal = document.getElementById("fecharModal");
const overlay = document.getElementById("overlay");

/* ABRIR MODAL */
abrirModal.addEventListener("click", () => {
    overlay.style.display = "flex";
});

/* FECHAR MODAL */
fecharModal.addEventListener("click", () => {
    overlay.style.display = "none";
});