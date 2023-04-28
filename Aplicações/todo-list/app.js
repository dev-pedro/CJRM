const formAddTodo = document.querySelector('.form-add-todo')
const inputTodoInsert = document.querySelector('.form-add-todo input')
const inputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

//verifica se é uma string válida entre 3 a 20 caracteres permit caracters especiais
const validInputinputValue = name =>
  /^[a-zA-Z0-9\s!@#$%^&*()-_=+{\\}\|;:'",<.>?à-ú]{3,20}$/gm.test(name.trim())

const insertTodo = (inputValue, event) => {
  const templateLi = `
        <li id="${inputValue}" class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
        </li>`
  todosContainer.innerHTML += templateLi
  event.target.reset()
}

const removeTodo = clickedElement => {
  const trashDataValue = clickedElement.dataset.trash
  const todoLi = document.querySelector(`[data-todo="${trashDataValue}"]`)
  console.log(todoLi)
  if (trashDataValue) {
    todoLi.remove()
  }
}

const hideTodos = (allTodosList, inputSearchValue) => {
  allTodosList
    .filter(
      todo => !todo.textContent.toLocaleLowerCase().includes(inputSearchValue)
    )
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
    })
}

const showTodos = (allTodosList, inputSearchValue) => {
  allTodosList
    .filter(todo =>
      todo.textContent.toLocaleLowerCase().includes(inputSearchValue)
    )
    .forEach(todo => {
      todo.classList.remove('hidden')
      todo.classList.add('d-flex')
    })
}

/**Filtra as Todos da lista de tarefas  */
const searchTodoOnList = inputSearchValue => {
  const allTodosList = Array.from(todosContainer.children)
  hideTodos(allTodosList, inputSearchValue)
  showTodos(allTodosList, inputSearchValue)
}

const showMessageError = event => {
  const inputValue = event.target.value.trim()
  const textMessage = document.querySelector('.message-char-over')
  if (!validInputinputValue(inputValue)) {
    textMessage.classList.remove('d-none')
  } else {
    textMessage.classList.add('d-none')
  }
}

const searchTodo = event => {
  const inputSearchValue = event.target.value.trim().toLowerCase()
  searchTodoOnList(inputSearchValue)
}

const clickedTodosContainer = event => {
  const clickedElement = event.target
  removeTodo(clickedElement)
}

const eventsSubmit = event => {
  event.preventDefault()
  //pega valor do input e rmove espaços em branco
  const inputValue = event.target.add.value.trim()
  if (validInputinputValue(inputValue)) {
    insertTodo(inputValue, event)
  }
}

formAddTodo.addEventListener('submit', eventsSubmit)
todosContainer.addEventListener('click', clickedTodosContainer)
inputSearchTodo.addEventListener('input', searchTodo)
inputTodoInsert.addEventListener('input', showMessageError)
