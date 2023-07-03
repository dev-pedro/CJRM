<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 03 da etapa 14 - Aula 01-01 ate Aula 01-09

### Resumo

### Métodos `call` e `applay`

Os métodos `call()` e `apply()` são métodos disponíveis em todas as funções em JavaScript. Eles permitem que você invoque uma função definindo explicitamente o valor do `this` e passando argumentos para a função.

A principal diferença entre `call()` e `apply()` está na forma como você passa os argumentos para a função:

- O método `call()` recebe uma lista separada por vírgulas de argumentos passados para a função. A primeira argumento é o valor que será atribuído ao `this` dentro da função, e os argumentos subsequentes são passados diretamente para a função como argumentos individuais.

- O método `apply()` recebe dois argumentos: o primeiro é o valor que será atribuído ao `this` dentro da função, e o segundo é um array ou um objeto semelhante a um array que contém os argumentos passados para a função.

Aqui estão alguns exemplos que ilustram o uso desses métodos:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet.call(null, 'John');
greet.apply(null, ['Mary']);
```

No exemplo acima, a função `greet()` é chamada usando `call()` e `apply()` para definir o valor do `this` como `null` e passar o argumento `'John'` usando `call()` e o argumento `'Mary'` usando `apply()`.

Outro exemplo que mostra a diferença na forma de passar os argumentos:

```javascript
function sum(a, b) {
  console.log(a + b);
}

sum.call(null, 2, 3);
sum.apply(null, [4, 5]);
```

Nesse caso, a função `sum()` é chamada usando `call()` e `apply()` para definir o valor do `this` como `null` e passar os argumentos `2` e `3` usando `call()`, e os argumentos `4` e `5` usando `apply()`.

Em resumo, os métodos `call()` e `apply()` permitem que você chame uma função explicitamente definindo o valor do `this` e passando argumentos de forma flexível. A escolha entre eles depende de como você deseja passar os argumentos para a função.

Um exemplo que usa o método `call()` para chamar uma função e passar um objeto como argumento:

```javascript
function greet(person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const person = {
  name: 'John',
  age: 30
};

greet.call(null, person);
```

Nesse exemplo, a função `greet()` recebe um objeto `person` como argumento e imprime uma saudação com o nome e a idade da pessoa. Usando `call()`, podemos chamar a função `greet()` e passar o objeto `person` como argumento.

O primeiro argumento de `call()` é `null` porque não precisamos definir um valor específico para o `this` neste exemplo. No entanto, se a função `greet()` fizer referência ao `this` dentro de seu corpo, você pode substituir `null` pelo valor desejado.

Ao chamar `greet.call(null, person)`, o objeto `person` é passado como argumento para a função `greet()`, permitindo que ela acesse as propriedades `name` e `age` do objeto e imprima-as no console.

Espero que este exemplo tenha sido útil para entender como usar `call()` para passar um objeto como argumento para uma função.

### Closure e IIFE

A "closure" (clausura) e a "IIFE" (função imediatamente invocada) são conceitos relacionados na programação.

Uma closure é uma função juntamente com seu ambiente léxico, que permite que a função mantenha acesso às variáveis e parâmetros do seu escopo externo mesmo depois que esse escopo tenha sido destruído.

Uma IIFE, por sua vez, é uma função que é executada imediatamente após ser definida. Ela é envolvida por parênteses e é uma forma comum de criar um escopo isolado para evitar poluição do escopo global. Uma IIFE também pode ser usada para criar closures, capturando variáveis em seu escopo externo e preservando seu acesso dentro da função autoexecutada.

Esses conceitos são frequentemente utilizados em JavaScript para controlar o escopo de variáveis e evitar colisões de nomes em programas mais complexos.

Um exemplo de código:

```javascript
const state = (() => {
  let exchangeRate = {}

  return {
    getExchangeRate: () => exchangeRate,
    setExchangeRate: newExchangeRate => {
      if (!newExchangeRate.conversion_rates) {
        console.log('Não tem a propriedade "converter rates"')
        return
      }

      exchangeRate = newExchangeRate
      return exchangeRate
    }
  }
})()
```

O código acima é um exemplo de uma IIFE (Immediately Invoked Function Expression) que cria uma closure. Vamos analisá-lo passo a passo para entender melhor.

A IIFE é definida como uma função anônima envolta em parênteses `(function() {...})`. Isso permite que a função seja executada imediatamente após sua definição. No código fornecido, a IIFE envolve todo o bloco de código.

Dentro da IIFE, é criada uma variável chamada `exchangeRate` usando a palavra-chave `let`. Essa variável é um objeto vazio no início.

Em seguida, é definido um objeto que será retornado pela IIFE. Este objeto possui dois métodos: `getExchangeRate` e `setExchangeRate`.

O método `getExchangeRate` retorna o valor da variável `exchangeRate`. Como a função é uma closure, ela mantém acesso ao escopo externo da IIFE, o que significa que pode acessar e retornar a variável `exchangeRate`, mesmo depois que a IIFE terminou de ser executada.

O método `setExchangeRate` recebe um novo objeto `newExchangeRate` como argumento. Ele verifica se esse objeto tem a propriedade `conversion_rates` utilizando uma condicional `if`. Se essa propriedade não estiver presente, uma mensagem de erro é exibida no console e a função retorna.

Se a propriedade `conversion_rates` estiver presente no objeto `newExchangeRate`, a variável `exchangeRate` é atualizada com esse novo valor e, em seguida, é retornada a variável `exchangeRate`.

Dessa forma, a IIFE cria um escopo isolado onde a variável `exchangeRate` é privada e só pode ser acessada através dos métodos `getExchangeRate` e `setExchangeRate`. Essa é uma forma comum de encapsular dados e funcionalidades em JavaScript, usando closures e IIFEs para controlar o escopo e a visibilidade das variáveis.

****

### Códigos Usados Nos Exercícios

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"> -->
  <!-- <link href="./style.css" rel="stylesheet"> -->
  <title>Exercício 38</title>
</head>
<body>
  <!-- <div class="container">
    <table data-js="table" class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Jogo do Ano</th>
          <th scope="col">Desenvolvedora</th>
          <th scope="col">Data da premiação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>The Last of Us Part II</td>
          <td>Naughty Dog</td>
          <td>10 de dezembro de 2020</td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>Sekiro: Shadows Die Twice</td>
          <td>FromSoftware</td>
          <td>12 de dezembro de 2019</td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td>God of War</td>
          <td>SIE Santa Monica Studio</td>
          <td>6 de dezembro de 2018</td>
        </tr>

        <tr>
          <th scope="row">4</th>
          <td>The Legend of Zelda: Breath of the Wild</td>
          <td>Nintendo Entertainment Planning & Development</td>
          <td>7 de dezembro de 2017</td>
        </tr>

        <tr>
          <th scope="row">5</th>
          <td>Overwatch</td>
          <td>Blizzard Entertainment</td>
          <td>1 de dezembro de 2016</td>
        </tr>
      </tbody>
    </table>

    <a data-js="export-table-btn" role="button" class="btn btn-info">Exportar para CSV</a>
  </div> -->

  <!-- <div class="container">
    <div class="row justify-content-center">
      <img class="col-sm-6 col-md-5 col-lg-4 col-lg-3 col-xl-3 col-xxl-3" src="./src/img/logo.svg" alt="Logo ">
    </div>

    <div class="row justify-content-center mb-4 mt-4">
      <div class="col-sm-3 col-lg-2">
        <select data-js="currency-one" class="form-select"></select>
      </div>

      <div class="col-sm-3 col-lg-2">
        <select data-js="currency-two" class="form-select"></select>
      </div>
    </div>

    <div class="row justify-content-center align-items-center mb-4 mt-4">
      <div class="col-sm-3 col-md-2">
        <input data-js="currency-one-times" type="number" class="form-control form-control-lg" value="1">
      </div>

      <div class="col-sm-3 col-md-2">
        <p data-js="converted-value" class="converted-value fs-1 text-center mb-0"></p>
      </div>

      <p data-js="conversion-precision" class="conversion-precision text-center m-4"></p>
    </div>
  </div> -->

  <script src="./app.js"></script>
</body>
</html>
```

CSS:

```css
body {
  background-color: #F9FAFC;
}

.container {
  padding-top: 7.5rem;
}

.converted-value {
  color: #452B4E;
}

.conversion-precision {
  color: #452B4E;
}
```

Javascript:

```javascript
/*
  01

  - Crie um objeto com um método getColor. Este método deve retornar o valor da
    propriedade 'color' dos objetos descritos abaixo;
  - Crie 2 novos objetos que representem dois carros. Na criação dos objetos, 
    faça o objeto com o método getColor ser prototype desses dois carros;
  - Após criar os carros, crie neles as propriedades 'color'. Atribua valores 
    diferentes para a propriedade color de cada carro;
  - Teste o método getColor do prototype dos carros.
*/
const carProto = {
  getColor () {
    return this.color
  }
}

const car1 = Object.create(carProto)
let car2 = Object.create(carProto)

car1.color = 'Azul'
car2.color = 'Amarelo'

// console.log(car1)
// console.log(car2)

/*
  02

  - No código abaixo, a invocação da função 'getSummary' está retornando 
    "undefined foi dirigido por undefined e tem undefined no papel principal.";
  - Faça a invocação da função retornar a string com os valores esperados 
    (ao invés de undefined's);
  - Não modifique o objeto 'movie' e a declaração da função 'getSummary';
  - Após fazer o código funcionar, você pode refatorar a declaração da função, 
    se necessário.
*/

const movie = {
  title: 'Forrest Gump',
  director: 'Robert Zemeckis',
  starringRole: 'Tom Hanks'
}

function getSummary () {
  const { title, director, starringRole } = this
  return `${title} foi dirigido por ${director} e tem ${starringRole} no papel principal.`
}

// console.log(getSummary.apply(movie))

/*
  03

  - A invocação da função abaixo deve retornar este objeto:
    {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3' 
    }
  - Descomente o código e crie a função.
*/

const createObject = (acc, [key, value]) => {
  acc[key] = value
  return acc
}

function arrayToObj (array = []) {
  return array.reduce(createObject, {})
}

// console.log(
//   arrayToObj([
//     ['prop1', 'value1'],
//     ['prop2', 'value2'],
//     ['prop3', 'value3']
//   ])
// )

/*
  04

  - Refatore as classes abaixo para factory functions.
*/

const getTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return [hours, minutes, seconds]
}

const concatenateZero = unit => (unit < 10 ? `0${unit}` : unit)

const formatTimeUnits = units => units.map(concatenateZero)

const getFormattedTime = template => {
  const [hours, minutes, seconds] = getTime()
  const formattedTime = formatTimeUnits([hours, minutes, seconds])
  const getTimeAsArray = (_, index) => formattedTime[index]

  return template.split(':').map(getTimeAsArray).join(':')
}

const makeClock = ({ template }) => ({
  template,
  render () {
    const formattedTime = getFormattedTime(this.template)
    console.log(formattedTime)
  },
  start () {
    const oneSecond = 1000

    this.render()
    this.timer = setInterval(() => this.render(), oneSecond)
  },
  stop () {
    clearInterval(this.timer)
  }
})

const makeExtendedClock = ({ template = 'h:m:s', precision = 1000 }) => ({
  precision,
  ...makeClock({ template }),
  start () {
    this.timer = setInterval(() => this.render(), this.precision)
  }
})

const clock = makeClock({ template: 'h:m:s', precision: 1000 })
const extendedClock = makeExtendedClock({ template: 'h:m:s', precision: 1000 })

// clock.start()
// extendedClock.start()

// setTimeout(() => {
//   extendedClock.stop()
//   console.log('O relogio parou!')
// }, 10000)

/*
  05

  - No index.html, descomente: 
    - A div com a classe "container" que contém uma tabela e um botão;
    - A tag link (no head) que carrega os estilos CSS do Bootstrap.
  - Seu desafio neste exercício é exportar as células da tabela HTML para um 
    arquivo CSV que pode ser aberto no Excel ou Google Planilhas;

  Passo a passo para alcançar este resultado
    - Quando um click no botão "Exportar para CSV" acontecer, faça o seguinte:
      - Gere um array com todas as referências dos elementos <tr> da tabela;
      - À partir do array de referências das <tr>, gere uma string CSV:
        - Uma string CSV contém, em cada linha, separados por vírgula, o 
          conteúdo textual de uma célula da <tr> (seja a célula um <th> ou 
          <td>). Ou seja, a string CSV deve ter a formatação abaixo, incluindo 
          as quebras de linha:

          #,Jogo do Ano,Desenvolvedora,Data da premiação
          1,The Last of Us Part II,Naughty Dog,10 de dezembro de 2020
          2,Sekiro: Shadows Die Twice,FromSoftware,12 de dezembro de 2019
          3,God of War,SIE Santa Monica Studio,6 de dezembro de 2018
          4,The Legend of Zelda: Breath...,Nintendo...,7 de dezembro de 2017
          5,Overwatch,Blizzard Entertainment,1 de dezembro de 2016

        - Dicas:
          - O elemento <tr> contém uma propriedade 'cells'.
          - Para quebrar linha, você pode usar dentro da string o caractere 
            especial '\n';
          - É possível gerar a string usando o método reduce. Porém, neste caso,
            o código fica mais legível (e menos complicado) com o map.
      - Após gerar a string CSV, insira 2 atributos no botão:
        - href, com o valor 
          `data:text/csvcharset=utf-8,${encodeURIComponent(SUA_STRING_CSV)}`. 
          encodeURIComponent é um método do window que precisa receber a string 
          CSV que você criou;
        - download, com o valor 'table.csv'.
*/

/* 
const exportBtn = document.querySelector(`[data-js="export-table-btn"]`)
const tableRows = document.querySelectorAll(`tr`)

const setCSVDownload = csv => {
  const csvURI = `data:text/csvcharset=utf-8,${encodeURIComponent(csv)}`

  exportBtn.setAttribute('href', csvURI)
  exportBtn.setAttribute('download', 'table.csv')
}

const getContenCell = ({ textContent }) => textContent

const getStringWithCommas = ({ cells }) =>
  Array.from(cells).map(getContenCell).join(',')

const createCSVString = () =>
  Array.from(tableRows).map(getStringWithCommas).join('\n')

const exportTable = () => {
  const csvString = createCSVString()
  if (csvString) {
    setCSVDownload(csvString)
  }
}

exportBtn.addEventListener('click', exportTable)

 */

/*
  06

  - Na Weather Application, refatore para uma factory function o código que 
    executa os requests e obtém as informações do clima da cidade;
  - Se ao fazer o request, uma mensagem "Access to fetch at 'http://...' from 
    origin 'http://...'"... for exibida no console, crie uma nova app na 
    plataforma da accuweather e pegue uma nova chave: 
    https://developer.accuweather.com/;
  - O procedimento é o mesmo mostrado nas aulas da etapa em que construímos 
    essa aplicação.
*/

/*
  07

  - No index.html, comente a div com a classe "container" que contém a tabela;
  - Descomente: 
    - A <div> com a classe "container" abaixo da div que você acabou de 
      comentar;
    - A <link> que importa o style.css;
  - Construa uma aplicação de conversão de moedas. O HTML e CSS são os que 
    você está vendo no browser (após salvar os arquivos);
  - Você poderá modificar a marcação e estilos da aplicação depois. No momento, 
    concentre-se em executar o que descreverei abaixo;

    - Quando a página for carregada: 
      - Popule os <select> com tags <option> que contém as moedas que podem ser
        convertidas. "BRL" para real brasileiro, "EUR" para euro, "USD" para 
        dollar dos Estados Unidos, etc. Use os dados da API para popular 
        os selects.
      - O option selecionado por padrão no 1º <select> deve ser "USD" e o option
        no 2º <select> deve ser "BRL";
      - O parágrafo com data-js="converted-value" deve exibir o resultado da 
        conversão de 1 USD para 1 BRL;
      - Quando um novo número for inserido no input com 
        data-js="currency-one-times", o parágrafo do item acima deve atualizar 
        seu valor;
      - O parágrafo com data-js="conversion-precision" deve conter a conversão 
        apenas x1. Exemplo: 1 USD = 5.0615 BRL;
      - O conteúdo do parágrafo do item acima deve ser atualizado à cada 
        mudança nos selects;
      - O conteúdo do parágrafo data-js="converted-value" deve ser atualizado à
        cada mudança nos selects e/ou no input com data-js="currency-one-times";
      - Para que o valor contido no parágrafo do item acima não tenha mais de 
        dois dígitos após o ponto, você pode usar o método toFixed: 
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    - Para obter as moedas com os valores já convertidos, use a Exchange rate 
      API: https://www.exchangerate-api.com/;
      - Para obter a key e fazer requests, você terá que fazer login e escolher
        o plano free. Seus dados de cartão de crédito não serão solicitados.

  PS: o desafio aqui é você implementar essa aplicação sozinho(a), antes 
  de ver as próximas aulas, ok? =)
*/

const currencyOneEl = document.querySelector('[data-js="currency-one"]')
const currencyTwoEl = document.querySelector('[data-js="currency-two"]')
const currenciesEl = document.querySelector('[data-js="currencies-container"]')
const pShowedConvereted = document.querySelector('[data-js="converted-value"]')
const pPrecisionEl = document.querySelector('[data-js="conversion-precision"]')
const inputTimes = document.querySelector('[data-js="currency-times"]')

const state = (() => {
  let exchangeRate = {}

  return {
    getExchangeRate: () => exchangeRate,
    setExchangeRate: newExchangeRate => {
      if (!newExchangeRate.conversion_rates) {
        showAlert({ message: 'Não tem a propriedade "converter rates"' })
        return
      }

      exchangeRate = newExchangeRate
      return exchangeRate
    }
  }
})()

const getMessageError = errorType =>
  ({
    'unsupported-code':
      'Não oferecermos suporte ao código de moeda pesquisado (consulte moedas suportadas...).',
    'malformed-request':
      'Alguma parte da sua solicitação não segue a estrutura correta de requisição.',
    'invalid-key': 'Chave de API não é válida.',
    'inactive-account': 'Endereço de e-mail não foi confirmado.',
    'quota-reached':
      'Sua conta atingir o número de solicitações permitidas pelo seu plano.',
    'plan-upgrade-required':
      'Nível do seu plano não for compatível com esse tipo de solicitação.'
  }[errorType] || 'Não foi possível obter as informações.')

const getURL = currency =>
  `https://v6.exchangerate-api.com/v6/${APIkey}/latest/${currency}`

const showAlert = err => {
  const div = document.createElement('div')
  const button = document.createElement('button')

  div.textContent = err.message
  div.classList.add(
    'alert',
    'alert-warning',
    'alert-dismissible',
    'fade',
    'show'
  )
  div.setAttribute('role', 'alert')

  button.classList.add('btn-close')
  button.setAttribute('type', 'button')
  button.setAttribute('aria-label', 'Close')

  button.addEventListener('click', () => {
    div.remove()
  })

  div.appendChild(button)
  currenciesEl.insertAdjacentElement('afterend', div)
}

const fetchExchangeRate = async currency => {
  try {
    const response = await fetch(getURL(currency))

    if (!response.ok) {
      console.log(response)
      throw new Error('Sua conexão falhou. Não foi possível obter os dados.')
    }

    const exchangeRateData = await response.json()

    if (exchangeRateData.result === 'error') {
      throw new Error(getMessageError(exchangeRateData['error-type']))
    }

    return exchangeRateData
  } catch (err) {
    showAlert(err)
  }
}

const showInitialInfo = conversion_rates => {
  const createOpionsSelectedHTML = (code, currency) => {
    const selectedCurrency = code === currency ? 'selected' : ''
    return `<option ${selectedCurrency}>${code}</option>`
  }

  const getOptionsCodeCurrency = selectedCurrency => {
    const options = Object.keys(conversion_rates).map(code =>
      createOpionsSelectedHTML(code, selectedCurrency)
    )
    return options
  }

  currencyOneEl.innerHTML = getOptionsCodeCurrency('USD')
  currencyTwoEl.innerHTML = getOptionsCodeCurrency('BRL')
  showUpdatedRates()
}
const showUpdatedRates = () => {
  const optionOneCurrency = currencyOneEl.value
  const optionTwoCurrency = currencyTwoEl.value
  const currencyTimes = inputTimes.value
  const currencyTwo =
    state.getExchangeRate().conversion_rates[optionTwoCurrency]
  const multiplyCurrency = currencyTwo * currencyTimes

  pShowedConvereted.innerHTML = `${currencyTwo.toFixed(2)}`
  pPrecisionEl.textContent = `${currencyTimes} ${optionOneCurrency} = ${multiplyCurrency.toFixed(
    2
  )} ${optionTwoCurrency}`
}
const init = async () => {
  state.setExchangeRate({ ...(await fetchExchangeRate('USD')) })
  const { conversion_rates } = state.getExchangeRate()

  if (conversion_rates) {
    showInitialInfo(conversion_rates)
  }

  // currencyOneEl.addEventListener('input',showUpdatedRates())

  currencyTwoEl.addEventListener('change', showUpdatedRates)

  inputTimes.addEventListener('change', showUpdatedRates)

  currencyOneEl.addEventListener('input', async e => {
    state.setExchangeRate({ ...(await fetchExchangeRate(e.target.value)) })
    showUpdatedRates()
  })
}

init()
```
