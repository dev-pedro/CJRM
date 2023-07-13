<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 01 da etapa 15 - Aula 02-01 até Aula 02-06

### Resumo

### Rest Parameters

Em JavaScript, os rest parameters permitem que você defina uma função com um número variável de argumentos. O rest parameter é denotado por três pontos antes do nome do parâmetro da função e permite que você passe um número arbitrário de argumentos para a função como uma matriz.

Aqui está um exemplo de como usar o rest parameter em JavaScript:

```javascript
function somar(...numeros) {
  let resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }
  return resultado;
}

console.log(somar(1, 2, 3, 4)); // Output: 10
console.log(somar(5, 10, 15)); // Output: 30
```

No exemplo acima, a função `somar` recebe um número variável de argumentos usando o rest parameter `...numeros`. Dentro da função, os argumentos são tratados como uma matriz chamada `numeros`. A função, então, itera sobre essa matriz e calcula a soma de todos os números.

Ao chamar a função `somar`, você pode passar quantos argumentos quiser, separados por vírgulas. O rest parameter irá agrupar todos esses argumentos em uma única matriz chamada `numeros`. No exemplo acima, `somar(1, 2, 3, 4)` irá resultar em uma chamada para `somar` com a matriz `[1, 2, 3, 4]`.

Os rest parameters são úteis quando você não sabe quantos argumentos serão passados ​​para uma função com antecedência ou quando você deseja lidar com um número variável de argumentos de forma flexível.

Você pode passar argumentos para uma função que usa rest parameters usando o spread operator. O spread operator permite expandir uma matriz ou um objeto iterável em elementos individuais.

Aqui está um exemplo de como usar o spread operator para passar argumentos para uma função que utiliza rest parameters:

```javascript
function concatenar(...palavras) {
  return palavras.join(' ');
}

const arrayPalavras = ['Olá', 'como', 'vai?'];
console.log(concatenar(...arrayPalavras)); // Output: Olá como vai?

const stringPalavras = 'Eu estou bem';
console.log(concatenar(...stringPalavras)); // Output: E u   e s t o u   b e m
```

No exemplo acima, a função `concatenar` recebe um número variável de argumentos usando o rest parameter `...palavras`. Dentro da função, os argumentos são tratados como uma matriz chamada `palavras`. A função usa o método `join` para concatenar as palavras em uma única string, separadas por espaço.

Para passar os argumentos para a função, usamos o spread operator `...` para expandir a matriz `arrayPalavras` em elementos individuais ao chamar a função `concatenar`. Isso permite que cada elemento da matriz seja tratado como um argumento separado. Da mesma forma, podemos usar o spread operator para expandir uma string em seus caracteres individuais.

Observe que o spread operator pode ser usado com qualquer iterável, como matrizes, strings ou objetos semelhantes a matrizes. Ele permite que você passe os elementos individuais como argumentos para uma função que utiliza rest parameters.

### Rest Parameter Com Outros Parâmetros na Mesma Função

É possível combinar o rest parameter com outros parâmetros em uma mesma função. O rest parameter pode ser colocado como último parâmetro na lista de parâmetros da função, permitindo que os parâmetros anteriores sejam passados normalmente e o rest parameter capture um número variável de argumentos restantes.

Aqui está um exemplo de como combinar o rest parameter com outros parâmetros em uma função:

```javascript
function calcularMedia(peso, ...notas) {
  let soma = peso;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / (1 + notas.length);
}

console.log(calcularMedia(2, 7, 8, 9)); // Output: 7.666666666666667
```

No exemplo acima, a função `calcularMedia` possui dois parâmetros: `peso` e `...notas`. O parâmetro `peso` é um parâmetro regular que espera um valor numérico. O rest parameter `...notas` permite que você passe um número variável de argumentos para a função, os quais serão tratados como uma matriz chamada `notas`.

Dentro da função, o valor do parâmetro `peso` é somado à soma das notas. O rest parameter `notas` captura o restante dos argumentos passados para a função e itera sobre eles para calcular a soma total. No final, a média é calculada dividindo a soma pelo número de notas mais um (para incluir o peso).

No exemplo acima, chamamos a função `calcularMedia` com o peso 2 e as notas 7, 8 e 9. O rest parameter `...notas` captura as notas 7, 8 e 9 como uma matriz, e a função calcula a média dessas notas com base no peso. O resultado é aproximadamente 7.666666666666667.

Portanto, você pode combinar o rest parameter com outros parâmetros em uma mesma função, permitindo maior flexibilidade na passagem de argumentos.

### Obs: Quando usar Rest Parameters ?

<mark>Quando a função for variádica.</mark>

Uma função variádica é uma função que pode receber um número variável de argumentos. Em outras palavras, é uma função que aceita um número indefinido de parâmetros.

Em JavaScript, o rest parameter (`...`) é frequentemente usado para implementar funções variádicas. O rest parameter permite que você capture um número arbitrário de argumentos passados para a função como uma matriz.

Aqui está um exemplo de como implementar uma função variádica em JavaScript:

```javascript
function somar(...numeros) {
  let resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }
  return resultado;
}

console.log(somar(1, 2, 3)); // Output: 6
console.log(somar(4, 5, 6, 7)); // Output: 22
```

No exemplo acima, a função `somar` é uma função variádica que recebe um número variável de argumentos usando o rest parameter `...numeros`. Dentro da função, os argumentos são tratados como uma matriz chamada `numeros`. A função itera sobre essa matriz e calcula a soma de todos os números.

Ao chamar a função `somar`, você pode passar quantos argumentos quiser, separados por vírgulas. O rest parameter `...numeros` irá agrupar todos esses argumentos em uma única matriz chamada `numeros`. No exemplo acima, `somar(1, 2, 3)` irá resultar em uma chamada para `somar` com a matriz `[1, 2, 3]`.

Dessa forma, a função `somar` pode lidar com um número variável de argumentos e retornar a soma correta, independentemente de quantos argumentos foram passados.

As funções variádicas são úteis quando você precisa criar funções flexíveis que possam lidar com diferentes quantidades de argumentos.

# Códigos Usados Nos Exercícios

HTML:

```javascript
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>Exercício 39</title>
  </head>
  <body>
    <div data-js="accordion" class="accordion">
      <div class="accordion-item">
        <button data-accordion-header="1" data-js="accordion-header" class="accordion-header">
          <strong data-accordion-header="1"
            >Qual é o conteúdo do treinamento?</strong
          >
          <i data-accordion-header="1" class="fas fa-angle-down"></i>
        </button>

        <div data-accordion-body="1" class="accordion-body">
          O treinamento foi desenhado para levar você do zero até a fluência em
          JavaScript - isto é, construir aplicações web (front-end) com
          JavaScript puro, através de 15 etapas. Você pode ver todas elas
          <a
            href="https://drive.google.com/file/d/1GCG6zZzu-nQIhdtMLNUKnSoQB8iy8uC3/view?usp=sharing"
            target="_blank"
            >aqui</a
          >.
        </div>
      </div>

      <div class="accordion-item">
        <button data-accordion-header="2" data-js="accordion-header" class="accordion-header">
          <strong data-accordion-header="2"
            >Quais são os requisitos técnicos para entrar?</strong
          >
          <i data-accordion-header="2" class="fas fa-angle-down"></i>
        </button>

        <div data-accordion-body="2" class="accordion-body">
          Para entrar no CJRM, você precisa saber apenas o básico de HTML e CSS.
        </div>
      </div>

      <div class="accordion-item">
        <button data-accordion-header="3" data-js="accordion-header" class="accordion-header">
          <strong data-accordion-header="3"
            >Tenho uma dúvida, como posso falar com você?</strong
          >
          <i data-accordion-header="3" class="fas fa-angle-down"></i>
        </button>

        <div data-accordion-body="3" class="accordion-body">
          Se você assistiu o vídeo acima e ainda está com alguma dúvida, envie
          um e-mail para oi@rogermelo.com.br e eu irei atender você.
        </div>
      </div>
    </div>

    <div class="intro">
    <h1 class="fixed-text">Eu</h1>
    <h1 data-js="typing" class="typing"></h1>
  </div>

    <script src="./app.js"></script>
  </body>
</html>
```

CSS:

```css
body {
  font-family: sans-serif;
}

.intro {
  display: flex;
}

.typing {
  position: relative;
  margin-left: 10px;
}

.typing::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 95%;
  border-right: 2px solid black;
  right: -5px;
  animation: blink 1s infinite ease;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.accordion {
  width: 450px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 4px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  width: 100%;
  background: #1f8dd6;
  border: none;
  outline: none;
  border-bottom: 1px solid #54a0ff;
  color: #f3f3f3;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.accordion-header.active {
  background-color: #1070b1;
}

.accordion-header i {
  transition: all 0.3s ease-in-out;
}

.accordion-header.active i {
  transform: rotate(180deg);
}

.accordion-body {
  padding: 0 1rem;
  background-color: #f3f3f3;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.accordion-body.active {
  max-height: 10rem;
  padding: 1rem;
}
```

Javascript:

```javascript
/*
  01

  - O código abaixo foi usado em um exercício passado...
  - O problema é que é muito conveniente que o array tenha 3 números e a função
    também calcule 3 números;
    - Ou seja, se um número for adicionado ou removido do array, o código
      quebra;
  - O seu desafio neste exercício será deixar essa função flexível a ponto de 
    somar todos os números do array que ela recebe como argumento, independente
    de quantos números o array tenha;
    - Para conseguir fazer isso, você terá que pesquisar por uma feature 
      chamada "Rest parameters" (sim, pesquisar e entender essa feature é parte
      deste desafio);
    - Além de testar a nova função com o array "numbers", teste-a com um outro
      array que contenha 2 números e com um outro que contenha 4 números.
*/

const numbers = [50, 100, 50]
const arrFewNumbers = [20, 20]
const arrManyNumbers = [10, 10, 10, 10, 10]

const sum = (x, y, z) => x + y + z

const sumFunc = (...params) => params.reduce((acc, item) => acc + item, 0)

// console.log(sum(...numbers))
// console.log(sumFunc(...arrFewNumbers))
// console.log(sumFunc(...arrManyNumbers))

/*
  02

  - Descomente a div com a class "accordion", no index.html;
  - Quando um dos 3 itens do accordion for clicado exiba, abaixo do item, 
    o texto correspondente. Este é o resultado final:
    https://vimeo.com/752350703/9b01da98d3
  
  Leia a dica abaixo apenas se achar necessário.

  - Para que o item do accordion seja "ativado" ao clicar, faça um toogle 
    utilizando a classe "active".
*/
/* 
//Pedro' code
const buttomAccordion = document.querySelector('.accordion')

const setAttribute = event => {
  const eventNode = event.target.parentNode
  const verifyElementClick = Array.from(eventNode.classList).includes(
    'accordion-item'
  )

  const setChildrenElement = e => {
    e.children[1].classList.toggle('active')
    e.children[0].classList.toggle('active')
  }

  const setNextElement = e => {
    e.nextElementSibling.classList.toggle('active')
    e.classList.toggle('active')
  }

  verifyElementClick ? setChildrenElement(eventNode) : setNextElement(eventNode)
}

buttomAccordion.addEventListener('click', event => {
  setAttribute(event)
})

*/

//Roger' code
const accordion = document.querySelector('[data-js="accordion"]')

const closeAccordionItem = accordionHeaderToBeClosed => {
  const accordionHeaderId = accordionHeaderToBeClosed.dataset.accordionHeader
  const accordionBodyToBeClosed = document.querySelector(
    `[data-accordion-body="${accordionHeaderId}"]`
  )

  accordionHeaderToBeClosed.classList.remove('active')
  accordionBodyToBeClosed.classList.remove('active')
}

const handleAccordionClick = e => {
  const accordionHeaderId = e.target.dataset.accordionHeader
  const accordionItemToBeOpened = document.querySelector(
    `[data-accordion-body="${accordionHeaderId}"]`
  )
  const clickedAccordionHeader = document.querySelector(
    `[data-accordion-header="${accordionHeaderId}"]`
  )

  const accordionHeaderToBeClosed = Array.from(
    document.querySelectorAll('[data-js="accordion-header"]')
  )
    .filter(accordionHeader => accordionHeader !== clickedAccordionHeader)
    .find(accordionHeader => accordionHeader.classList.contains('active'))

  if (!clickedAccordionHeader) {
    return
  }

  if (accordionHeaderToBeClosed) {
    closeAccordionItem(accordionHeaderToBeClosed)
  }

  clickedAccordionHeader.classList.toggle('active')
  accordionItemToBeOpened.classList.toggle('active')
}

accordion.addEventListener('click', handleAccordionClick)

/*
  03

  - Descomente as duas const abaixo e implemente a função "carMaker";
  - A função carMaker deve: 
    - Retornar um novo objeto; 
      - Esse novo objeto deve conter as propriedades "name" e "color" 
        (que foram inseridas como argumentos);
    - Setar "volkswagenProto" como prototype do objeto que ela retorna;
  - Não insira o operador "new" antes da invocação de carMaker. carMaker deve
    ser uma factory function;
  - Após implementar a função: 
    - Teste se "amarok" e "jetta" possuem o mesmo prototype;
    - Teste o método logCarInfo nos dois objetos.
*/

const volkswagenProto = {
  logCarInfo () {
    console.log(`Volkswagen ${this.name}, cor ${this.color}.`)
  }
}

const toyotaProto = {
  logCarInfo () {
    console.log(`Toyota ${this.name}, cor ${this.color}.`)
  }
}

const carMaker = ({ name, color }, carProto) => {
  const car = Object.create(carProto)
  car.name = name
  car.color = color
  return car
}

const amarok = carMaker({ name: 'Amarok', color: 'preta' }, volkswagenProto)
const jetta = carMaker({ name: 'Jetta', color: 'prata' }, volkswagenProto)
const corolla = carMaker({ name: 'Corolla', color: 'azul' }, toyotaProto)

// amarok.logCarInfo()
// jetta.logCarInfo()
// corolla.logCarInfo()
/*
  04

  - Descomente o console.log abaixo e implemente a função 
    "getIndexesOfCharacter";
  - Essa função:
    - Recebe uma string e um caractere como parâmetros;
    - Retorna um array com os indexes das ocorrências do caractere na string;
  - Ao implementar a função, o console.log abaixo deve exibir um array 
    [64, 180];
  - Para se assegurar que a função funciona com qualquer caractere, teste ela 
    modificando o caractere que ela recebe como segundo argumento.
*/

const aString =
  'O Curso de JavaScript Roger Melo funciona com turmas fechadas, abertas poucas vezes e é focado em quem ainda não é fluente em JS. Ou seja, quem não consegue construir aplicações web com JavaScript puro.'

const getIndexesOfCharacter = (string = '', c) => {
  const arrFromString = [...string.toUpperCase()]
  const charUpper = c.toUpperCase()

  const getIndexCharInString = (acc, item, index) => {
    item === charUpper ? acc.push(index) : ''
    return acc
  }

  return arrFromString.reduce(getIndexCharInString, [])
}
// console.log(getIndexesOfCharacter(aString, 'o'))

/*
  05

  - Descomente a div com a class "intro", no index.html;
  - O desafio neste exercício é implementar um "efeito digitação", como o deste
    exemplo: https://vimeo.com/752356051/e402d40a7b

  Abaixo tem o passo a passo de uma das formas de fazer. Siga-o, caso tenha
  dificuldades.
  - Declare um array "messages". Cada item desse array é uma string que será 
    "digitada" na tela. Exemplos: 'sou fluente em JS', 'construo aplicações web
    com JS puro';
  - Abaixo do array, declare as seguintes lets:
    - messageIndex, iniciando em 0. Essa let é responsável por armazenar qual é
      o index do item atual do array messages;
    - characterIndex, iniciando em 0. Essa let é responsável por armazenar qual
      é o index do caractere atual do item do array messages;
    - currentMessage, iniciando com string vazia. Essa let é responsável por 
      armazenar o item atual do array;
    - currentCharacters, iniciando com string vazia. Essa let é responsável por
      armazenar as letras do item do array que serão inseridas na tela;
  - Abaixo das lets, declare uma função "type";
  - Abaixo da função, invoque um setInterval que invoca a função type a cada 
    200 milisegundos;
  - Dentro da função "type":
    - Declare um if que verifica se messageIndex é igual a quantidade total de
      itens do array messages. Se essa condição for verdadeira, messageIndex 
      deve receber 0;
    - Abaixo do if, faça:
      - currentMessage receber o item do array messages que está no index que 
        messageIndex armazena;
      - currentCharacters receber a string que deve ser exibida na execução 
        atual da função (você pode invocar o slice() na currentMessage para 
        fazer isso);
      - characterIndex receber o valor que ela já tem + 1;
      - O h1 com o data-js "typing" receber currentCharacters;
    - Após inserir as atribuições acima, declare um if que verifica se 
      currentCharacters tem a mesma quantidade de caracteres de currentMessage.
      Se essa condição for verdadeira, faça messageIndex receber o valor que 
      ela já tem + 1 e faça characterIndex receber 0.
*/
const typing = document.querySelector('[data-js="typing"]')

const messages = ['sou fluente em JS', 'construo aplicações web com JS puro']

let messageIndex = 0
let characterIndex = 0
let currentMessage = ''
let currentCharacters = ''

const type = () => {
  const shouldTypeFirstMessage = messageIndex === messages.length
  if (shouldTypeFirstMessage) {
    messageIndex = 0
  }

  currentMessage = messages[messageIndex]
  currentCharacters = currentMessage.slice(0, characterIndex++)

  const shouldChangeMessageToBeTyped = characterIndex === currentMessage.length
  if (shouldChangeMessageToBeTyped) {
    const reset = () => {
      messageIndex++
      characterIndex = 0
    }
    setTimeout(reset, 500)
  }

  typing.textContent = currentCharacters
}

// setInterval(type, 200)

/*
  06

  - Converta o array "wrongDataFormat" para o objeto do comentário abaixo.
*/

const wrongDataFormat = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P'
]

const obj = wrongDataFormat.reduce((acc, item) => {
  const [color, size] = item.split('-')

  acc[color] = acc[color] || {}
  acc[color][size] = acc[color][size] || 0
  acc[color][size]++

  return acc
}, {})
console.log(obj)
/*
  {
    preto: {
      PP: 1,
      M: 1,
      G: 1,
      GG: 2
    },
    branco: {
      PP: 1,
      G: 1
    },
    vermelho: {
      M: 1
    },
    azul: {
      XG: 3,
      P: 1
    }
  }
*/
```
