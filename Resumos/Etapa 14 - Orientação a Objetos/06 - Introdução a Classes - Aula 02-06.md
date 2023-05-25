<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Introdução a Classes - Aula 02-06

### Resumo

### Conteúdo Extra Aula

Em JavaScript, as classes são uma maneira de criar objetos e organizar o código de forma orientada a objetos. Elas foram introduzidas no ECMAScript 2015 (também conhecido como ES6) e fornecem uma sintaxe mais simples e familiar para trabalhar com herança e encapsulamento.

Para criar uma classe em JavaScript, você pode usar a palavra-chave `class`, seguida pelo nome da classe. Por exemplo, vamos criar uma classe chamada "Pessoa":

```javascript
class Pessoa {
  // Construtor da classe
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método da classe
  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}
```

Neste exemplo, a classe `Pessoa` tem um construtor que recebe os parâmetros `nome` e `idade` e os atribui às propriedades correspondentes do objeto. Além disso, há um método chamado `saudacao()` que imprime uma mensagem de saudação com o nome e a idade da pessoa.

Agora que a classe foi definida, podemos criar instâncias dela usando o operador `new`:

```javascript
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);

pessoa1.saudacao(); // Saída: Olá, meu nome é João e eu tenho 25 anos.
pessoa2.saudacao(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.
```

Neste exemplo, criamos duas instâncias da classe `Pessoa` e chamamos o método `saudacao()` em cada uma delas para imprimir a mensagem correspondente.

Além do construtor e dos métodos, as classes em JavaScript também podem ter propriedades estáticas e métodos estáticos. As propriedades estáticas são compartilhadas entre todas as instâncias da classe, enquanto os métodos estáticos são chamados diretamente na classe, sem a necessidade de criar uma instância.

### Objetos literais e Objetos Criados nas Classes | Diferença

Em JavaScript, os objetos literais (também conhecidos como objetos simples ou objetos de dicionário) e as classes são duas maneiras diferentes de criar e trabalhar com objetos.

A principal diferença entre eles está na forma como os objetos são criados e organizados.

1. **Objeto Literal:**

Um objeto literal é uma coleção de pares chave-valor, onde as chaves são strings que representam os nomes das propriedades e os valores são os dados associados a essas propriedades. A estrutura básica é:

```javascript
const objeto = {
  propriedade1: valor1,
  propriedade2: valor2,
  // ...
};
```

Por exemplo:

```javascript
const pessoa = {
  nome: "João",
  idade: 25,
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
};
```

Nesse caso, `pessoa` é um objeto literal com as propriedades "nome", "idade" e um método "saudacao" que imprime uma mensagem.

2. **Classes:**

As classes em JavaScript fornecem uma sintaxe mais orientada a objetos para a criação de objetos. Elas permitem definir uma estrutura e comportamento comuns para criar instâncias da classe. A estrutura básica para criar uma classe é:

```javascript
class NomeDaClasse {
  constructor(parametros) {
    // Inicialização das propriedades
  }

  metodo1() {
    // Implementação do método
  }

  metodo2() {
    // Implementação do método
  }

  // ...
}
```

Por exemplo:

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}
```

Neste exemplo, a classe `Pessoa` tem um construtor e um método `saudacao`, assim como no exemplo anterior do objeto literal.

A diferença chave é que, com as classes, você pode criar várias instâncias (objetos) da classe usando a palavra-chave `new`:

```javascript
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);

pessoa1.saudacao(); // Saída: Olá, meu nome é João e eu tenho 25 anos.
pessoa2.saudacao(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.
```

No caso dos objetos literais, você pode criar objetos isolados sem a necessidade de uma estrutura de classe.

Ambas as abordagens têm suas vantagens e desvantagens. Os objetos literais são úteis quando você precisa criar objetos simples e independentes. As classes, por outro lado, são mais adequadas quando você precisa de uma estrutura mais complexa com propriedades e métodos compartilhados entre várias instâncias de objetos.

Em resumo, a diferença principal é que os objetos literais são mais simples e independentes, enquanto as classes fornecem uma abordagem mais orientada a objetos com a possibilidade de criar várias instâncias com propriedades e métodos compartilhados.
