<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Variáveis e escopo de bloco - Aula 02-02

### Resumo

Em JavaScript, uma variável é um nome simbólico para um valor que pode ser armazenado em memória e acessado em um programa. O escopo se refere ao contexto em que uma variável pode ser acessada em um programa. JavaScript tem dois tipos de escopo: escopo global e escopo de função.

As variáveis declaradas fora de qualquer função, ou seja, no corpo do código, são chamadas de variáveis globais. Elas podem ser acessadas de qualquer lugar no código, incluindo dentro de funções. Isso significa que as variáveis globais têm escopo global.

Por outro lado, as variáveis declaradas dentro de uma função são chamadas de variáveis locais e têm escopo local. Ou seja, elas só podem ser acessadas dentro da função em que foram declaradas. Isso significa que as variáveis locais não podem ser acessadas de fora da função.

A partir do ES6 (ECMAScript 2015), JavaScript adicionou uma nova forma de declarar variáveis chamada "let" e "const". As variáveis declaradas com "let" e "const" têm escopo de bloco, o que significa que elas só podem ser acessadas dentro do bloco em que foram declaradas. Um bloco é definido por um par de chaves "{}", como em um loop for ou uma declaração if. As variáveis "let" podem ser reatribuídas, mas as variáveis "const" não podem ser reatribuídas.

Por exemplo:

```javascript
// Exemplo de variável global
const globalVariable = "Olá, mundo!";

function exemploDeEscopo() {
  // Exemplo de variável local
  const localVariable = "Olá, pessoal!";
  console.log(globalVariable); // "Olá, mundo!"
  console.log(localVariable); // "Olá, pessoal!"
}
exemploDeEscopo();

console.log(globalVariable); // "Olá, mundo!"
console.log(localVariable); // Error: localVariable is not defined

// Exemplo de variável com escopo de bloco
if (true) {
  let x = 5;
  const y = 10;
  console.log(x); // 5
  console.log(y); // 10
}

console.log(x); // Error: x is not defined
console.log(y); // Error: y is not defined
```

Neste exemplo, `globalVariable` é uma variável global que pode ser acessada dentro e fora da função `exemploDeEscopo`. `localVariable` é uma variável local que só pode ser acessada dentro da função `exemploDeEscopo`. `x` e `y` são variáveis com escopo de bloco que só podem ser acessadas dentro do bloco `if` em que foram declaradas.

A declaração de variável `var`não respeita o escopo de bloco, exemplo:

```javascript
if (true) {
  // Exemplo de variável var
  var variableVar = "Olá, mundo!";
  console.log(variableVar); // "Olá, mundo!"
  }

console.log(variableVar); // "Olá, mundo!"
```

No exemplo acima podemos ver que mesmo estando dentro de um bloco de código `if` a variável `variableVar`pode ser acessada fora do bloco de código dentro do `console.log()`.
