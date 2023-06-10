<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Funções construtoras - Aula 03-06

### Resumo

### Funções construtoras

As funções construtoras são uma forma de encapsular e criar objetos em JavaScript. Elas são usadas como modelos para criar novas instâncias de objetos com propriedades e métodos semelhantes. Uma função construtora é definida usando a sintaxe de uma função regular, mas é invocada usando o operador `new`. Vamos ver um exemplo:

```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.dizerOla = function() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  };
}

const pessoa1 = new Pessoa("João", 30);
pessoa1.dizerOla(); // Saída: Olá, meu nome é João e eu tenho 30 anos.

const pessoa2 = new Pessoa("Maria", 25);
pessoa2.dizerOla(); // Saída: Olá, meu nome é Maria e eu tenho 25 anos.
```

Neste exemplo, definimos a função construtora `Pessoa` que recebe dois parâmetros, `nome` e `idade`. Dentro da função construtora, atribuímos esses parâmetros às propriedades `nome` e `idade` do objeto usando a referência `this`. Também definimos um método `dizerOla` que imprime uma mensagem com o nome e a idade da pessoa.

Para criar uma nova instância da Pessoa, utilizamos o operador `new` seguido pelo nome da função construtora e passamos os argumentos desejados. Isso cria um novo objeto com as propriedades e métodos definidos na função construtora.

No exemplo, criamos duas instâncias diferentes da Pessoa, `pessoa1` e `pessoa2`, com nomes e idades diferentes. Ambas as instâncias têm acesso ao método `dizerOla`, que imprime uma mensagem personalizada com base nas propriedades do objeto.

As funções construtoras são úteis quando queremos criar múltiplas instâncias de objetos com estrutura semelhante. Elas permitem que os objetos compartilhem comportamentos e evitam a repetição de código ao definir os métodos para cada instância individualmente.

### Classes em Javascript

O conceito de classes em JavaScript pode ser considerado uma forma de abstração. A abstração é um dos princípios fundamentais da programação orientada a objetos e envolve a criação de modelos ou representações simplificadas de objetos do mundo real.

Em JavaScript, as classes permitem abstrair os objetos e seus comportamentos em uma unidade coesa. Elas fornecem uma forma de definir as propriedades e métodos que um objeto deve ter, encapsulando a lógica relacionada a esses objetos em uma estrutura organizada.

Ao criar uma classe, estamos criando uma abstração que representa um tipo de objeto em nossa aplicação. Podemos definir suas características (propriedades) e comportamentos (métodos) de forma clara e modular. Dessa forma, podemos criar várias instâncias dessa classe, cada uma representando um objeto específico, mas todas compartilhando a mesma estrutura e comportamentos definidos na classe.

A abstração por meio das classes em JavaScript permite que nos concentremos nos aspectos relevantes dos objetos, ignorando detalhes desnecessários. Isso nos ajuda a organizar melhor nosso código, facilita a reutilização e manutenção, e torna o código mais legível e compreensível, pois nos permite trabalhar com conceitos mais próximos do mundo real em nossa implementação.

### Por que deve-se declarar uma função construtora coma a primeira letra maiúscula ?

Embora não seja estritamente necessário declarar uma função construtora com a primeira letra maiúscula em JavaScript, essa convenção é amplamente seguida pela comunidade de desenvolvedores. A prática de nomear funções construtoras com a primeira letra maiúscula é conhecida como PascalCase ou UpperCamelCase.

Existem várias razões pelas quais essa convenção é recomendada:

1. Distinguir funções construtoras de outras funções: Ao seguir a convenção de nomear funções construtoras com a primeira letra maiúscula, torna-se mais fácil distinguir entre funções regulares e funções que são usadas como construtoras para criar objetos.

2. Legibilidade do código: O uso de PascalCase para funções construtoras melhora a legibilidade do código, pois torna mais claro que estamos trabalhando com um construtor quando vemos o nome da função em um código.

3. Convenção amplamente adotada: É uma prática comum na comunidade de desenvolvedores JavaScript nomear funções construtoras com a primeira letra maiúscula. Seguir essa convenção torna o código mais consistente e facilita a colaboração em projetos compartilhados.

No entanto, é importante ressaltar que, independentemente do nome que você escolher para suas funções construtoras, o JavaScript permitirá a criação de objetos com o operador `new`. A convenção de nomeação é uma prática recomendada para manter a clareza e a legibilidade do código e seguir as convenções estabelecidas pela comunidade.

### Função construtora precisa ser declarada como `function`?

Sim, para criar uma função construtora em JavaScript, você precisa declará-la usando a palavra-chave `function`. A palavra-chave `function` é usada para definir uma função em JavaScript, incluindo funções construtoras.

A sintaxe básica para declarar uma função construtora é:

```javascript
function NomeConstrutor(parametros) {
  // Corpo da função construtora
  // Inicialização de propriedades, definição de métodos, etc.
}
```

A função construtora é invocada usando o operador `new` para criar novas instâncias de objetos. Por exemplo:

```javascript
const objeto = new NomeConstrutor(argumentos);
```

Dentro do corpo da função construtora, você pode definir as propriedades e métodos desejados para os objetos criados a partir dessa função. As propriedades são atribuídas ao objeto usando a referência `this` e os métodos são definidos diretamente no objeto usando a sintaxe `this.nomeMetodo = function() { ... }`.

Embora existam outras formas de criar objetos em JavaScript, como por meio de classes ou funções de fábrica, a função construtora é um dos principais mecanismos para criar objetos usando o paradigma de programação orientada a objetos em JavaScript. Portanto, é necessário usar a palavra-chave `function` para declarar uma função construtora.

### Quando usamos o `this` em uma `arrow function`qual é o objeto que ele faz referencia?

Quando usamos o `this` dentro de uma `arrow function` em JavaScript, o `this` se refere ao contexto léxico em que a `arrow function` é definida. Diferentemente das funções regulares, as `arrow functions` não têm seu próprio valor de `this` e não criam um novo contexto de execução.

Em outras palavras, o valor de `this` dentro de uma `arrow function` é herdado do escopo externo em que a `arrow function` é definida. Isso significa que o `this` de uma `arrow function` é determinado pelo contexto em que ela é criada e não pelo modo como é chamada.

Veja um exemplo:

```javascript
const obj = {
  nome: "João",
  saudacao: () => {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

obj.saudacao(); // Saída: Olá, meu nome é undefined
```

Nesse exemplo, temos um objeto `obj` com uma propriedade `nome` e um método `saudacao`. O método `saudacao` é uma `arrow function` que tenta acessar a propriedade `nome` usando o `this`. No entanto, como a `arrow function` não tem seu próprio valor de `this`, o `this` se refere ao escopo global (no navegador) ou ao objeto global (no Node.js), onde a `arrow function` é definida. Como o objeto global não possui uma propriedade `nome`, o resultado é `undefined`.

Em resumo, ao usar o `this` dentro de uma `arrow function`, é importante entender que ele se refere ao contexto léxico em que a `arrow function` é definida e não muda com base no contexto de execução em que é chamada.

### `this`dentro de uma `arrow function`

Quando uma `arrow function` é definida no escopo global (no navegador) ou no módulo global (no Node.js), o `this` dentro dela faz referência ao objeto `window` (no navegador) ou ao objeto global (no Node.js).

Isso acontece porque as `arrow functions` não têm seu próprio valor de `this` e herdam o valor do contexto em que são definidas. No escopo global, fora de qualquer função, o `this` se refere ao objeto global (`window` no navegador, `global` no Node.js).

Veja um exemplo:

```javascript
const arrowFunction = () => {
  console.log(this === window); // Saída: true (no navegador)
};

arrowFunction();
```

Nesse exemplo, a `arrow function` é definida no escopo global e, dentro dela, comparamos o valor de `this` com o objeto `window` (no navegador). A comparação retorna `true`, indicando que o `this` dentro da `arrow function` faz referência ao objeto `window` no escopo global.

É importante lembrar que essa associação do `this` com o objeto `window` ocorre apenas quando a `arrow function` é definida no escopo global. Dentro de funções ou objetos, o valor de `this` pode ser diferente e depende do contexto de execução em que a `arrow function` é chamada.

### O `this` aninhado em `arrow function` dentro de funções construtoras

O `this` dentro de uma `arrow function` não faz referência à função construtora quando a `arrow function` está aninhada dentro dela.

Quando uma `arrow function` é definida dentro de uma função construtora ou qualquer outra função, ela mantém o mesmo valor de `this` do escopo onde foi definida, ou seja, o `this` é herdado do escopo pai.

Vejamos um exemplo para ilustrar isso:

```javascript
function Construtora() {
  this.propriedade = 'valor';

  this.metodo = function() {
    const arrowFunction = () => {
      console.log(this.propriedade);
    };

    arrowFunction();
  };
}

const objeto = new Construtora();
objeto.metodo(); // Saída: valor
```

Nesse exemplo, temos uma função construtora `Construtora` que define uma propriedade `propriedade` e um método `metodo`. Dentro do método, temos uma `arrow function` `arrowFunction`. Quando chamamos `objeto.metodo()`, o `this` dentro da `arrow function` faz referência ao objeto `objeto`, pois o `this` é herdado do escopo da função `metodo`.

Portanto, em resumo, quando uma `arrow function` está aninhada dentro de uma função construtora, ela herda o valor de `this` do contexto em que foi definida, que pode ser o objeto criado pela função construtora ou outro objeto, mas não faz referência direta à função construtora em si.
