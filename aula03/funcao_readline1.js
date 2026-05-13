const readline = require('readline');

// cria a interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// variável que vai armazenar o valor
let numero;

rl.question("Digite um número: ", (entrada) => {
  numero = parseFloat(entrada); // atribuição à variável
 rl.close();
});
console.log(numero);