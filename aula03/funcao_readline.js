
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Como você está? ', (resposta) => {
  console.log(`Que bom que você está: ${resposta}`);
  readline.close();
});

console.log(resposta)


