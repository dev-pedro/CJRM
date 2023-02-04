<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Numbers - Aula 02-05

### Resumo

Em JavaScript, números são representados como valores numéricos, sem formato específico (não há diferenciação entre inteiros e decimais). Eles podem ser escritos diretamente (como 42 ou 3.14) ou através de expressões matemáticas (como 2 * 21).

Para usar números decimais usa-se o '.' ao invés da ','.

##### Operador Módulo %

O operador módulo (%) em JavaScript retorna o resto da divisão de um número por outro. Ele é usado para determinar se um número é par ou ímpar, para rotacionar uma lista circularmente, entre outros usos.

```javascript
const x = 42;
const y = 11;
const result = x % y;
console.log(result); // 8
```

Quando você divide um número por 2 e usa o operador módulo, você pode verificar se o número é par ou ímpar. Se o resultado da divisão por 2 for 0, o número é par. Caso contrário, é ímpar.

Por exemplo:

```javascript
const x = 42;
if (x % 2 === 0) {
  console.log(x + " é par");
} else {
  console.log(x + " é impar");
}
```

##### Precedencia em operações aritméticas

Em JavaScript, as precedências de operações determinam a ordem em que as expressões são avaliadas. Operações com precedência mais alta são avaliadas primeiro, seguidas por operações com precedência mais baixa.

A tabela abaixo mostra a ordem de precedência de operações em JavaScript, do mais alto para o mais baixo:

1. **Expressões entre parênteses ( )**
2. Incremento e decremento (++, --)
3. Negação unária (+, -)
4. **Exponenciação (**)**
5. **Multiplicação, divisão e módulo (*, /, %)**
6. **Adição e subtração (+, -)**
7. Desigualdade (!==, ===)
8. Igualdade e desigualdade (!=, ==)
9. Maior que, menor que, maior ou igual a, menor ou igual a (> , <, >=, <=)
10. Operadores lógicos AND (&&)
11. Operadores lógicos OR (||)
12. Atribuição (=, +=, -=, *=, /=, %=, **=)

Você pode usar parênteses para forçar uma expressão a ser avaliada antes de outras expressões, independentemente da precedência de operações. Por exemplo:

```javascript
const x = 2 + 3 * 4;
console.log(x); // 14

const y = (2 + 3) * 4;
console.log(y); // 20
```

Neste exemplo, na primeira expressão, a multiplicação é avaliada primeiro, pois tem precedência sobre a adição. Já na segunda expressão, a expressão entre parênteses é avaliada primeiro, forçando a adição a ser realizada antes da multiplicação.

##### Shorthand

Shorthand em JavaScript é uma notação curta para escrever código de forma mais concisa e rápida. Aqui estão alguns exemplos comuns de shorthand:

1. Atribuição com operações: você pode usar operadores de atribuição combinados com outras operações para atribuir um novo valor a uma variável. Por exemplo:

```javascript
let x = 10;
x -= 5; // x é igual 5
x += 5; // x agora é 15
x *= 2; // x agora é 30
x /2; // x agora é 5
```

##### NaN

NaN é a sigla para Not-A-Number em JavaScript. É um valor especial que indica que o resultado de uma operação matemática não é um número válido. Por exemplo:

```javascript
const x = 0 / 0;
console.log(x); // NaN

const y = "text" * 2;
console.log(y); // NaN
```

##### Concatenação de String

Em JavaScript, a concatenação de números com strings pode ser feita com o operador de adição (+). Quando um número é adicionado a uma string, o número é automaticamente convertido para uma string e as duas strings são concatenadas. Por exemplo:

```javascript
let num = 42;
let str = " é a resposta para a vida, o universo e tudo mais.";
console.log(num + str); // 42 é a resposta para a vida, o universo e tudo mais.
```
