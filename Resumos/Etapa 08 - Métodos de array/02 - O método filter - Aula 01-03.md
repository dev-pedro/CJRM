<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O método filter - Aula 01-03

### Resumo

#### Filter

O método "filter" é uma função de array em JavaScript que permite filtrar elementos de um array com base em uma condição especificada. A função "filter" retorna um novo array com todos os elementos que atendem à condição especificada.

A sintaxe básica da função "filter" é a seguinte:

```javascript
array.filter(function(valorAtual, índice, array) {
  // corpo da função
}, this);
```

O primeiro argumento da função "filter" é uma função de callback que será executada para cada elemento do array. A função recebe três argumentos: o valor do elemento atual, o índice do elemento atual e o próprio array.

O segundo argumento é opcional e é usado para definir o valor de "this" dentro da função de callback.

Um exemplo de uso da função "filter" é o seguinte:

```javascript
const numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(pares); // [2, 4]
```

Neste exemplo, a função "filter" é usada para criar um novo array chamado "pares", que contém apenas os elementos pares do array "numeros". A função de callback recebe o valor atual do elemento e retorna true se o elemento é par e false caso contrário.

Em resumo, o método "filter" em JavaScript é uma forma conveniente de filtrar elementos de um array com base em uma condição especificada, retornando um novo array com os elementos que atendem à condição.

#### Redulce

O método "reduce" é uma função de array em JavaScript que permite reduzir os elementos de um array a um único valor. A função "reduce" executa uma função de callback para cada elemento do array, recebendo como argumentos o valor acumulado até o momento e o valor atual do elemento. O resultado da função é o valor acumulado, que é passado para a próxima chamada da função de callback.

A sintaxe básica da função "reduce" é a seguinte:

```javascript
array.reduce(function(acumulador, valorAtual, índice, array) {
  // corpo da função
}, valorInicial);
```

O primeiro argumento da função "reduce" é a função de callback que será executada para cada elemento do array. A função recebe quatro argumentos: o valor acumulado até o momento, o valor atual do elemento, o índice do elemento atual e o próprio array.

O segundo argumento é opcional e é usado para definir o valor inicial do acumulador. Se este argumento não for especificado, o valor inicial será o primeiro elemento do array.

Um exemplo de uso da função "reduce" é o seguinte:

```javascript
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
});

console.log(soma); // 15
```

Neste exemplo, a função "reduce" é usada para calcular a soma dos elementos do array "numeros". A função de callback recebe o valor acumulado até o momento e o valor atual do elemento, e retorna a soma destes valores. Como nenhum valor inicial foi especificado, o valor inicial do acumulador é o primeiro elemento do array.

Em resumo, o método "reduce" em JavaScript é uma forma conveniente de reduzir os elementos de um array a um único valor, executando uma função de callback para cada elemento do array e acumulando os resultados.

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

* "filter": use o método "filter" quando você precisa filtrar elementos de um array com base em uma condição especificada. Por exemplo, se você precisa criar um novo array com os valores pares do array original, você pode usar o método "filter":

```javascript
const numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(pares); // [2, 4]
```

* "reduce": use o método "reduce" quando você precisa reduzir os elementos de um array a um único valor, geralmente para fazer um cálculo ou uma operação. Por exemplo, se você precisa calcular a soma dos valores de um array, você pode usar o método "reduce":

```javascript
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
});

console.log(soma); // 15
```

Em resumo, escolha o método mais adequado de acordo com a tarefa que você precisa executar em relação aos elementos do array.
