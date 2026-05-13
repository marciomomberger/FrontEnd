let contador = 0; // 1. Inicialização
let mensagem="";
// 2. Condição: Enquanto contador for menor que 5
while (contador < 5) {
  mensagem = mensagem +"Contador é: " + contador + "\n";
  contador++; // 3. Incremento (essencial para evitar loop infinito)
}
alert(mensagem)

