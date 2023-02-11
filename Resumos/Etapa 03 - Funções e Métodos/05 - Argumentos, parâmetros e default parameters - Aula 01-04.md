<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Argumentos, parâmetros e default parameters - Aula 01-04

### Resumo

Em JavaScript, os argumentos são valores passados para uma função quando ela é chamada. Os parâmetros são as variáveis que são definidas na declaração da função e que recebem os valores dos argumentos.

Aqui está um exemplo de uma função que tem dois parâmetros:

```javascript
function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result); // 5
```

Em JavaScript, você também pode especificar valores padrão para os parâmetros. Isso significa que, se um argumento não for passado para a função, o valor padrão será usado. Aqui está um exemplo:

```javascript
function greet(name = "User") {
  console.log("Hello, " + name + "!");
}

greet(); // Hello, User!
greet("John"); // Hello, John!
```

Observe que, se um argumento for passado, ele será usado em vez do valor padrão.
