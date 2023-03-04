<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula passada - Aula 02-01

### Resumo

#### Código desta aula

HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.css">
  <link rel="stylesheet" href="./style.css">
  <title>Exercício 17</title>
</head>
<body>
  <div class="container">
    <h1>Exercício 17</h1>

    <form>
      <input type="text" id="input" placeholder="Insira um valor" >
      <button>Enviar</button>
    </form>

    <p>
      Browse the complete JavaScript reference 
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
      >
        documentation
      </a>.
    </p>
  <!-- Outlined Button -->
  </div>

  <script src="./app.js"></script>
</body>
</html>
```

CSS:

```css
.container {
  width: 40%;
}

h1 {
  margin-top: 20px;
}
```

Javascript:

```javascript
/*
  01

  - No envio do form, faça com que a página não seja recarregada.
*/

const clearInput = () => {
  input.value = ''
  input.focus()
}

const handleSubmit = event => {
  //obtem a referencia do input
  const input = event.target.input
  //evita que a página seja recarregada
  event.preventDefault() //exercício 1

  console.log(input.value) //exercício 2
  console.log(form.input.value.textContent) //exercício 2

  showMessage(input) //exercício 6
}

const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)
/*
  02

  - No envio do form obtenha, através do objeto event, o texto inserido no  
    input e exiba-o no console.
*/

/*
  03

  - Teste uma regex que dá match com a palavra "documentation" do parágrafo do  
    index.html;
  - Exiba no console o boolean no qual este teste resulta.
*/
const regex = /documentation/
const paragraph = document.querySelector('p').textContent
const result = regex.test(paragraph)
console.log('regex foi encontrada: ' + result)

/*
  04

  - Escreva uma regex que dê match com a palavra "B99" da string abaixo;
  - A regex não deve conter (literalmente) os caracteres B99;
  - Teste se o match aconteceu e exiba o resultado no console.
*/
const regex2 = /[A-Z0-9]{3}/
const B99message =
  'E o Terry Crews faz tudo, inclusive tocar a abertura de B99 na flauta'
console.log('Essa regex foi testada: ' + regex2.test(B99message))
/*
  05

  - Modifique (manualmente) o valor que a const word armazena para que o  
    resultado do teste entre a regex e a string exibido no console seja true.
*/

const word = 'NASA'
const NASARegex = /^[A-Z]{4}$/
const NASAResult = NASARegex.test(word)

console.log(NASAResult)

/*
  06

  - No envio do form, se o valor inserido no input conter, no mínimo, 7  
    caracteres, que podem ser quaisquer caracteres, exiba no console a mensagem
    "O valor inserido no input é válido =)";
  - Caso contrário, exiba "Valor inválido =(" no console.
  
  Exemplos:
    - "a[b@X7c" é um valor válido, pois contém 7 caracteres;
    - "jozeti" não é um valor válido, pois contém 6 caracteres.
*/
// const showMessage = (string)=> {
//   const regex = /.{7}/
//   if(regex.test(string)){
//     console.log('O valor inserido no input é válido =)')
//     return
//   }
//   console.log('Valor inválido =(')
// }
/*
  07

  - Agora, no envio do form, faça com que o valor permitido contenha de 7 a 11 
    caracteres mas não contenha caracteres especiais. Apenas letras maiúsculas  
    ou minúsculas e números serão permitidos.

  Exemplos:
    - "0xY79aYx54e" é um valor válido, pois contém 11 letras e números;
    - "eich_1961" não é um valor válido, pois contém um caractere especial.
*/
const showMessage = string => {
  const regex = /^[a-zA-Z0-9]{7,11}$/
  const result = regex.test(string)
  if (result) {
    console.log('O valor inserido no input é válido =)')
    return
  }
  console.log('Valor inválido =(')

  clearInput()
}
```
