<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O método forEach e callbacks - Aula 02-04

### Resumo

O método `forEach` é um método disponível em objetos do tipo Array em JavaScript, que permite iterar sobre cada elemento do array e executar uma determinada ação. Aqui está um exemplo:

```javascript
let numbers = [1, 2, 3, 4, 5]

const callBack = number => console.log(number)

numbers.forEach(callBack)

// Output:
// 1
// 2
// 3
// 4
// 5
```

A ação a ser executada é especificada como um callback, que é uma função passada como argumento para o método `forEach`. O callback é chamado para cada elemento do array, e o valor atual é passado como argumento.

O método `forEach` é útil quando precisamos realizar uma ação para cada elemento de um array, sem precisar escrever um loop explícito. Além disso, o `forEach` é mais fácil de ler e entender do que loops tradicionais, pois o propósito da ação é claro e separado da lógica de iteração.

```javascript
let names = ["Pedro", "Rose", "Roger"]

const logNamesInfo = name => console.log(`Hello, ${name}!`)

names.forEach(logNamesInfo)

// Output:
// Hello, Pedro!
// Hello, Rose!
// Hello, Roger!
```

Neste exemplo, o método `forEach` é usado para iterar sobre cada nome no array `names`. Para cada nome, o callback é chamado, e o valor atual (o nome) é passado como argumento. O callback usa o valor atual para imprimir uma saudação na tela.
