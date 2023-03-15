<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O método map - Aula 01-02

### Resumo

#### Map

O método "map" é uma das funções de array em JavaScript que permite percorrer um array e aplicar uma função a cada elemento. A função "map" retorna um novo array com os resultados da aplicação da função a cada elemento do array original.

A sintaxe básica da função "map" é a seguinte:

```javascript
array.map(function(valorAtual, índice, array) {
  // corpo da função
}, this);
```

O primeiro argumento da função "map" é uma função de callback que será executada para cada elemento do array. A função recebe três argumentos: o valor do elemento atual, o índice do elemento atual e o próprio array.

O segundo argumento é opcional e é usado para definir o valor de "this" dentro da função de callback.

Um exemplo de uso da função "map" é o seguinte:

```javascript
const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map(function(numero) {
  return numero * numero;
});

console.log(quadrados); // [1, 4, 9, 16, 25]
```

Neste exemplo, a função "map" é usada para criar um novo array chamado "quadrados", que contém o quadrado de cada elemento do array "numeros". A função de callback recebe o valor atual do elemento e retorna o seu quadrado.

Em resumo, o método "map" em JavaScript é uma forma conveniente de percorrer um array e aplicar uma função a cada elemento, retornando um novo array com os resultados da aplicação da função.

Um exemplo de como usar o método "map" para manipular os valores de produtos de um objeto:

```javascript
const produtos = [
  { nome: "Camiseta", preco: 29.99 },
  { nome: "Calça", preco: 59.99 },
  { nome: "Meia", preco: 9.99 }
];

const produtosComDesconto = produtos.map( produto {
  return {
    nome: produto.nome,
    preco: produto.preco * 0.8 // aplicando um desconto de 20%
  };
});

console.log(produtosComDesconto);
```

Neste exemplo, temos um array de objetos "produtos", cada um contendo um nome e um preço. O método "map" é usado para criar um novo array "produtosComDesconto", onde cada objeto contém o mesmo nome, mas o preço foi reduzido em 20% (multiplicado por 0.8).

A função de callback do "map" recebe cada objeto "produto" do array original e retorna um novo objeto com o mesmo nome e um novo preço calculado a partir do preço original.

Ao executar o código, o resultado do console será:

```javascript
[
  { nome: 'Camiseta', preco: 23.992 },
  { nome: 'Calça', preco: 47.992 },
  { nome: 'Meia', preco: 7.992 }
]
```

O novo array "produtosComDesconto" contém os mesmos nomes de produtos, mas com os preços reduzidos em 20%, conforme especificado na função de callback do "map".

#### Em qual situação eu devo usar o `map`, o `filter` e o `redulce` ?

Os métodos "map", "filter" e "reduce" são muito úteis para manipular arrays em JavaScript e são adequados para diferentes situações. A seguir, algumas situações em que cada um desses métodos pode ser mais apropriado:

- "map": use o método "map" quando você precisa transformar cada elemento de um array em outro valor, mantendo o mesmo número de elementos. Por exemplo, se você precisa criar um novo array com os valores do array original multiplicados por 2, você pode usar o método "map":

```javascript
const numeros = [1, 2, 3, 4, 5];

const numerosMultiplicados = numeros.map(function(numero) {
  return numero * 2;
});

console.log(numerosMultiplicados); // [2, 4, 6, 8, 10]
```

- "filter": use o método "filter" quando você precisa filtrar elementos de um array com base em uma condição especificada. Por exemplo, se você precisa criar um novo array com os valores pares do array original, você pode usar o método "filter":

```javascript
const numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(pares); // [2, 4]
```

- "reduce": use o método "reduce" quando você precisa reduzir os elementos de um array a um único valor, geralmente para fazer um cálculo ou uma operação. Por exemplo, se você precisa calcular a soma dos valores de um array, você pode usar o método "reduce":

```javascript
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
});

console.log(soma); // 15
```

Em resumo, escolha o método mais adequado de acordo com a tarefa que você precisa executar em relação aos elementos do array.
