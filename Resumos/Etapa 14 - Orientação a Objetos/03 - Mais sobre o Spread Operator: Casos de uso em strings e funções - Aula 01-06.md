<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Mais sobre o Spread Operator: Casos de uso em strings e funções - Aula 01-06

### Resumo

Além de ser utilizado para unir arrays e objetos, o operador de spread também tem casos de uso interessantes em relação a strings e funções.

1. Casos de uso em strings:
   O operador de spread pode ser usado para manipular strings de diversas maneiras, como dividir uma string em um array de caracteres individuais, combinar várias strings em uma única string ou copiar uma string.
   
   Dividir uma string em um array de caracteres:
   
   ```javascript
   const str = "Hello";
   const chars = [...str];
   console.log(chars); // Output: ["H", "e", "l", "l", "o"]
   ```

Combinar várias strings em uma única string:

```javascript
const str1 = "Hello";
const str2 = "World";
const combinedStr = [...str1, ...str2].join("");
console.log(combinedStr); // Output: "HelloWorld"
```

Copiar uma string:

```javascript
const originalStr = "Hello";
const copiedStr = [...originalStr].join("");
console.log(copiedStr); // Output: "Hello"
```

2. Casos de uso em funções:
   O operador de spread pode ser útil para trabalhar com funções em várias situações, como passar argumentos dinamicamente ou copiar funções.

Passar argumentos dinamicamente para uma função:

```javascript
function soma(a, b, c) {
  return a + b + c;
}

const args = [1, 2, 3];
const resultado = soma(...args);
console.log(resultado); // Output: 6
```

Copiar uma função:

```javascript
function originalFunction() {
  // Lógica da função original
}

const copiedFunction = (...args) => originalFunction(...args);
```

1. Nesse exemplo, uma função `originalFunction` é copiada usando uma função de seta e o operador de spread. A `copiedFunction` agora pode ser usada como uma cópia da função original.

Esses são apenas alguns exemplos de como o operador de spread pode ser aplicado em strings e funções. Ele oferece flexibilidade e conveniência na manipulação de dados e parâmetros. Vale a pena explorar mais casos de uso e experimentar o operador de spread em diferentes contextos para aproveitar ao máximo sua funcionalidade.
