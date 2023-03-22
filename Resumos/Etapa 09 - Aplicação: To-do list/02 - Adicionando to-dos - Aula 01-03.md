<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Adicionando to-dos - Aula 01-03

### Resumo

#### trim()

O método `trim()` em JavaScript é usado para remover os espaços em branco no início e no final de uma string.

Por exemplo, suponha que temos a seguinte string:

```javascript
const minhaString = "    Olá, mundo!    ";
```

Se quisermos remover os espaços em branco no início e no final da string, podemos usar o método `trim()` da seguinte forma:

```javascript
const minhaStringSemEspacos = minhaString.trim();
console.log(minhaStringSemEspacos); // "Olá, mundo!"
```

O método `trim()` não afeta os espaços em branco no meio da string, apenas os espaços em branco no início e no final. Isso pode ser útil, por exemplo, quando você precisa validar um formulário e garantir que não haja espaços em branco desnecessários nos campos de entrada.

#### reset()

O método `reset()` é uma função em JavaScript que pode ser usada para redefinir todos os campos de um formulário para seus valores padrão.

Para usar o método `reset()`, você pode selecionar o elemento do formulário em JavaScript e chamar o método `reset()` nele. Por exemplo, suponha que você tenha um formulário HTML com um ID de "meuFormulario". Para redefinir o formulário, você pode fazer o seguinte em JavaScript:

```javascript
// Selecione o elemento do formulário
const formulario = document.getElementById("meuFormulario");

// Chame o método reset() no elemento do formulário
formulario.reset();
```

Quando o método `reset()` é chamado, todos os campos do formulário são redefinidos para seus valores padrão, que são os valores que estavam definidos quando o formulário foi carregado inicialmente. Isso inclui campos de texto, caixas de seleção, botões de opção, etc.

É importante notar que o método `reset()` não limpa os valores preenchidos pelo usuário, mas sim redefinem aos valores iniciais, definidos no HTML. Se você deseja limpar os valores do formulário preenchidos pelo usuário, você pode definir os valores dos campos manualmente usando JavaScript.

#### Código utilizado na aula

HTML:

```html
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">
  <title>To-do List | CJRM</title>
</head>
<body class="bg-dark">
  <div class="container">

    <header class="text-center text-light my-4">
      <h1 class="mb-4">To-do List</h1>
      <form class="form-search">
        <input class="form-control m-auto" type="text" name="search" placeholder="Buscar to-do" />
      </form>
    </header>

    <ul class="todos-container list-group mx-auto text-light">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>Assistir Breaking Bad</span>
        <i class="far fa-trash-alt delete"></i>
      </li>

      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>Planejar aulas</span>
        <i class="far fa-trash-alt delete"></i>
      </li>

      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>Fazer exercícios físicos</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    </ul>

    <form class="form-add-todo text-center my-4">
      <label class="text-light">Adicionar to-do</label>
      <input class="form-control m-auto" type="text" name="add" autofocus />
    </form>
  </div>

  <script src="./app.js"></script>
</body>
</html>
```

CSS:

```css
.container {
  max-width: 400px;
}

input[type=text],
input[type=text]:focus {
  color: #fff;
  border: none;
  background: rgba(0,0,0,0.2);
  max-width: 400px;
}

.todos-container li {
  background: #484E53;
}

.delete {
  cursor: pointer;
  color: orangered;
}
```

Javascript:

```javascript
const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()
  const inputValue = event.target.add.value.trim()
  if (inputValue.length) {
      const templateLi = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`
        todosContainer.innerHTML += templateLi

        event.target.reset()
  }

})
```
