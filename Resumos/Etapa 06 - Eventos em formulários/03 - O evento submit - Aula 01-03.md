<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O evento submit - Aula 01-03

### Resumo

O evento "submit" ocorre quando um formulário HTML é enviado. Isso pode acontecer quando o usuário clica em um botão de envio dentro do formulário ou pressiona a tecla "Enter" enquanto estiver em um campo de entrada de texto dentro do formulário.

Para monitorar o evento "submit" em um formulário, você pode usar o método `addEventListener()` em um elemento HTML do formulário e passar o evento "submit" como o primeiro argumento. Em seguida, você pode passar uma função de callback como segundo argumento, que será executada quando o formulário for enviado. A função pode receber um objeto de evento como um parâmetro, que contém informações sobre o evento.

Por exemplo, o seguinte código adiciona um ouvinte de evento "submit" a um formulário HTML com o ID "meu-formulario":

```javascript
const meuFormulario = document.querySelector('#meu-formulario');
meuFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado
  // Código a ser executado quando o formulário é enviado
});
```

Neste exemplo, a função de callback recebe um objeto de evento como um parâmetro, que é usado para chamar o método `preventDefault()`. Este método impede que o formulário seja enviado e, em vez disso, permite que você execute outras ações, como validar os dados do formulário e enviar uma solicitação AJAX para o servidor.

#### Recuperando os dados nos campos

Aqui estão alguns exemplos de como recuperar os valores de um formulário HTML após o evento "submit":

1. Usando o objeto de evento e o método "preventDefault()":

```javascript
const meuFormulario = document.querySelector('#meu-formulario');

meuFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  const meuCampo1 = document.querySelector('#meu-campo-1');
  const meuCampo2 = document.querySelector('#meu-campo-2');

  const valorCampo1 = meuCampo1.value;
  const valorCampo2 = meuCampo2.value;

  console.log(valorCampo1, valorCampo2);
});
```

Neste exemplo, o código adiciona um ouvinte de evento "submit" ao formulário HTML com o ID "meu-formulario". Quando o formulário é enviado, a função de callback é executada e recebe um objeto de evento como um parâmetro. O método `preventDefault()` é chamado para evitar que o formulário seja enviado. Em seguida, os valores dos campos de entrada de texto com os IDs "meu-campo-1" e "meu-campo-2" são recuperados e armazenados nas variáveis "valorCampo1" e "valorCampo2", respectivamente. Os valores são exibidos no console usando o método `console.log()`.

#### Arquivos usados nesta aula

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
      <input type="text" name="username" placeholder="username" autofocus />
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
const form = document.querySelector('.sigup-form')
//const userName = document.querySelector('#username')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    /*obtendo os dados através da const userName declarada pelo id
    descomente a linha 2 e o console abaixo e atribua 'id=username no input html'*/
    //console.log(userName.value)
    //obtendo o valor do através da referencia do input através do form 
    console.log(form.username.value)
    //obtendo o valor do input através do target do evento
    console.log(event.target.username.value)
})
```
