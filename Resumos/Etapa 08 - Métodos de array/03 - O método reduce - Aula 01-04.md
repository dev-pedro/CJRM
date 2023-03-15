<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O método reduce - Aula 01-04

### Resumo

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

O método "reduce" em JavaScript recebe como argumento uma função de callback que, por sua vez, pode receber até quatro parâmetros:

1. "acumulador" (obrigatório): é o valor acumulado da iteração anterior ou o valor inicial definido para o "reduce";
2. "valorAtual" (obrigatório): é o valor atual do elemento sendo processado no array;
3. "index" (opcional): é o índice do elemento sendo processado no array;
4. "array" (opcional): é a própria referência do array que está sendo iterado.

A função de callback do "reduce" deve retornar o valor do acumulador, que será passado para a próxima iteração. No entanto, o valor retornado pode ser de qualquer tipo, e o tipo de retorno será o mesmo que o tipo do acumulador.

Aqui está um exemplo básico de como usar o "reduce" com uma função de callback que recebe os quatro parâmetros:

```javascript
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce(function(acumulador, valorAtual, index, array) {
  return acumulador + valorAtual;
}, 0);

console.log(soma); // 15
```

Neste exemplo, a função de callback recebe quatro parâmetros, mas usa apenas os dois primeiros. O parâmetro "acumulador" é inicializado com um valor de 0, e a função retorna a soma do acumulador e do valor atual em cada iteração. No final, a soma dos valores é retornada como o resultado final do "reduce".

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
