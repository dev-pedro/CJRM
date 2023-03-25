<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Validação básica de formulários - Aula 02-02

### Resumo

HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>O evento submit</title>
  </head>
  <body>
    <h1>O evento submit</h1>

    <form class="sigup-form">
      <!--O valor de um input também pode ser 
        recuperado alterando o 'id' para 'name'
        id="username" -> name="username"-->
      <input type="text" id="username" placeholder="username" autofocus />
      <p class="feedback"></p>
      <button>Eviar</button>
    </form>

    <script src="./app.js"></script>
  </body>
</html>
```

CSS:

```css
body {
    background: #eee;
}

h1 {
    text-align: center;
}

form {
    max-width: 200px;
    margin: 40px auto;
    background: white;
    padding: 10px;
}

input, button {
    display: block;
    margin: 10px auto;
    padding: 4px;
}
```

Javascript:

```javascript
form.addEventListener('submit', event => {
    event.preventDefault()
    const usernameRegex = /^[a-zA-Z]{6,12}$/

    const input = event.target.username
    const username = input.value

    const isAValidUsername = usernameRegex.test(username)//válida o usuário

    if(isAValidUsername){
        console.log('Usuário aceito')
        input.value = ''//limpa o campo do imput
        input.focus()//coloca o foco no campo do input
        feedback.textContent = 'Usuário válido =)'
        return//evita else
    }
    feedback.textContent = 'Usuário invalido'
    console.log('Usuário não aceito')
})
```
