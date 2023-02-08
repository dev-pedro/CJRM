<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# A condicional switch e exercícios - Aula 03-04

### Resumo

##### Switch

A condicional `switch` é uma estrutura de controle de fluxo em JavaScript que permite testar vários valores diferentes para uma variável e executar código diferente para cada valor. É útil quando você tem muitos valores possíveis para uma variável e deseja testar todos eles para tomar uma ação apropriada.

A sintaxe básica de um bloco `switch` é a seguinte:

```javascript
switch (expression) {
  case value1:
    // code to be executed if expression == value1
    break;
  case value2:
    // code to be executed if expression == value2
    break;
  ...
  default:
    // code to be executed if expression is not equal to any value
}
```

A expressão é avaliada e comparada com cada valor de caso. Se uma correspondência for encontrada, o código associado a esse caso será executado. A instrução `break` é usada para sair do bloco `switch` após a execução do código. Se nenhum caso corresponder, o código associado ao `default` será executado, se houver.

Aqui está um exemplo de um bloco `switch` que testa o dia da semana:

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  default:
    console.log("Today is another day.");
}
```

Neste exemplo, a saída será "Today is Monday.".
