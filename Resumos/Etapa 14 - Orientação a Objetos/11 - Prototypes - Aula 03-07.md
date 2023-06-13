<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Prototypes - Aula 03-07

### Resumo

### Motivos  Para Usar Prototypes(Protótipos)

Há algumas razões pelas quais criar protótipos é muitas vezes preferível a adicionar métodos diretamente em funções construtoras:

1. Economia de memória: Ao adicionar métodos diretamente em funções construtoras, cada instância do objeto terá sua própria cópia desse método. Isso pode levar a uma duplicação desnecessária de código e uso excessivo de memória, especialmente se você tiver muitas instâncias do objeto. Por outro lado, ao usar protótipos, os métodos são compartilhados entre todas as instâncias, economizando espaço de memória.

2. Eficiência na criação de objetos: Ao adicionar métodos diretamente em funções construtoras, cada vez que um novo objeto é criado, todos os métodos são recriados. No entanto, quando você usa protótipos, os métodos são definidos apenas uma vez e todas as instâncias do objeto têm acesso a esses métodos por meio de uma referência ao protótipo. Isso resulta em uma criação mais eficiente de objetos, pois não é necessário redefinir os métodos a cada nova instância.

3. Flexibilidade e extensibilidade: Ao usar protótipos, é possível adicionar ou modificar métodos e propriedades do objeto mesmo após sua criação. Você pode estender a funcionalidade do objeto sem modificar sua função construtora original. Isso permite uma maior flexibilidade e extensibilidade do código, facilitando a manutenção e evolução do sistema.

4. Herança e cadeia de protótipos: Os protótipos também desempenham um papel importante na herança em JavaScript. Você pode criar uma cadeia de protótipos, onde um objeto herda propriedades e métodos de um protótipo pai. Isso permite a reutilização de código e a criação de relacionamentos hierárquicos entre objetos.

Em resumo, o uso de protótipos em JavaScript oferece benefícios como economia de memória, eficiência na criação de objetos, flexibilidade, extensibilidade e suporte à herança. Essas são algumas das razões pelas quais é geralmente preferível criar protótipos em vez de adicionar métodos diretamente em funções construtoras. No entanto, é importante notar que, com a introdução de classes em JavaScript ES6, a sintaxe de classes pode ser usada como uma alternativa aos protótipos, fornecendo uma abordagem mais orientada a objetos para a criação de objetos e herança.

### Criando um Prototypes(Protótipos)

Em JavaScript, é possível criar protótipos para adicionar métodos e propriedades a objetos existentes. Protótipos são uma parte importante do sistema de herança do JavaScript e permitem estender o comportamento de objetos preexistentes.

Aqui está um exemplo de como criar um protótipo em JavaScript:

```javascript
// Definindo um construtor de objeto
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// Adicionando um método ao protótipo do objeto Pessoa
Pessoa.prototype.dizerOla = function() {
  console.log(`Olá, meu nome é ${this.nome}!`);
};

// Criando uma instância do objeto Pessoa
const pessoa1 = new Pessoa('João', 25);

// Chamando o método do protótipo
pessoa1.dizerOla(); // Saída: Olá, meu nome é João!
```

Neste exemplo, temos um construtor de objeto chamado `Pessoa` que aceita dois parâmetros: `nome` e `idade`. Em seguida, adicionamos um método chamado `dizerOla` ao protótipo do objeto `Pessoa`. Esse método pode ser acessado por qualquer instância do objeto `Pessoa`.

Através do uso de protótipos, você pode adicionar métodos e propriedades a objetos JavaScript de forma mais eficiente, evitando a duplicação desnecessária de código em cada instância do objeto. Além disso, a herança baseada em protótipos permite que objetos compartilhem comportamentos comuns e criem uma cadeia de protótipos para acesso a propriedades e métodos.

### Prototypes(Protótipos) Dentro de Classes

Ao declarar um método dentro de uma classe em JavaScript, esse método fica disponível no prototype do objeto criado a partir dessa classe.

Quando você define um método dentro de uma classe, ele é adicionado ao prototype do construtor da classe. Isso significa que todas as instâncias criadas a partir dessa classe terão acesso a esse método por meio do seu prototype.

Aqui está um exemplo para ilustrar esse conceito:

```javascript
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  dizerOla() {
    console.log('Olá, meu nome é ' + this.nome + '!');
  }
}

const pessoa1 = new Pessoa('João');
pessoa1.dizerOla(); // Saída: Olá, meu nome é João!

console.log(Pessoa.prototype.dizerOla); // Saída: [Function: dizerOla]
```

Nesse exemplo, a classe `Pessoa` possui um método `dizerOla()`. Ao criar uma instância da classe (`pessoa1`), podemos chamar o método `dizerOla()` nessa instância. Além disso, podemos verificar que o método `dizerOla()` está presente no prototype da classe `Pessoa` através do `Pessoa.prototype.dizerOla`.

Portanto, em classes, os métodos são adicionados ao prototype do construtor da classe, permitindo que todas as instâncias criadas a partir dessa classe acessem esses métodos. Isso facilita a definição de comportamentos compartilhados entre as instâncias da classe e promove a reutilização de código.

### Método Utilitário

Um método utilitário, também conhecido como função utilitária ou função helper, é um tipo de função em programação que fornece funcionalidades auxiliares e tarefas específicas que podem ser reutilizadas em diferentes partes do código.

Os métodos utilitários são projetados para realizar operações comuns ou tarefas genéricas que podem ser aplicadas a vários contextos ou objetos. Eles são usados para encapsular lógica repetitiva ou complexa em uma função única, simplificando assim o código e promovendo a reutilização.

As características dos métodos utilitários incluem:

1. Funcionalidade específica: Os métodos utilitários são projetados para realizar uma tarefa específica ou fornecer uma funcionalidade auxiliar. Eles podem lidar com cálculos matemáticos, formatação de strings, manipulação de datas, ordenação de listas, validação de dados, entre outras operações comuns.

2. Independência de contexto: Os métodos utilitários são geralmente independentes do contexto específico de um programa. Eles não dependem de informações externas ou do estado de um objeto específico. Em vez disso, eles aceitam argumentos como entrada e retornam um resultado com base nesses argumentos.

3. Reutilização: A principal finalidade dos métodos utilitários é serem reutilizados em diferentes partes do código. Eles podem ser invocados em várias seções do programa para executar a mesma funcionalidade sem precisar reescrever o código repetidamente.

4. Encapsulamento: Os métodos utilitários encapsulam a lógica ou a tarefa em uma única função, permitindo que ela seja invocada facilmente e isolando-a do restante do código. Isso promove a modularidade e torna o código mais legível e manutenível.

Os métodos utilitários são amplamente usados em muitas linguagens de programação e bibliotecas. Por exemplo, na linguagem JavaScript, a biblioteca lodash fornece uma série de métodos utilitários que abrangem uma variedade de funcionalidades comuns, como manipulação de arrays, objetos, strings, entre outros.

Em resumo, os métodos utilitários são funções que oferecem funcionalidades auxiliares genéricas e podem ser reutilizadas em várias partes do código para simplificar e otimizar a implementação de tarefas comuns.

### Métodos Estáticos

Em muitas linguagens de programação, os métodos utilitários são frequentemente implementados como métodos estáticos (ou seja, métodos de classe) para permitir seu uso sem a necessidade de criar uma instância da classe. No entanto, não é obrigatório que um método utilitário seja estático.

Métodos estáticos são associados à classe em si, em vez de estarem vinculados a instâncias específicas da classe. Isso significa que eles podem ser chamados diretamente na classe, sem a necessidade de criar um objeto da classe. Eles geralmente são declarados com a palavra-chave `static`.

Aqui está um exemplo em JavaScript para ilustrar um método utilitário estático:

```javascript
class StringUtil {
  static contarCaracteres(texto) {
    return texto.length;
  }
}

console.log(StringUtil.contarCaracteres('Olá')); // Saída: 3
```

Nesse exemplo, temos uma classe `StringUtil` com um método estático `contarCaracteres()`. Podemos chamar esse método diretamente na classe `StringUtil` sem precisar criar uma instância da classe.

No entanto, é importante ressaltar que nem todos os métodos utilitários precisam ser estáticos. Em algumas situações, pode fazer sentido ter um método utilitário que seja chamado em uma instância específica do objeto. Por exemplo, um método utilitário que formata um número em uma determinada moeda pode ser mais apropriado como um método de instância, pois está relacionado a uma instância específica do objeto número.

Portanto, embora seja comum que métodos utilitários sejam implementados como métodos estáticos, não é uma regra absoluta. A escolha entre métodos estáticos e de instância depende do contexto e da funcionalidade específica que o método utilitário deve fornecer.

### Funções Anonimas

Funções anônimas, como o próprio nome sugere, são funções que não possuem um nome identificador. Elas são definidas diretamente no local em que são utilizadas, sem a necessidade de serem declaradas como funções nomeadas.

Em JavaScript, as funções anônimas podem ser definidas de algumas maneiras diferentes. Vou apresentar duas formas comuns de criar funções anônimas:

1. Expressões de função anônimas:

```javascript
var minhaFuncao = function() {
  // Corpo da função
};
```

Nesse exemplo, estamos criando uma função anônima e atribuindo-a a uma variável chamada `minhaFuncao`. A função não possui um nome, mas pode ser chamada utilizando o nome da variável.

2. Funções de seta (arrow functions):

```javascript
var minhaFuncao = () => {
  // Corpo da função
};
```

As funções de seta são uma forma mais concisa de criar funções anônimas em JavaScript. Elas são denotadas pelo uso da seta `=>`. O exemplo acima é equivalente ao primeiro exemplo, utilizando uma função de seta.

As funções anônimas são frequentemente utilizadas em situações em que é necessário passar uma função como argumento para outra função, como em callbacks e funções de ordem superior. Elas também podem ser usadas para criar closures, que são funções que capturam o ambiente léxico em que foram criadas.

Além disso, funções anônimas podem ser chamadas diretamente no local em que são definidas, sem atribuí-las a uma variável, como mostrado no exemplo a seguir:

```javascript
(function() {
  // Corpo da função
})();
```

Nesse caso, estamos envolvendo a função anônima em parênteses e, em seguida, chamando-a imediatamente adicionando `()` no final. Essa técnica é comumente usada para criar um escopo isolado e executar a função imediatamente.

As funções anônimas são uma ferramenta poderosa em JavaScript para criar blocos de código encapsulados e reutilizáveis. Elas são flexíveis e podem ser usadas em várias situações, mas é importante entender suas peculiaridades e considerar a clareza e a legibilidade do código ao utilizá-las.

### Nome de Funções em Arrow Functions

Nas arrow functions em JavaScript, a propriedade `name` é definida automaticamente com base no nome da constante ou variável à qual a função é atribuída.

Quando você define uma arrow function e a atribui a uma constante, o nome da constante é usado como o nome da função para fins de propriedade `name`. Isso permite acessar o nome da função por meio da propriedade `name`.

Aqui está um exemplo que demonstra isso:

```javascript
const minhaFuncao = () => {
  // Corpo da função
};

console.log(minhaFuncao.name); // Saída: minhaFuncao
```

No exemplo acima, a arrow function é atribuída à constante `minhaFuncao`. Ao acessar a propriedade `name` da função, obtemos o valor `"minhaFuncao"`, que corresponde ao nome da constante.

No entanto, é importante ressaltar que, se a função for atribuída a uma variável em vez de uma constante, o valor da propriedade `name` será igual a `""` (uma string vazia). Isso ocorre porque as variáveis em JavaScript podem ter seu valor alterado, e a propriedade `name` da função não é atualizada automaticamente se a variável for renomeada.

```javascript
let minhaFuncao = () => {
  // Corpo da função
};

console.log(minhaFuncao.name); // Saída: ""
```

Portanto, nas arrow functions, o valor da propriedade `name` é baseado no nome da constante (ou variável) à qual a função é atribuída, desde que a constante seja usada.
