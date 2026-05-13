// Solicita a frase ao usuário
let frase = prompt("Digite uma frase:");

// Remove espaços extras no início e fim
let fraseTratada = frase.trim();

// Separa as palavras (considerando um ou mais espaços)
let palavras = fraseTratada.split("");
//let palavras = fraseTratada.split(/\s+/);

// Conta as palavras
let quantidade = palavras.length;

// Exibe os resultados
console.log("Lista de palavras:", palavras);
console.log("Quantidade de palavras:", quantidade);