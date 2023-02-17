<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# 3 escopos em JavaScript que você deve conhecer - Aula 01-03

### Resumo

O escopo pode ser definido como a visibilidade de uma variável.

# 

Em JavaScript, um escopo é uma região do código onde uma determinada variável ou função é definida e acessível. Existem três tipos de escopos em JavaScript: escopo de funções, escopo de blocos e escopo léxico.

1. Escopo de Funções:
   O escopo de função em JavaScript é definido pela função na qual uma variável é declarada. Isso significa que as variáveis ​​declaradas dentro de uma função não são acessíveis fora da função. No entanto, as variáveis ​​declaradas fora de uma função podem ser acessadas dentro da função. Por exemplo:

```javascript
var x = 10; // variável global

function myFunction() {
  var y = 20; // variável local
  console.log(x); // acessível
  console.log(y); // acessível
}

myFunction();
console.log(x); // acessível
console.log(y); // não acessível
```

2. Escopo de Blocos:
   O escopo de bloco em JavaScript é definido por chaves {} em declarações de controle de fluxo, como `if`, `for`, `while`, etc. As variáveis ​​declaradas dentro de um bloco são acessíveis apenas dentro do bloco e não fora dele. Por exemplo:

```javascript
function myFunction() {
  if (true) {
    let x = 10; // variável local
    console.log(x); // acessível
  }
  console.log(x); // não acessível
}

myFunction();
```

3. Escopo Léxico:
   O escopo léxico em JavaScript refere-se ao escopo definido pela estrutura do código, ou seja, a relação entre as funções e os blocos em um programa. Isso significa que uma variável definida fora de uma função ou bloco é acessível a qualquer função ou bloco que está dentro dele. Por exemplo:

```javascript
function outerFunction() {
  var x = 10;

  function innerFunction() {
    console.log(x); // acessível
  }

  innerFunction();
}

outerFunction();
```

Em resumo, o escopo de funções em JavaScript é definido por funções, o escopo de blocos é definido por blocos de código e o escopo léxico é definido pela estrutura do código. O escopo léxico é usado para determinar como as variáveis são acessíveis a partir de diferentes partes do código.
