<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O que é orientação a objetos - Aula 02-05

### Resumo

### Conteúdo Extra Aula

A orientação a objetos é um paradigma de programação que permite organizar o código em estruturas chamadas de objetos, que representam entidades do mundo real ou conceitos abstratos. Em JavaScript, a orientação a objetos é suportada nativamente, embora a linguagem seja principalmente baseada em protótipos, em vez de classes tradicionais encontradas em outras linguagens orientadas a objetos.

Em JavaScript, você pode criar objetos usando a sintaxe de objeto literal, que consiste em chaves `{}` para definir um objeto e pares de chave-valor para definir suas propriedades e métodos. Aqui está um exemplo básico de um objeto em JavaScript:

```javascript
const pessoa = {
  nome: "João",
  idade: 30,
  saudacao: function() {
    console.log("Olá, meu nome é " + this.nome);
  }
};
```

Neste exemplo, o objeto `pessoa` possui duas propriedades, `nome` e `idade`, e um método chamado `saudacao`, que imprime uma mensagem no console.

Além disso, em JavaScript, você também pode criar objetos usando funções construtoras ou classes. Essas abordagens permitem criar objetos com propriedades e métodos compartilhados.

Por exemplo, usando funções construtoras, você pode criar vários objetos com as mesmas propriedades e métodos, compartilhando o mesmo protótipo. Aqui está um exemplo:

```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.saudacao = function() {
  console.log("Olá, meu nome é " + this.nome);
};

const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);

pessoa1.saudacao(); // Saída: "Olá, meu nome é João"
pessoa2.saudacao(); // Saída: "Olá, meu nome é Maria"
```

Nesse exemplo, a função construtora `Pessoa` é definida com parâmetros `nome` e `idade`. O método `saudacao` é adicionado ao protótipo da função construtora, permitindo que todas as instâncias criadas por meio de `new Pessoa()` compartilhem o mesmo método.

Além disso, a partir do ECMAScript 2015 (também conhecido como ES6), o JavaScript introduziu a sintaxe de classe para criar objetos e definir suas propriedades e métodos. Aqui está um exemplo usando a sintaxe de classe:

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log("Olá, meu nome é " + this.nome);
  }
}

const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);

pessoa1.saudacao(); // Saída: "Olá, meu nome é João"
pessoa2.saudacao(); // Saída: "Olá, meu nome é Maria"
```

Nesse exemplo, a classe `Pessoa` é definida com um construtor e um método `saudacao`, que são equivalentes à versão usando a função construtora e o protótipo.

Esses são apenas exemplos básicos de como a orientação a objetos pode ser aplicada em JavaScript. A linguagem oferece recursos mais avançados para a orientação a objetos em JavaScript. Alguns desses recursos incluem:

1. Modificadores de acesso: A partir do ECMAScript 2015, o JavaScript introduziu a sintaxe `class` que suporta modificadores de acesso, como `public`, `private` e `protected`, para controlar o acesso às propriedades e métodos de uma classe. Isso permite encapsular e proteger dados sensíveis. Aqui está um exemplo:

```javascript
class Pessoa {
  #nome; // propriedade privada

  constructor(nome) {
    this.#nome = nome;
  }

  saudacao() {
    console.log("Olá, meu nome é " + this.#nome);
  }
}

const pessoa = new Pessoa("João");
pessoa.saudacao(); // Saída: "Olá, meu nome é João"
console.log(pessoa.nome); // Erro: A propriedade 'nome' é privada
```

2. Métodos estáticos: Você pode definir métodos estáticos em uma classe, que podem ser chamados diretamente na classe, sem a necessidade de instanciar um objeto. Esses métodos são úteis para funcionalidades que não dependem de instâncias específicas da classe. Aqui está um exemplo:

```javascript
class Utilitarios {
  static somar(a, b) {
    return a + b;
  }
}

console.log(Utilitarios.somar(3, 5)); // Saída: 8
```

3. Palavra-chave `super`: Em classes que estendem outras classes, a palavra-chave `super` é usada para chamar o construtor ou métodos da classe pai. Isso é útil quando você deseja estender o comportamento de uma classe pai na classe filha. Aqui está um exemplo:

```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  dizerNome() {
    console.log("Meu nome é " + this.nome);
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // chama o construtor da classe pai
    this.raca = raca;
  }

  latir() {
    console.log("Au au!");
  }
}

const rex = new Cachorro("Rex", "Labrador");
rex.dizerNome(); // Saída: "Meu nome é Rex"
rex.latir(); // Saída: "Au au!"
```

Esses são apenas alguns dos recursos avançados da orientação a objetos em JavaScript. A linguagem oferece muitas outras possibilidades e é importante explorar a documentação oficial e recursos adicionais para um entendimento mais completo e aprofundado.

### Wrapper Objects de Tipos Primitivos

Em JavaScript, existem os chamados "wrapper objects" (objetos de invólucro) que fornecem uma interface orientada a objetos para os tipos primitivos da linguagem. Esses objetos são criados automaticamente quando você acessa uma propriedade ou chama um método em um valor primitivo.

Os tipos primitivos em JavaScript são: `string`, `number`, `boolean`, `null` e `undefined`. Quando você tenta acessar uma propriedade ou chamar um método em um valor primitivo, o JavaScript cria temporariamente um objeto wrapper correspondente e executa a operação solicitada nele. Após a operação, o objeto wrapper é descartado.

Aqui está um exemplo para ilustrar o uso de objetos de invólucro:

```javascript
const nome = "João";
console.log(nome.length); // Saída: 4

const numero = 42;
console.log(numero.toFixed(2)); // Saída: "42.00"

const booleano = true;
console.log(booleano.toString()); // Saída: "true"
```

No exemplo acima, a propriedade `length` é acessada no valor primitivo da variável `nome`, o método `toFixed()` é chamado no valor primitivo da variável `numero` e o método `toString()` é chamado no valor primitivo da variável `booleano`. Em cada caso, o JavaScript cria temporariamente um objeto wrapper correspondente para permitir o acesso à propriedade ou chamada do método.

É importante lembrar que, embora os objetos de invólucro forneçam uma interface orientada a objetos para os tipos primitivos, eles não são idênticos aos tipos primitivos. Eles possuem suas próprias propriedades e comportamentos adicionais. Portanto, ao fazer comparações entre valores primitivos e objetos de invólucro, você pode obter resultados inesperados:

```javascript
const numero1 = 42;
const numero2 = new Number(42);

console.log(numero1 === numero2); // Saída: false
```

Nesse exemplo, `numero1` é um valor primitivo do tipo `number`, enquanto `numero2` é um objeto de invólucro do tipo `Number`. Apesar de terem o mesmo valor, a comparação estrita `===` retorna `false` porque são tipos diferentes.

Em geral, ao lidar com valores primitivos, você pode usar diretamente os tipos primitivos sem a necessidade de criar objetos de invólucro, a menos que haja uma necessidade específica de acessar propriedades ou métodos fornecidos pelos objetos de invólucro.

### Referencias

Wrapper objects de tipos primitivos:

[Primitive - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Primitive#Primitive_wrapper_objects_in_JavaScript)

Construtores embutidos da linguagem:

[Standard built-in objects - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
