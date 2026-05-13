// Solicita a frase ao usuário
let frase = prompt("Digite uma frase:");

// Remove espaços no início e no fim
let fraseTratada = frase.trim();

// Conta o número de caracteres
let totalCaracteres = fraseTratada.length;

// Conta quantas vezes a letra "a" aparece (maiúscula e minúscula)
let contadorA = 0;

for (let i = 0; i < fraseTratada.length; i++) {
    if (fraseTratada[i].toLowerCase() === "a") {
        contadorA++;
    }
}

// Exibe os resultados
alert("Frase digitada:", fraseTratada);
alert("Total de caracteres:", totalCaracteres);
alert("Quantidade de letras 'a':", contadorA);