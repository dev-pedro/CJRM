<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 01 da etapa 08 - Aula 02-01

### Resumo

Códigos utilizados nesta aula.

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 21</title>
</head>
<body>
  <h1>Exercício 21</h1>
  
  <script src="./app.js"></script>
</body>
</html>

```

Javascript:

```javascript
/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const getOddNumbers = number => number % 2 === 1
const oddNumbers = randomNumbers.filter(getOddNumbers)
console.log(oddNumbers)
/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]



const countNumbersLessThan501 = (accumulator, crazyNumber) =>
  crazyNumber < 501 ? ++accumulator : accumulator

const numbersDown501 = crazyNumbers.reduce(countNumbersLessThan501, 0)
console.log(numbersDown501)

/*
  03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
*/

const numbers = [5, 7, 3]
const squareNubers = numbers.map(number => number ** 2)
console.log(squareNubers)

/*
  04

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.9 },
  { name: 'Death Stranding', price: 149.99 }
]

const productList = cart.reduce(
  (accumulator, { name }) => `${accumulator}- ${name}\n`,
  ''
)
console.log(productList)

/*
  - Nome 1
  - Nome 2
  - Nome 3
*/

/*
  05

  - Utilizando o array abaixo, gere um novo array com apenas os filmes lançados 
    antes do ano 2000;
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const tarantinoMoviesBefore2000 = tarantinoMovies.filter(
  ({ release }) => release < 2000
)
console.log(tarantinoMoviesBefore2000)

/*
  06

  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: "The Handmaid's Tale", releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]
const tvShowsNames = tvShows.map(({ name }) => name)
console.log(tvShowsNames)

/*
  07

  - Observe os loops da sua versão do quiz e considere se, baseado no que foi  
    visto nessa aula, você deve refatorá-los.
*/

```
