<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O que são objetos - Aula 01-02

### Resumo

Em JavaScript, um objeto é uma estrutura de dados composta por propriedades e métodos. Uma propriedade é uma associação entre um nome e um valor, enquanto um método é uma função associada a um objeto.

Objetos são usados para representar objetos do mundo real, como por exemplo, um carro, um livro, uma pessoa, etc. Cada propriedade de um objeto representa uma característica desse objeto, e cada método representa uma ação que pode ser realizada por esse objeto.

Os objetos em JavaScript são criados usando a notação literal de objeto, que consiste em colchetes `{}`. As propriedades e métodos de um objeto são definidos dentro desses colchetes, separados por vírgulas.

Aqui está um exemplo de um objeto em JavaScript:

```javascript
const livro = {
  título: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  páginas: 423,
  descrição: function() {
    return `${this.título} é um livro escrito por ${this.autor} com ${this.páginas} páginas.`;
  }
};
```

Nesse exemplo, o objeto `livro` tem três propriedades: `título`, `autor` e `páginas`. Além disso, ele tem um método `descrição`, que retorna uma string descrevendo o livro.
