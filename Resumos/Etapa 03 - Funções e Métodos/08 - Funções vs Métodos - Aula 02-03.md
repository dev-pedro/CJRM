<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Funções vs Métodos - Aula 02-03

### Resumo

Em JavaScript, a principal diferença entre funções e métodos é que as funções são objetos de primeira classe, enquanto os métodos são funções associadas a objetos.

As funções são objetos independentes que podem ser atribuídos a variáveis, passados como argumentos para outras funções ou retornados como resultados de outras funções. Aqui está um exemplo:

```javascript
function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result); // 5
```

Os métodos, por outro lado, são funções associadas a objetos. Eles são chamados usando o operador "ponto" (`.`) e podem acessar e manipular os dados do objeto ao qual estão associados. Aqui está um exemplo:

```javascript
let person = {
  name: "Pedro",
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

person.greet(); // Hello, Pedro!
```

Observe que, no exemplo acima, o método `greet` está associado ao objeto `person`. Quando o método é chamado, ele acessa a propriedade `name` do objeto usando a palavra-chave `this`.

O que diferencia um método de uma função é a forma e onde eles são declarados.
