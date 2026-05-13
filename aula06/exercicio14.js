// Solicita a palavra ao usuário
let palavra = prompt("Digite uma palavra:");

// Converte para minúsculo
let palavraTratada = palavra.toLowerCase();

// Inverte a palavra
let palavraInvertida = palavraTratada.split("").reverse().join("");

/*
split("") → transforma a string em array de letras
reverse → inverte a sequencia
join("") → junta novamente em string
*/

// Verifica se é palíndromo
if (palavraTratada === palavraInvertida) {
    console.log("É um palíndromo!");
} else {
    console.log("Não é um palíndromo.");
}