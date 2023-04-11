<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 01 da etapa 11 - Aula 02-02

### Resumo

### Código usado nesses exercícios

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 27</title>
</head>
<body>
  <h1>Exercício 27</h1>
  
  <script src="./app.js"></script>
</body>
</html>
```

Javascript:

```javascript
/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/

console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')

setInterval(() => {
  console.log('Esta função é assíncrona')
}, 2000)

console.log('Linha 5')
console.log('Linha 6')
console.log('Linha 7')
console.log('Linha 8')

/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/

function logGreeting (name) {
  console.log(`olá, ${name}`)
}

const x = callback => {
  callback('Pedro')
}

x(logGreeting)

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/

const numbers = [3, 4, 10, 20]
const getLessThanFive = num => num < 5
const lesserThanFive = numbers.filter(getLessThanFive)

console.log(lesserThanFive)

/*
  04

  - Refatore o código abaixo.
*/

const prices = [12, 19, 7, 209]
const getTotalPrice = (acc, price) => acc + price
const totalPrice = prices.reduce(getTotalPrice, 0)

// let totalPrice = 0
// for (let i = 0; i < prices.length; i++) {
//   totalPrice += prices[i]
// }

//prices.forEach(price => (totalPrice += price))

console.log(`Preço total: ${totalPrice}`)

/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
  - Não insira `car['color'] = azul`.
*/

let car = { color: 'amarelo' }

car = { color: 'preto' }

let secondCar = car
secondCar.color = 'azul'

console.log(car)

/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

const threeArg = (arg1, arg2, arg3) => {
  const isSomedArg = [arg1, arg2, arg3].includes(undefined)
  return isSomedArg
    ? 'A função deve ser invocada com 3 argumentos'
    : 'A função foi invocada com 3 argumentos'
}

console.log(threeArg('oi', 'Pedro', 'Henrique'))

/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;

    - Retornar a frase: "Já há 'X' livros na caixa";

    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";

    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";

    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0
}

const getPluralOrSingular = (quantity, singular, plural) =>
  quantity ? singular : plural

const getAvaliableSpacesMessage = (spaces, booksIn) => {
  const avaliableSpaces = spaces - booksIn
  const fitPluralOrSingular = getPluralOrSingular(
    avaliableSpaces,
    'cabe',
    'cabem'
  )
  const bookPluralOrSingular = getPluralOrSingular(
    avaliableSpaces,
    'livro',
    'livros'
  )
  return `Só ${fitPluralOrSingular} mais ${avaliableSpaces} ${bookPluralOrSingular} na caixa.`
}

booksBox.addBook = (numberOfBooks = 0) => {
  const { booksIn, spaces } = booksBox
  const boxSpaceAreNotEnough = booksIn + numberOfBooks > spaces
  const isBoxFilled = booksIn === spaces

  if (isBoxFilled) {
    return 'A caixa já está cheia.'
  }

  if (boxSpaceAreNotEnough) {
    return getAvaliableSpacesMessage(spaces, booksIn)
  }

  booksBox.booksIn += numberOfBooks

  const bookPluralOrSingular = getPluralOrSingular(booksBox.booksIn, 'livro', 'livros')
  return `Já há ${booksBox.booksIn} ${bookPluralOrSingular} na caixa.`
}

console.log(booksBox.addBook(1))
console.log(booksBox.addBook(7))
console.log(booksBox.addBook(4))

console.log(booksBox)
```
