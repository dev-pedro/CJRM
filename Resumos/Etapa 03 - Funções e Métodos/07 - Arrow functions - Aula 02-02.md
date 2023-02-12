<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Arrow functions - Aula 02-02

### Resumo

As funções de seta (ou arrow functions, como são chamadas em inglês) são uma maneira concisa de escrever funções em JavaScript. Elas são escritas usando a sintaxe `(params) => expression`. Aqui está um exemplo:

```javascript
let add = (a, b) => a + b;

let result = add(2, 3);
console.log(result); // 5
```

Observe que, na sintaxe acima, o lado esquerdo dos dois sinais de seta representa a lista de parâmetros da função, enquanto o lado direito representa a expressão a ser avaliada e retornada quando a função for chamada. Se a expressão for longa ou se precisarmos escrever várias instruções, podemos usar chaves para encapsular o corpo da função:

```javascript
let greet = (name) => {
  console.log("Hello, " + name + "!");
};

greet("John"); // Hello, John!
```

Se uma arrow function tiver apenas um parâmetro, você pode omitir os parênteses que os envolvem. Além disso, se a expressão for curta o suficiente, você pode omitir as chaves e o "return" implícito. Aqui está um exemplo:

```javascript
let square = x => x * x;

let result = square(5);
console.log(result); // 25
```

Observe que, nesse exemplo, a arrow function tem apenas um parâmetro (`x`) e uma única expressão (`x * x`). Portanto, os parênteses e as chaves são omitidos, e o valor da expressão é retornado implicitamente.
