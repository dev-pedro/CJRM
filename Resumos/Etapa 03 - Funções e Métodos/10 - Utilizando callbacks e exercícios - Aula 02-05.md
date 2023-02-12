<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Utilizando callbacks e exercícios - Aula 02-05

### Resumo

Callbacks são uma forma poderosa de tornar o código mais legível, reutilizável e modular. Aqui estão alguns exemplos de exercícios que ilustram o uso de callbacks:

###### Exemplo 1

Escreva uma função `filter` que aceita um array e uma função de callback, e retorna um novo array com todos os elementos do array original que passam na verificação do callback.

```javascript
function filter(array, callback) {
  let filtered = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = filter(numbers, number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

###### Explicação do exemplo acima

A função `filter` é uma função genérica que pode ser usada para filtrar elementos de um array de acordo com uma determinada condição. Ela funciona da seguinte maneira:

1. Recebe como argumentos um array e uma função de callback.
2. Cria uma nova array, `filtered`, que será usada para armazenar os elementos que passam na verificação do callback.
3. Usa um loop `for` para iterar sobre todos os elementos do array original.
4. Para cada elemento, o callback é chamado com o elemento atual como argumento.
5. Se o callback retornar `true` para o elemento atual, o elemento é adicionado à array `filtered`.
6. Depois que o loop `for` terminar, a função `filter` retorna a array `filtered` como resultado.

A vantagem de usar a função `filter` é que ela pode ser usada para filtrar elementos de qualquer array, desde que você passe uma função de callback adequada. Isso a torna muito reutilizável, pois você pode usá-la várias vezes com diferentes arrays e callbacks sem precisar escrever uma nova função de filtragem toda vez.

###### Exemplo 2

Escreva uma função `map` que aceita um array e uma função de callback, e retorna um novo array com o resultado da aplicação do callback a cada elemento do array original.

```javascript
function map(array, callback) {
  let mapped = [];
  for (let i = 0; i < array.length; i++) {
    mapped.push(callback(array[i]));
  }
  return mapped;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = map(numbers, number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

###### Explicação do exemplo acima

O segundo exercício é semelhante ao primeiro, mas ao invés de filtrar elementos, ele mapeia os elementos de um array para um novo array. A função `map` funciona da seguinte maneira:

1. Recebe como argumentos um array e uma função de callback.
2. Cria uma nova array, `mapped`, que será usada para armazenar os resultados da aplicação do callback.
3. Usa um loop `for` para iterar sobre todos os elementos do array original.
4. Para cada elemento, o callback é chamado com o elemento atual como argumento.
5. O resultado da chamada do callback é adicionado à array `mapped`.
6. Depois que o loop `for` terminar, a função `map` retorna a array `mapped` como resultado.

A vantagem de usar a função `map` é que ela pode ser usada para mapear elementos de qualquer array, desde que você passe uma função de callback adequada. Isso a torna muito reutilizável, pois você pode usá-la várias vezes com diferentes arrays e callbacks sem precisar escrever uma nova função de mapeamento toda vez.
