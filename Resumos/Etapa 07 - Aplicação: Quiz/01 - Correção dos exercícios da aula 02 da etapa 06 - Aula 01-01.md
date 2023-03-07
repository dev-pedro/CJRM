<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 02 da etapa 06 - Aula 01-01

### Resumo

#### Códigos utilizados nos exercícios

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
  <title>Exercício 18</title>
</head>
<body>
  <div class="container">
    <h1>Exercício 18</h1>

    <form>
      <fieldset>
        <label for="username">Nome de usuário</label>
        <input
          type="text"
          placeholder="Cadastre seu nome de usuário"
          id="username"
          autofocus
        >
        <button class="button">Enviar</button>
      </fieldset>
    </form>
  </div>

  <script src="./app.js"></script>
</body>
</html>
```

CSS:

```css
.container {
  max-width: 80rem;
  padding-top: 7.5rem;
}

.username-help-feedback {
  margin-bottom: 2.5rem;
  color: darkorange;
}

.username-success-feedback {
  margin-bottom: 2.5rem;
  color: green;
}

.submit-help-feedback {
  margin-bottom: 2.5rem;
  color: red;
}

.submit-success-feedback {
  margin-bottom: 2.5rem;
  color: green;
}
```

Javascript:

```javascript
/*
Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
vimos até aqui =)
*/
const form = document.querySelector('form')
const p = document.createElement('p')
form.username.insertAdjacentElement('afterend', p)

const usernameRegex = username => /^[a-zA-Z]{6,}$/.test(username)
const classUsernameSuccessFeedback = 'username-success-feedback'
const classUsernameHelpFeedback = 'username-help-feedback'
const classSubmitHelpFeedback = 'submit-help-feedback'

const textUsernameInvalidSubmit = 'Por favor, insira um username válido'
const textUsernameValidInput = 'Username válido =)'
const textUserInvalidInput =
  'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas'

const insertParagraph = (paragraph, text, className) => {
  paragraph.textContent = text
  paragraph.setAttribute('class', className)
}

/*
  01
  
  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
  - No mínimo 6 caracteres;
  - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
  input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
  com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
  "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
  */

const inputEvent = event => {
  const username = event.target.value
  if (usernameRegex(username)) {
    insertParagraph(p, textUsernameValidInput, classUsernameSuccessFeedback)
    return
  }
  insertParagraph(p, textUserInvalidInput, classUsernameHelpFeedback)
}

const onSubimitEvent = event => {
  event.preventDefault()
  const username = event.target.username.value

  if (!usernameRegex(username)) {
    insertParagraph(p, textUsernameInvalidSubmit, classSubmitHelpFeedback)
    form.username.focus()
    return
  }
  form.username.value = ''
  form.username.focus()
  p.textContent = ''
}

/*
  02
  
  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
  parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

form.addEventListener('input', inputEvent)
form.addEventListener('submit', onSubimitEvent)

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/
const nomes = ['Pedro', 'Rose', 'Julia', 'Alice', 'Sara']
const numbers = [1, 2, 3]

/**Esta função verifica uma condição passada como argumento
 * através de uma função de callback.
 * Ela recebe como parametros um array qualquer e uma função
 * dentro dela é iterado por cada item do array conforme a expressão(função)
 * passada por argumento
 * */
const some = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return true
    }
  }
  return false
}

//itera por um array de nomes e verifica se existe o nomepassado como argumento
console.log(some(nomes, nome => nome === 'Paulo'))

//itera por um array de números e verifia se o argumento passado é válido
console.log(some(numbers, number => number > 2))
```

Nestes exercícios pude colocar em prática conhecimentos sobre manipulação de eventos em formulários, criar uma função semelhante a função `some()`, manipular e criar elementos dentro do `DOM`através do javascript.
