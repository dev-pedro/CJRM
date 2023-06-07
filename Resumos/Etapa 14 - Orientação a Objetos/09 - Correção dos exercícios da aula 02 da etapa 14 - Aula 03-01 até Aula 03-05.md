<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 02 da etapa 14 - Aula 03-01 até Aula 03-04

### Resumo

### Conteúdo Extra Aula

##### `get` (**getters)** | `set` (**setters**)

Em JavaScript, é possível definir métodos especiais chamados de getters e setters dentro das classes. Esses métodos permitem acessar e modificar os valores das propriedades da classe de uma maneira controlada. Eles são conhecidos como métodos de acesso.

Vamos ver um exemplo de como usar getters e setters em uma classe:

```javascript
class Pessoa {
  #nome; // Propriedade privada

  constructor(nome) {
    this.#nome = nome;
  }

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
    if (novoNome && typeof novoNome === "string") {
      this.#nome = novoNome;
    } else {
      console.error("Nome inválido.");
    }
  }
}

const pessoa = new Pessoa("João");
console.log(pessoa.nome); // Acesso à propriedade privada usando um getter
pessoa.nome = "Maria"; // Modificação da propriedade privada usando um setter
```

Neste exemplo, a classe Pessoa possui uma propriedade privada #nome, declarada usando a sintaxe de Private Class Fields. Em seguida, definimos um getter nome que retorna o valor da propriedade #nome e um setter nome que permite modificar o valor da propriedade, desde que seja uma string válida.

Ao criar uma instância da classe Pessoa, podemos acessar a propriedade privada usando a sintaxe de getter pessoa.nome. Isso nos permite obter o valor atual da propriedade #nome.

Além disso, também podemos usar o setter pessoa.nome = "Maria" para modificar a propriedade privada. Antes de atribuir o novo valor, o setter verifica se o novoNome é uma string válida. Se for válido, o valor da propriedade #nome é atualizado. Caso contrário, uma mensagem de erro é exibida no console.

O uso de getters e setters com Private Class Fields permite um controle mais preciso do acesso e da modificação de propriedades privadas em uma classe. Isso ajuda a garantir a consistência dos dados e a aplicação de lógicas específicas durante a leitura e gravação dessas propriedades.

### Encapsulamento

O encapsulamento é um conceito importante na programação orientada a objetos que envolve o agrupamento de dados e comportamentos relacionados em uma unidade coesa, chamada de classe. O encapsulamento visa ocultar a implementação interna de uma classe e fornecer uma interface consistente e controlada para interagir com os objetos.

Em JavaScript, embora a linguagem não ofereça suporte nativo a modificadores de acesso, como `public`, `private` ou `protected`, é possível alcançar o encapsulamento usando convenções e técnicas específicas. Vamos explorar essas técnicas:

1. **Convenções de Nomenclatura:**

Uma convenção comum em JavaScript é usar o sublinhado (_) no início de uma propriedade ou método para indicar que eles são considerados como privados. Embora essas propriedades e métodos ainda possam ser acessados externamente, a convenção sugere que eles sejam tratados como privados e não devam ser acessados diretamente.

Exemplo:

```javascript
class Pessoa {
  constructor(nome) {
    this._nome = nome;
  }

  _metodoPrivado() {
    // Implementação do método privado
  }

  metodoPublico() {
    // Implementação do método público
  }
}

const pessoa = new Pessoa("João");
console.log(pessoa._nome); // Acesso à propriedade "privada" (convenção)
pessoa._metodoPrivado(); // Chamada de método "privado" (convenção)
pessoa.metodoPublico(); // Chamada de método público
```

Neste exemplo, usamos a convenção de nomenclatura com sublinhado (_) para indicar que `_nome` e `_metodoPrivado()` são considerados como membros privados da classe `Pessoa`. No entanto, observe que esses membros ainda são acessíveis, embora a convenção sugira que eles sejam tratados como privados.

2. **Getters e Setters:**

Como mencionado anteriormente, os getters e setters permitem controlar o acesso e a modificação de propriedades de uma classe. Usando a convenção de nomenclatura com sublinhado (_), você pode indicar que as propriedades são consideradas privadas e, em seguida, usar getters e setters para fornecer uma interface controlada para acessar e modificar essas propriedades.

Exemplo:

```javascript
class Pessoa {
  constructor(nome) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    if (novoNome && typeof novoNome === "string") {
      this._nome = novoNome;
    } else {
      console.error("Nome inválido.");
    }
  }
}

const pessoa = new Pessoa("João");
console.log(pessoa.nome); // Acesso à propriedade "privada" usando um getter
pessoa.nome = "Maria"; // Modificação da propriedade "privada" usando um setter
```

Neste exemplo, a propriedade `_nome` é considerada privada de acordo com a convenção de nomenclatura com sublinhado (_). Em vez de acessar diretamente a propriedade, usamos um getter `nome` para obter o valor e um setter `nome` para modificar o valor. Isso permite que a classe controle o acesso e a modificação da propriedade de acordo com a lógica definida no setter.

### Três Formas de Encapsulamento em Javascript

Em JavaScript, existem três formas comuns de encapsular dados e comportamentos relacionados: classes, factory functions e funções construtoras. Com a introdução dos Private Class Fields (Campos de Classe Privados), você também pode usar esse recurso para alcançar o encapsulamento. Vamos refazer a explicação usando o conceito de Private Class Fields:

1. **Classes com Private Class Fields:**

As classes em JavaScript, desde o ECMAScript 2015 (ES6), fornecem uma sintaxe mais declarativa e orientada a objetos para encapsular propriedades e métodos relacionados. Com a adição dos Private Class Fields no ECMAScript 2019 (ES2019), você pode declarar propriedades privadas dentro de uma classe usando o prefixo `#`.

Exemplo:

```javascript
class Pessoa {
  #nome; // Propriedade privada

  constructor(nome) {
    this.#nome = nome;
  }

  getNome() {
    return this.#nome;
  }

  setNome(novoNome) {
    if (novoNome && typeof novoNome === "string") {
      this.#nome = novoNome;
    } else {
      console.error("Nome inválido.");
    }
  }
}

const pessoa = new Pessoa("João");
console.log(pessoa.getNome()); // Acesso à propriedade privada usando um método
pessoa.setNome("Maria"); // Modificação da propriedade privada usando um método
```

Neste exemplo, a classe `Pessoa` possui uma propriedade privada `#nome`. Essa propriedade só pode ser acessada dentro da própria classe. Os métodos `getNome` e `setNome` são usados para obter e definir o valor da propriedade privada, fornecendo uma interface controlada para acessar e modificar os dados encapsulados.

2. **Factory Functions com Closures:**

Factory functions são funções que retornam um novo objeto toda vez que são chamadas. Você pode usar closures para criar propriedades privadas que não são acessíveis externamente, fornecendo assim encapsulamento.

Exemplo:

```javascript
function criarPessoa(nome) {
  let _nome = nome; // Propriedade privada (closure)

  return {
    getNome() {
      return _nome;
    },

    setNome(novoNome) {
      if (novoNome && typeof novoNome === "string") {
        _nome = novoNome;
      } else {
        console.error("Nome inválido.");
      }
    }
  };
}

const pessoa = criarPessoa("João");
console.log(pessoa.getNome()); // Acesso à propriedade privada usando um método
pessoa.setNome("Maria"); // Modificação da propriedade privada usando um método
```

Neste exemplo, a função `criarPessoa` retorna um objeto com métodos para acessar e modificar uma propriedade privada `_nome`. Essa propriedade é definida usando uma closure, o que significa que ela é acessível apenas dentro do escopo da função `criarPessoa`, fornecendo encapsulamento.

3. **Funções Construtoras com Private Class Fields:**

Funções construtoras podem ser usadas como construtores de objetos e também podem se beneficiar do uso de Private Class Fields para encapsulamento. Com a sintaxe de Private Class Fields, você pode declarar propriedades privadas dentro da função construtora usando o prefixo `#`.

Exemplo:

```javascript
function Pessoa(nome) {
  this.#nome = nome; // Propriedade privada

  this.getNome = function () {
    return this.#nome;
  };

  this.setNome = function (novoNome) {
    if (novoNome && typeof novoNome === "string") {
      this.#nome = novoNome;
    } else {
      console.error("Nome inválido.");
    }
  };
}

const pessoa = new Pessoa("João");
console.log(pessoa.getNome()); // Acesso à propriedade privada usando um método
pessoa.setNome("Maria"); // Modificação da propriedade privada usando um método
```

Neste exemplo, a função construtora `Pessoa` define uma propriedade privada `#nome` usando Private Class Fields. Os métodos `getNome` e `setNome` são definidos como funções dentro do construtor e têm acesso à propriedade privada. Isso permite encapsular e controlar o acesso aos dados dentro do objeto.

Essas são as três formas comuns de encapsular dados e comportamentos relacionados em JavaScript: classes com Private Class Fields, factory functions com closures e funções construtoras com Private Class Fields. O uso do conceito de Private Class Fields oferece uma maneira mais robusta de definir propriedades privadas e reforçar o encapsulamento de dados em suas classes ou funções.

***

### Códigos Usados Nestes Exercícios

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exercício 37</title>
</head>
<body>
  <textarea maxlength="200" data-js="textarea" autofocus></textarea>
  <p data-js="paragraph"></p>

  <script src="./app.js"></script>
</body>
</html>
```

Javascript:

```javascript
/*
  01

  - Descomente a let abaixo, descubra o que o código está tentando fazer e 
    faça-o funcionar.
*/

class Animal {
  constructor (name) {
    this.name = name
  }
}

class Rabbit extends Animal {
  constructor (name) {
    super(name)
    this.created = new Date()
  }
}

let rabbit = new Rabbit('White Rabbit')
console.log(rabbit)

/*
  02

  - Descomente o código abaixo e implemente o que está faltando para que ele 
    funcione.
*/

class Counter {
  constructor (value = 0) {
    this.value = value
  }

  getValue () {
    return this.value
  }

  increment () {
    this.value++
  }
}

const counter = new Counter()

console.log(counter.getValue())
counter.increment()
console.log(counter.getValue())

/*
  03

  - A partir do array abaixo, gere um novo array com apenas os valores truthy;
  - Utilize um construtor para resolver este exercício;
  - Não invoque o construtor.
*/

const values = [0, {}, '', [], NaN, () => {}]
const onlyTruthyValue = values.filter(Boolean)

console.log(onlyTruthyValue)
/*
  04

  - O código abaixo deveria exibir no console, à cada segundo, uma string com 
    as horas minutos e segundos, no seguinte formato: "h:m:s" onde "h" 
    representa as horas, "m" os minutos e "s" os segundos. Exemplo: "22:01:25";
  - Descomente o código e conserte os erros que estão impedindo que ele 
    funcione.
*/

const formatTimeUnits = (units = []) =>
  units.map(unit => (unit < 10 ? `0${unit}` : unit))

const getActualTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return [hours, minutes, seconds]
}

const getFormatedTime = template => {
  const [hours, minutes, seconds] = getActualTime()

  const formatedTime = formatTimeUnits([hours, minutes, seconds])

  return template
    .split(':')
    .map((_, index) => formatedTime[index])
    .join(':')
}
class Clock {
  constructor ({ template }) {
    this.template = template
  }

  render () {
    const formatedTime = getFormatedTime(this.template)
    console.log(formatedTime)
  }

  start () {
    const oneSecond = 1000
    this.render()
    this.timer = setInterval(() => this.render(), oneSecond)
  }

  stop () {
    clearInterval(this.timer)
  }
}

class ExtendedClock extends Clock {
  constructor (options) {
    super(options)

    const { precision = 1000 } = options
    this.precision = precision
  }

  start () {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
}

// const clock = new ExtendedClock({ template: 'h:m:s', precision: 1000 })

// clock.start()

/*
  05

  - No index.html há um elemento "textarea" e um parágrafo. A cada vez que um 
    caractere for inserido no textarea, exiba no parágrafo a quantidade de 
    caracteres que o textarea contém.
*/
const textArea = document.querySelector('[data-js="textarea"]')
const paragraph = document.querySelector('[data-js="paragraph"]')

const showCounterParagraph = e => {
  const textLenght = e.target.value.length
  const wordLimit = e.target.maxLength

  paragraph.textContent = `${textLenght}/${wordLimit}`
}

textArea.addEventListener('input', e => {
  showCounterParagraph(e)
})

/*
  06

  - Já implementamos os métodos forEach, some, map e filter, do zero;
  - Neste exercício, seu desafio será criar, do zero, o método reduce;
  - Implemente uma função "reduce" que possui a mesma funcionalidade do método 
    reduce original;
  - Você não poderá utilizar o método reduce original, embutido na linguagem;
  - A assinatura e retorno da invocação desta função devem ser os seguintes:
    - reduce([1, 2, 3], (acc, item) => acc + item, 0) // 6;
    - reduce([2, 3, 4], (acc, item) => acc + item, 0) // 9;
    - reduce(
        [1, 2],
        (acc, item) => {
          acc['number-' + item] = item
          return acc
        },
        {}
      ) // {"number-1": 1, "number-2": 2};
    - reduce([1, 2], (acc, item, index) => acc + index, 0) // 1;
    - reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) // 3;
  - Utilize os casos de uso acima para testar sua função;
  - Se você não se lembra como o método reduce funciona, deixarei abaixo do 
    vídeo de correção dos exercícios um link para a aula de introdução ao 
    reduce e um link para a documentação do método no MDN.
*/

const reduce = (array = [], callback = () => {}, initValue = null) => {
  let acc = initValue

  const accumulateForEach = (item, index, array) => {
    acc = callback(acc, item, index, array)
  }
  array.forEach(accumulateForEach)

  return acc
}

const createItemBaseProperties = (acc, item) => {
  acc['number-' + item] = item
  return acc
}

const sumItens = (acc, item) => acc + item
const sumItemsPlusIndex = (acc, _, index) => acc + index
const sumItemsUsingArrayParam = (acc, _, index, array) => acc + array[index]

console.log(reduce([1, 2, 3], sumItens, 0))
console.log(reduce([2, 3, 4], sumItens, 0))
console.log(reduce([1, 2], createItemBaseProperties, {}))
console.log(reduce([1, 2], sumItemsPlusIndex, 0))
console.log(reduce([1, 2], sumItemsUsingArrayParam, 0))
```
