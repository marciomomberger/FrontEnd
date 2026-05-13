// Solicita a frase ao usuário
let frase = prompt("Digite uma frase:");

// Remove espaços extras no início e fim
let fraseTratada = frase.trim();

// Coloca a primeira letra de cada palavra em maiúscula
let palavras = fraseTratada.split(" ");



for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];

    if (palavra.length === 0) {
        fraseMaiuscula += "";
    } else {
        let novaPalavra = palavra[0].toUpperCase() + palavra.slice(1).toLowerCase();
        fraseMaiuscula += novaPalavra;
    }

    // Adiciona espaço entre palavras (menos na última)
    if (i < palavras.length - 1) {
        fraseMaiuscula += " ";
    }
}

// Verifica se termina com ponto final
let terminaComPonto = fraseMaiuscula.endsWith(".");

// Exibe os resultados
console.log("Frase formatada:", fraseMaiuscula);
console.log("Termina com ponto final?", terminaComPonto ? "Sim" : "Não");