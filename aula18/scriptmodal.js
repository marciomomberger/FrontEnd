const modal = document.querySelector(".modal");
document.querySelector("#abrir").addEventListener("click", () => {
    modal.style.display = "flex";
});
document.querySelector("#fechar").addEventListener("click", () => {
    modal.style.display = "none";
});