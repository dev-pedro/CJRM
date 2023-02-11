<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Function declaration, function expression e hoisting - Aula 01-03

### Resumo

Em JavaScript, existem duas maneiras principais de se declarar uma função: declaração de função e expressão de função.

A declaração de função (Function declaration) é feita usando a palavra-chave "function" seguida pelo nome da função, uma lista de parâmetros entre parênteses e o corpo da função entre chaves. Aqui está um exemplo de uma declaração de função:

```javascript
function myFunction(a, b) {
  return a + b;
}
```

A expressão de função (function expression), por outro lado, atribui uma função a uma variável. Aqui está um exemplo de uma expressão de função:

```javascript
let myFunction = function(a, b) {
  return a + b;
};
```

O hoisting é um comportamento do JavaScript que permite que você use uma função antes de declará-la. Isso significa que a declaração de uma função é movida para o topo do escopo no qual ela foi definida, mesmo que você a declare depois de usá-la. Aqui está um exemplo:

```javascript
myFunction(); // "This function has been hoisted."

function myFunction() {
  console.log("This function has been hoisted.");
}
```

Observe que as expressões de função não são elevadas. Se você tentar usar uma expressão de função antes de declará-la, obterá um erro:

```javascript
myFunction(); // ReferenceError: myFunction is not defined

let myFunction = function() {
  console.log("This function has been hoisted.");
};
```

O javascript puxe a declaração de função (Function declaration) para o todo do código mesmo que elas sejam declaradas no final do código, é recomendável e preferível declarar as funções  no topo do código para evitar que haja problemas de execução e melhorar o debug do seu código.
