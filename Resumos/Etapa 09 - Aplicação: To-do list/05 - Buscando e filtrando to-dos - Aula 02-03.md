<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Buscando e filtrando to-dos - Aula 02-03

### Resumo

#### Código utilizados nesta aula

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
        <input class="form-control m-auto" type="text" name="search" placeholder="Buscar to-do" autofocus/>
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
      <input class="form-control m-auto" type="text" name="add"  />
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

.hidden {
  display: none;
}
```

Javavascript:

```javascript
const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
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

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target
  const convertedClassList = Array.from(clickedElement.classList)
  const isIconTrashClicked = convertedClassList.includes('delete')

  if (isIconTrashClicked) {
    clickedElement.parentElement.remove()
  }
})

inputSearchTodo.addEventListener('input', event => {
  // console.log(event.target.value.trim())
  const inputValue = event.target.value.trim().toLowerCase()
  Array.from(todosContainer.children)
  .filter(todo => !todo.textContent.toLocaleLowerCase().includes(inputValue))
  .forEach(todo => {
    todo.classList.remove('d-flex')
    todo.classList.add('hidden')
  })
  Array.from(todosContainer.children)
  .filter(todo => todo.textContent.toLocaleLowerCase().includes(inputValue))
  .forEach(todo => {
    todo.classList.remove('hidden')
    todo.classList.add('d-flex')
  })

})
```
