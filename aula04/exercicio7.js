let resposta;
// Loop para garantir que só aceite "f" ou "m"
do {
    resposta = prompt("Digite 'F' para feminino ou 'M' para masculino:").toLowerCase();
    if (resposta !== "f" && resposta !== "m") {
        alert("Resposta errada! Digite 'F' ou 'M'");
    }
} while (resposta !== "f" && resposta !== "m");
// Exibe o resultado válido
alert("Resposta aceita: " + resposta.toUpperCase());