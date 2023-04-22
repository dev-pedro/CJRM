<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 02 da etapa 10 - Aula 01-01

### Resumo

### Códigos usados no exercício

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>Exercício 26</title>
</head>
<body>
  <div class="clock-container"></div>

  <script src="./app.js"></script>
</body>
</html>
```

CSS:

```css
body {
  background-color: #212121;
}

.clock-container {
  font-size: 4em;
  text-align: center;
  margin: 200px auto 0;
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
}

.clock-container span {
  padding: 20px;
  background: #006CE6;
  border-radius: 10px;
}
```

Javascript:

```javascript
/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "dd/mm/aaaa". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/
const present = new Date()

const formatTimeUnit = unit => (String(unit).length === 1 ? `0${unit}` : unit)

const formatDate = (date = new Date()) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${formatTimeUnit(day)}/${formatTimeUnit(month)}/${year}`
  // return date.toLocaleDateString()
}
console.log(formatDate(present))
/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/
const dateFormat = (date = new Date()) => {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  const dateFormated = new Intl.DateTimeFormat('pt-BR', options).format(date)

  const hour = formatTimeUnit(date.getHours())
  const minute = formatTimeUnit(date.getMinutes())
  return `${hour}:${minute} - ${dateFormated}`
}

console.log(dateFormat(new Date()))

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }
const { id, isVerified } = user
console.log(id, isVerified)

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const { name: nameA } = robotA
const { name: nameB } = robotB

console.log(nameA, nameB)

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const abc = { a, b, c }

console.log(abc)

/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => {
  console.log(value)
}

const updateSomething = ({ target, property, willChange }) => {

  if (willChange === 'valor indesejado') {
    willChange = 'valor desejado'
  }

  useDataSomewhereElse({ target, property, willChange })
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const getClockHTML = (hours, minutes, seconds) => {
  return `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
  `
}

const updateClock = () => {
  const present = new Date()
  const hours = formatTimeUnit(present.getHours())
  const minutes = formatTimeUnit(present.getMinutes())
  const seconds = formatTimeUnit(present.getSeconds())

  clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)
}

setInterval(updateClock, 1000)
```
