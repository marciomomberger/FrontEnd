// Solicita a frase ao usuário
let frase = prompt("Digite uma frase:");

// Converte a frase em array de caracteres
let caracteres = frase.split("");

// Percorre o array substituindo vogais
for (let i = 0; i < caracteres.length; i++) {
    let letra = caracteres[i].toLowerCase();

    if ("aeiouáéíóúãõâêîôû".includes(letra)) {
        caracteres[i] = "*";
    }
}

// Junta novamente em uma string
let novaFrase = caracteres.join("");

/*
split("") → transforma a string em array de letras
for → percorre cada caractere
includes() → verifica se é vogal
join("") → junta novamente em string
*/

// Exibe o resultado
console.log("Frase original:", frase);
console.log("Nova frase:", novaFrase);