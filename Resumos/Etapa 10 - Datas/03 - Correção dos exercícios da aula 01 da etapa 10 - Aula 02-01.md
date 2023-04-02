<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 01 da etapa 10 - Aula 02-01

### Resumo

#### Código utilizados nessa aula

Javascript:

```javascript
/*
  01

  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

console.log(months.indexOf('Fevereiro'))

/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/
const present = new Date()
console.log(present)

/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/

console.log(present.getFullYear())

/*
  04

  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/

const past = new Date('Mar 22 2000 9:45:00')
console.log(past)

/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/

console.log(past.getHours())

/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/

const future = new Date('apr 04 2036 10:45:00')
console.log(future)

/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/
const timeBetweenFutureOnPast = future.getTime() - present.getTime()
const differenceIndays = Math.round( timeBetweenFutureOnPast / 1000 / 60 / 60 /24)

console.log(differenceIndays)

/*
  08
  
  Assim como a 1ª aplicação que implementamos (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
```
