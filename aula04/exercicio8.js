let opcao;
do {
    // Ler as notas
    let nota1 = parseFloat(prompt("Digite a 1ª nota:"));
    let nota2 = parseFloat(prompt("Digite a 2ª nota:"));
    // Calcular a média
    let media = (nota1 + nota2) / 2;
    // Exibir o resultado
    alert("Média do aluno: " + media.toFixed(2));
    // Perguntar se deseja novo cálculo
    opcao = prompt("NOVO CÁLCULO (S/N)?").toUpperCase();
} while (opcao === "S");
alert("Programa encerrado.");