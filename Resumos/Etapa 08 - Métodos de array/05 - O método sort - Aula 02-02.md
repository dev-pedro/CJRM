<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O método sort - Aula 02-02

### Resumo

O método `sort()` é uma função integrada do JavaScript que pode ser usada para classificar elementos em uma matriz (array) em ordem alfabética ou numérica, dependendo do tipo de dados na matriz.

A sintaxe básica do método `sort()` é a seguinte:

```javascript
array.sort([compareFunction])
//arrow function
array.sort(() => {})
```

Onde `array` é a matriz que você deseja classificar e `compareFunction` é um argumento opcional que é uma função que define a ordem de classificação. Se `compareFunction` não for fornecido, o método `sort()` classificará os elementos da matriz em ordem alfabética crescente por padrão.

A função `compareFunction` é uma função que compara dois elementos da matriz e retorna um valor negativo se o primeiro elemento for menor que o segundo, um valor positivo se o primeiro elemento for maior que o segundo ou zero se os elementos forem iguais. A função `compareFunction` deve receber dois argumentos, geralmente denominados `num1` e `num2`, que representam os elementos a serem comparados.

Aqui está um exemplo simples de como usar o método `sort()` para classificar uma matriz de números em ordem crescente:

```javascript
const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numeros.sort((num1, num2) {
  return num1 - num2;
});
console.log(numeros); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

Neste exemplo, passamos uma função de comparação para `sort()` que subtrai `num2` de `num1`. Isso faz com que o método `sort()` classifique os números em ordem crescente.

É importante lembrar que o método `sort()` modifica a matriz original, em vez de retornar uma nova matriz classificada. Se você precisar preservar a matriz original, é recomendável criar uma cópia da matriz antes de classificá-la.

#### o sort() modifica o array original?

Sim, o método `sort()` modifica o array original em que é chamado. Ou seja, a matriz original será reordenada e os elementos serão modificados.

Por exemplo, considere o seguinte código:

```javascript
const array = [3, 2, 1];
array.sort();
console.log(array);
```

A saída deste código será `[1, 2, 3]`, que é a matriz `array` classificada em ordem crescente. Observe que a matriz original foi modificada e agora está ordenada.

Se você precisar preservar a matriz original e também obter uma nova matriz classificada, pode fazer uma cópia da matriz antes de chamar o método `sort()`. Por exemplo:

```javascript
const array = [3, 2, 1];
const sortedArray = [...array].sort();
console.log(array);
console.log(sortedArray);
```

A saída deste código será:

```javascript
[3, 2, 1]
[1, 2, 3]
```

Observe que a matriz original `array` não foi modificada, e a nova matriz classificada `sortedArray` foi criada com os elementos ordenados.

#### E se eu passar usar o sort() em um array [10, 70, 20, 5, 80]

Se você usar o método `sort()` em um array `[10, 70, 20, 5, 80]`, o resultado dependerá do tipo de ordenação que você deseja.

Por padrão, o método `sort()` classificará os elementos em ordem alfabética crescente, portanto, para classificar os elementos em ordem numérica crescente, você precisará passar uma função de comparação como argumento para o método `sort()`.

Para ordenar o array `[10, 70, 20, 5, 80]` em ordem numérica crescente, você pode usar a seguinte função de comparação:

```javascript
const array = [10, 70, 20, 5, 80];
array.sort(function(num1, num2) {
  return num1 - num2;
});
console.log(array); // Output: [5, 10, 20, 70, 80]
```

Nesta função de comparação, subtraímos `num2` de `num1`, o que fará com que o método `sort()` classifique os números em ordem crescente.

Para classificar os elementos em ordem numérica decrescente, você pode alterar a função de comparação para:

```javascript
const array = [10, 70, 20, 5, 80];
array.sort((num1, num2) {
  return num2 - num1;
});
console.log(array); // Output: [80, 70, 20, 10, 5]
```

Nesta função de comparação, subtraímos `num1` de `num2`, o que fará com que o método `sort()` classifique os números em ordem decrescente.    

#### Ordenar array de strings em ordem crescente e decrescente

Para ordenar um array de nomes de pessoas com o método `sort()` em ordem crescente ou decrescente, você pode usar a função de comparação para strings. A função de comparação compara duas strings e retorna um valor negativo, zero ou positivo, dependendo da ordem de classificação desejada.

Aqui está um exemplo de como classificar um array de nomes de pessoas em ordem crescente:

```javascript
const nomes = ['Ana', 'Carlos', 'Beatriz', 'Davi', 'Eduardo'];
nomes.sort((nome1, nome2) {
  return nome1.localeCompare(nome2);
});
console.log(nomes); // Saída: ['Ana', 'Beatriz', 'Carlos', 'Davi', 'Eduardo']
```

Neste exemplo, passamos uma função de comparação para `sort()` que usa o método `localeCompare()` para comparar duas strings. O método `localeCompare()` compara duas strings e retorna um valor negativo, zero ou positivo, dependendo da ordem de classificação desejada.

Para classificar o array de nomes em ordem decrescente, você pode alterar a função de comparação para:

```javascript
const nomes = ['Ana', 'Carlos', 'Beatriz', 'Davi', 'Eduardo'];
nomes.sort((nome1, nome2) {
  return nome2.localeCompare(nome1);
});
console.log(nomes); // Saída: ['Eduardo', 'Davi', 'Carlos', 'Beatriz', 'Ana']
```

Nesta função de comparação, usamos o método `localeCompare()` novamente, mas com os argumentos `nome2` e `nome1` invertidos. Isso fará com que o método `sort()` classifique os nomes em ordem decrescente.

#### Códigos usados na aula

```javascript
//exemplo 1
const familyNames = ['Pedro', 'Antônio', 'Alice', 'Sara']

familyNames.sort()//ordena em ordem alfabética crescente
console.log(familyNames)

familyNames.sort((nome1, nome2) => {
    return nome1.localeCompare(nome2)//oredena em oredem alfabética crescente
})
console.log(familyNames)

familyNames.sort((nome1, nome2) => {
  return nome2.localeCompare(nome1)//oredena em oredem alfabética decrescente
})
console.log(familyNames)

//exemplo 2
const scores = [10, 50, 20, 5, 35, 70, 45]
scores.sort((score1, score2) => score1 - score2) //ordena por ordem crescente
// scores.sort((score1, score2) => score1 - score2)//ordena por ordem decrescente
console.log(scores)

//exemplo 3
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]
theBigFamily.sort((item1, item2) => item2.score - item1.score)
console.log(theBigFamily)
```
