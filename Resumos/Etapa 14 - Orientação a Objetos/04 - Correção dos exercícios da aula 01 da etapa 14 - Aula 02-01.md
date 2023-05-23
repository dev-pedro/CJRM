<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 01 da etapa 14 - Aula 02-01 até Aula 02-04

### Resumo

### Instruções e Expressões

- Instruções: Em JavaScript, as instruções são como "comandos" que dizem ao computador o que fazer. Elas são compostas por palavras-chave e podem ser utilizadas para realizar ações específicas. Por exemplo, a instrução `console.log("Olá, mundo!");` diz ao computador para exibir a mensagem "Olá, mundo!" no console.

- Expressões: As expressões são partes do código que produzem um valor. Elas podem ser compostas por números, strings (texto entre aspas), variáveis, operadores e chamadas de função. Por exemplo, a expressão `5 + 3` produz o valor 8, enquanto a expressão `"Olá, " + "mundo!"` produz a string "Olá, mundo!".

Diferença entre instruções e expressões: A principal diferença é que as instruções executam ações e não produzem valores, enquanto as expressões produzem valores. As instruções são como "ordens" que realizam tarefas, como exibir informações ou executar um bloco de código condicional. As expressões, por outro lado, são como "cálculos" que geram um resultado ou valor que pode ser utilizado em outras partes do código.

Em resumo, instruções são comandos que realizam ações, enquanto expressões são partes do código que produzem valores. Ambas são fundamentais em JavaScript e são usadas para criar programas e controlar o comportamento do computador.

##### Exemplos de instruções e expressões

###### Instruções Básicas:

1. Declaração de variáveis usando a palavra-chave "var", "let" ou "const":

```javascript
const nome = "João"; // Variável que pode ser alterada posteriormente
let idade = 25; // Variável que pode ser alterada posteriormente
const PI = 3.14; // Constante imutável
```

2. Imprimir no console:

```javascript
console.log("Olá, mundo!");
```

3. Estruturas condicionais (if, else if, else):

```javascript
const idade = 18;
if (idade >= 18) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}
```

4. Loops (for, while):

```javascript
// Loop for
for (const i = 0; i < 5; i++) {
  console.log(i);
}

// Loop while
const i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

5. Funções:

```javascript
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

saudacao("Maria"); // Chamando a função e passando o parâmetro "Maria"
```

###### Expressões Básicas:

1. Atribuição de valores:

```javascript
var x = 5;
var y = x + 2;
```

2. Operadores aritméticos:

```javascript
var soma = 2 + 3; // Soma
var subtracao = 5 - 2; // Subtração
var multiplicacao = 2 * 3; // Multiplicação
var divisao = 10 / 2; // Divisão
var modulo = 10 % 3; // Resto da divisão
```

3. Operadores de comparação:

```javascript
var a = 5;
var b = 3;

console.log(a > b); // Maior que
console.log(a < b); // Menor que
console.log(a >= b); // Maior ou igual a
console.log(a <= b); // Menor ou igual a
console.log(a === b); // Igualdade estrita
console.log(a !== b); // Diferente
```

Essas são apenas algumas instruções e expressões básicas em JavaScript. O JavaScript é uma linguagem poderosa e versátil, com muitos recursos adicionais. Espero que isso ajude você a começar!

### como espalhar de forma dinâmica propriedades dentro de um objeto usando o operador spread(`...`)

Suponha que você tenha um objeto chamado `obj1` com algumas propriedades:

```javascript
const obj1 = { 
  prop1: "valor1",
  prop2: "valor2"
};
```

Agora, digamos que você queira criar um novo objeto `obj2`, copiando todas as propriedades de `obj1` e adicionando ou substituindo algumas propriedades adicionais.

Você pode fazer isso usando o operador spread da seguinte maneira:

```javascript
const obj2 = {
  ...obj1, // Espalha as propriedades de obj1
  prop3: "valor3", // Adiciona a nova propriedade prop3
  prop2: "novo valor2" // Substitui o valor da propriedade prop2
};
```

Nesse exemplo, o operador spread `...obj1` espalha todas as propriedades do objeto `obj1` dentro do novo objeto `obj2`. Em seguida, adicionamos a propriedade `prop3` com o valor "valor3" e substituímos o valor da propriedade `prop2` por "novo valor2".

Agora, se você imprimir o objeto `obj2`, verá que ele contém as propriedades de `obj1` mais as propriedades adicionais:

```javascript
console.log(obj2);
// Output:
// {
//   prop1: "valor1",
//   prop2: "novo valor2",
//   prop3: "valor3"
// }
```

Dessa forma, você pode espalhar de forma dinâmica as propriedades de um objeto existente em um novo objeto, adicionando ou substituindo propriedades conforme necessário. O operador spread (`...`) é uma funcionalidade útil e poderosa em JavaScript para manipulação de objetos e arrays.

### Conceito de Imutabilidade em Programação

Imutabilidade é um conceito na programação que se refere à característica de um valor ou objeto ser incapaz de ser alterado após ter sido criado. Em outras palavras, um valor imutável não pode ser modificado. Em vez disso, qualquer operação que "altere" o valor cria um novo valor com as modificações desejadas, mantendo o valor original inalterado.

A imutabilidade é uma propriedade importante em muitas linguagens de programação, incluindo JavaScript, por vários motivos:

1. Evita efeitos colaterais indesejados: Ao garantir que um valor não possa ser alterado após ser criado, você reduz o risco de introduzir comportamentos inesperados no código. Isso ocorre porque não há como uma parte do programa modificar acidentalmente ou intencionalmente um valor imutável.

2. Facilita a programação concorrente: Em ambientes concorrentes, onde várias partes do código podem tentar modificar o mesmo valor ao mesmo tempo, a imutabilidade ajuda a evitar problemas de sincronização e condições de corrida, pois não há necessidade de se preocupar com a modificação simultânea de valores compartilhados.

3. Permite otimizações: A imutabilidade permite que o compilador ou interpretador realize otimizações, como armazenar em cache valores imutáveis e evitar cálculos repetidos. Isso pode melhorar o desempenho do código.

4. Simplifica o raciocínio e o depuramento: Ao trabalhar com valores imutáveis, é mais fácil raciocinar sobre o comportamento do código, pois você não precisa se preocupar com alterações inesperadas nos valores. Além disso, a depuração de código com imutabilidade é geralmente mais simples, pois você sabe que um valor não será modificado após sua criação.

Em linguagens como JavaScript, nem todos os valores são imutáveis por padrão. Por exemplo, os objetos em JavaScript são mutáveis, o que significa que suas propriedades podem ser alteradas. No entanto, a imutabilidade pode ser alcançada usando técnicas como o uso de constantes (`const`), clonagem de objetos ou o uso de bibliotecas específicas que oferecem suporte à imutabilidade.

Em resumo, a imutabilidade é o conceito de não modificar valores ou objetos após a criação. Ela traz benefícios como evitar efeitos colaterais indesejados, facilitar a programação concorrente, permitir otimizações e simplificar o raciocínio e a depuração do código.

---

### Códigos Usados Neste Exercício

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./style.css" />
  <title>Exercício 36</title>
</head>
<body>
  <div class="carousel">
    <div data-js="carousel__item" class="carousel__item carousel__item--visible">
      <img src="./img/1.jpg" />
    </div>

    <div data-js="carousel__item" class="carousel__item">
      <img src="./img/2.jpg" />
    </div>
    
    <div data-js="carousel__item" class="carousel__item">
      <img src="./img/3.jpg" />
    </div>

    <div class="carousel__actions">
      <button data-js="carousel__button--prev" aria-label="Slide anterior">
        <
      </button>

      <button data-js="carousel__button--next" aria-label="Próximo slide">
        >
      </button>
    </div>
  </div>

  <script src="./app.js"></script>
</body>
</html>
```

CSS:

```css
.carousel {
  overflow: hidden;
  max-width: 600px;
  position: relative;
}

.carousel .carousel__item,
.carousel .carousel__item--hidden {
  display: none;
}

.carousel .carousel__item img {
  width: 100%;
  max-width: 600px;
  height: auto;
}

.carousel .carousel__item--visible {
  display: block;
  animation: fadeVisibility 0.5s;
}

.carousel .carousel__actions {
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.carousel .carousel__actions button {
  border-radius: 50px;
  border: 0;
  font-weight: bold;
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: #FFF;
  background-color: #242424;
}

.carousel .carousel__actions button[data-js="carousel__button--prev"] {
  margin-left: 20px;
}

.carousel .carousel__actions button[data-js="carousel__button--next"] {
  margin-right: 20px;
}

@keyframes fadeVisibility {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: opacity linear;
  }
}
```

Javascript:

```javascript
/*
  01 
  
  - Atualmente, a invocação da função abaixo está retornando 
    "50,100,50undefinedundefined";
  - Descubra o que o código abaixo está fazendo e faça a invocação da função 
    retornar 200;
  - Não use a sintaxe item[index].
*/

const numbers = [50, 100, 50]

const sum = (x, y, z) => x + y + z

console.log(sum(...numbers))

/*
  02

  - Declare uma const que armazena seu primeiro nome com todas as letras 
    minúsculas;
  - Utilizando (também) o spread operator, exiba no console o seu nome com 
    apenas a primeira letra maiúscula.
*/
const myName = 'pedro'
const capitalizedName = [myName[0].toUpperCase(), ...myName.slice(1)].join('')
console.log(capitalizedName)

/*
  03

  - No objeto abaixo, verifique se o valor da const randomNumber é maior que 50;
    - Se for, o objeto deve receber uma propriedade c, que armazena 3;
    - Se não for, o objeto deve receber uma propriedade d, que armazena 4;
  - Não utilize as estruturas condicionais if ou switch.
*/

const randomNumber = Math.round(Math.random() * 100)

const obj = {
  a: 1,
  b: 2,
  ...(randomNumber > 50 ? { c: 3 } : { d: 4 })
}

console.log(randomNumber, obj)

/*
  04

  - Descubra o que o código abaixo está fazendo e refatore-o para que o objeto 
    criado permaneça intacto.
*/

const third = obj => ({ ...obj, d: 3 })
const second = obj => third(obj)
const first = obj => second(obj)

const object = { k: 't' }
const object2 = first(object)

console.log(object, object2)

/*
  05

  - A partir do código abaixo, crie um objeto em que as propriedades são os 
    valores das propriedades 'date' e os valores das propriedades são os 
    valores de 'value'.

  O objeto criado deve ser assim:

  {
    '3242348-9842340234': 6,
    '99e89-499958': 31,
    '8596646656666r488': 17
  }
*/

const timestamps = [
  {
    date: '3242348-9842340234',
    value: 6
  },
  {
    date: '99e89-499958',
    value: 31
  },
  {
    date: '8596646656666r488',
    value: 17
  }
]

const newTimeStamps = timestamps.reduce((acc, { date, value }) => {
  acc[date] = value
  return acc
}, {})

console.log(timestamps, newTimeStamps)

/*
  06

  - Já implementamos os métodos some, map e filter, do zero;
  - Neste exercício, seu desafio será criar, do zero, o método forEach;
  - Implemente uma função "forEach" que possui a mesma funcionalidade do método 
    forEach original;
  - Você não poderá utilizar o método forEach original, embutido na linguagem;
  - A invocação da função "forEach" deve receber um array como 1º argumento e a 
    declaração de uma função como 2º argumento;
  - Faça os testes usando a let e const abaixo;
    - Após a execução do forEach, accumulator deve armazenar 236;
    - A cada execução do forEach, a mensagem '"X" é o Xº item do array 
      [XX, XX, XX, XX]' deve ser exibida no console. Os "X" são placeholders 
      que devem ser preenchidos com as informações corretas.
  
  Dica 1: o método forEach é usado para executar efeitos colaterais;
  Dica 2: o método forEach nunca retorna um valor.
*/

let accumulator = 0
const oddNumbers = [51, 97, 65, 23]

const forEach = (array = [], callback) => {
  for (let index = 0; index < array.length; index++) {
    const item = array[index]
    callback(item, index, array)
  }
}

const logMessage = (item, index, array) => {
  const message = `"${item}" é o ${index + 1}º item do array [${array.join(
    ', '
  )}]`
  console.log(message)
}

const sumArrayItems = item => (accumulator += item)

forEach(oddNumbers, logMessage)
forEach(oddNumbers, sumArrayItems)
console.log(accumulator)

/*
  07

  - Implemente um carousel. O desafio é que o resultado final seja este: 
    https://youtu.be/ydn_bSwvlPU
  - As imagens, marcação HTML e estilos CSS estão feitos. Aqui no app.js você 
    fará os passos abaixo;
  - Quando o botão de "próximo slide" for clicado:
    1 Remova, de todos os slides, as classes que os deixam visíveis;
    2 Adicione, em todos os slides, as classes que os deixam invisíveis;
    3 Adicione, apenas no slide que deve ser exibido, a classe que deixa um 
      slide visível;
      3.1 Para saber qual slide deve ficar visível, quando o arquivo .js for 
        carregado, inicialize uma variável com 0. Ela representa o index do 
        slide exibido atualmente;
      3.2 Antes de adicionar e remover as classes dos slides, verifique o index 
        do slide exibido atualmente;
          3.3 Se ele corresponder ao index do último slide (3º), o 1º slide deve 
            ser exibido;
          3.4 Se ele não corresponder ao index do último slide, o próximo slide 
            deve ser exibido.
  - Quando o botão de "slide anterior" for clicado:
    1 Execute os passos 1, 2 e 3 acima;
    2 No passo 3.3, se o slide exibido atualmente corresponder ao index do 1º 
      slide, o último slide (3º) deve ser exibido;
    3 No passo 3.4, se o slide exibido atualmente não corresponder ao index do 
      1º slide, o slide anterior deve ser exibido.
*/
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const slides = document.querySelectorAll('[data-js="carousel__item"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

const carouselLength = slides.length
const classVisible = 'carousel__item--visible'
const classInvisible = 'carousel__item--hidden'
let currentSlideIndex = 0


const hiddenAllSlides = (visible, invisible) => {
  slides.forEach(slide => {
    slide.classList.remove(visible)
    slide.classList.add(invisible)
  })
}

const setSlide = event => {
  const fromButton = event.target
  if (fromButton === nextButton) {
    currentSlideIndex === carouselLength - 1 ? (currentSlideIndex = 0) : currentSlideIndex++
    slides[currentSlideIndex].classList.add(classVisible)
  } else {
    currentSlideIndex <= 0 ? (currentSlideIndex = carouselLength - 1) : currentSlideIndex--
    slides[currentSlideIndex].classList.add(classVisible)
  }
}

nextButton.addEventListener('click', event => {
  hiddenAllSlides(classVisible, classInvisible)
  setSlide(event)
})

prevButton.addEventListener('click', event => {
  hiddenAllSlides(classVisible, classInvisible)
  setSlide(event)
})
```
