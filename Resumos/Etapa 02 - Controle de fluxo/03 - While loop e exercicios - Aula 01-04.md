<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# While loop e exercicios - Aula 01-04

### Resumo

O `while` loop é uma estrutura de controle de fluxo em JavaScript que permite que você execute uma série de instruções enquanto uma determinada condição for verdadeira. A sintaxe básica é a seguinte:

```javascript
while (condição) {
  // código a ser executado
}
```

A condição é uma expressão que é avaliada antes de cada iteração. Se a condição for verdadeira, as instruções dentro do loop serão executadas. Se for falsa, o loop será interrompido.

Aqui está um exemplo de como usar o `while` loop para imprimir os números de 0 a 9:

```javascript
let i = 0;
while (i < 10) {
  console.log(i)
  i++
}
```

Este loop verifica se `i` é menor que 10 antes de cada iteração e adiciona 1 a `i` após cada iteração. O loop será interrompido quando `i` for igual a 10.

##### Loop Infinito

Um loop infinito é um loop que continua a ser executado indefinidamente, sem parar. Em JavaScript, um loop infinito pode ser criado com o `while` loop quando a condição sempre é verdadeira. Aqui está um exemplo:

```javascript
while (true) {
  console.log("Este é um loop infinito")
}
```

Neste exemplo, a condição `true` sempre será verdadeira, então o loop continuará a ser executado indefinidamente. É importante tomar cuidado ao criar loops infinitos, pois eles podem levar a problemas de desempenho e até mesmo ao travamento do seu programa. É sempre uma boa prática garantir que a condição eventualmente se torne falsa para evitar loops infinitos.
