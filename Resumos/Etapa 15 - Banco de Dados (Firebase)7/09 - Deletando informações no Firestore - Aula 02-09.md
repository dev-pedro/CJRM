<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Deletando informações no Firestore - Aula 02-09

### Resumo

### Códigos Usados Nesta Aula

HTML:

```html
<!DOCTYPE html>
<html lang="pt_BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Banco de Dados - Firebase</title>
  </head>
  <body>
    <div class="container text-white my-5">
      <h2>Games</h2>

      <ul data-js="games-list"></ul>

      <form data-js="add-game-form">
        <div class="mb-3">
          <label for="title" class="form-label">Nome</label>
          <input value="Elden Ring"
            class="form-control bg-transparent text-white"
            name="title"
            placeholder="Ex: Ghost of Tsushima"
            required
            autofocus
          />
        </div>

        <div class="mb-3">
          <label for="developer" class="form-label">Desenvolvedora</label>
          <input value="Teste"
            class="form-control bg-transparent text-white"
            name="developer"
            placeholder="Ex: Capcom"
            required
          />
        </div>

        <button class="btn btn-primary">Adicionar game</button>
      </form>
    </div>
    <script src="apiKey.js"></script>
    <script type="module" src="app.js"></script>
  </body>
</html>
```

CSS:

```css
body {
    background-color: #212529;
  }
```

Javascript:

```javascript
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: 'testing-firebase-e7968.firebaseapp.com',
  projectId: 'testing-firebase-e7968',
  storageBucket: 'testing-firebase-e7968.appspot.com',
  messagingSenderId: '555490413778',
  appId: '1:555490413778:web:2b4e7c1a9c97d717ceb10b',
  measurementId: 'G-K2F9FZS609'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const collectionGames = collection(db, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesLis = document.querySelector('[data-js="games-list"]')

getDocs(collectionGames)
  .then(querySnapshot => {
    const gamesList = querySnapshot.docs.reduce((acc, doc) => {
      const { title, createdAt, developedBy } = doc.data()
      acc += `<li class="my-4 d-flex flex-column" data-id="${doc.id}">
      <h5>${title}</h5>
      
      <ul>
        <li>Desenvolvido por ${developedBy}</li>
        <li>Adicionado no banco em ${createdAt.toDate()}</li>
      </ul>

      <button class="btn btn-danger btn-sm align-self-end m-2" data-remove="${
        doc.id
      }">Remover</button>
    </li>`
      return acc
    }, '')

    gamesLis.innerHTML = gamesList
  })
  .catch(console.log())

formAddGame.addEventListener('submit', e => {
  e.preventDefault()
  const newGAme = {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    createdAt: serverTimestamp()
  }

  addDoc(collectionGames, newGAme)
    .then(doc => console.log('Documento criado com o ID = ', doc.id))
    .catch(console.log)
})

gamesLis.addEventListener('click', e => {
  const removeId = e.target.dataset.remove
  if (removeId) {
    deleteDoc(doc(db, 'games', removeId))
      .then(() => {
        const game = document.querySelector(`[data-id="${removeId}"]`)//referencia da li

        game.remove()//remove a li da tela
        console.log('Game removido do FireStore.')
      })
      .catch(console.log)
  }
})

```

# Como Deletar Um 'documento' no Firestore

```javascript
deleteDoc(doc(db, 'games', removeId))
      .then(() => {
        console.log('Game removido do FireStore.')
      })
      .catch(console.log)
```

Como deletar um documento específico no Firestore usando o Firebase SDK e a função `deleteDoc()` do Firestore.

Vamos explicar o código acima passo a passo:

1. `deleteDoc(doc(db, 'games', removeId))`:
   Esta linha é a parte principal do código responsável por excluir o documento do Firestore. Aqui está o que cada parte significa:
- `doc(db, 'games', removeId)`: Essa parte cria uma referência para o documento que será excluído. `db` é uma variável que representa a referência para o Firestore (provavelmente criada anteriormente em seu código). `'games'` é o nome da coleção onde o documento a ser excluído está armazenado. `removeId` é a variável que contém o ID do documento que você deseja remover.
2. `.then(() => { ... })`:
   Se a exclusão do documento for bem-sucedida, a função `then` será executada, e você pode realizar ações após a exclusão. No código fornecido, ele imprime a mensagem "Game removido do Firestore." no console.

3. `.catch(console.log)`:
   Se ocorrer algum erro durante o processo de exclusão, a função `catch` será executada, e o erro será impresso no console. Isso permite que você trate possíveis erros que possam ocorrer durante a exclusão.

Resumindo, o código cria uma referência para o documento com o ID armazenado na variável `removeId`, que está localizado na coleção 'games' do Firestore. Em seguida, ele chama o método `deleteDoc()` para remover esse documento. Se a operação for bem-sucedida, uma mensagem de sucesso é impressa no console; caso contrário, qualquer erro é tratado e impresso no console.

Lembre-se de que a exclusão de documentos é uma operação sensível e que deve ser realizada com cuidado, especialmente em produção, para garantir que apenas documentos corretos sejam excluídos e que apenas usuários autorizados possam realizar essa ação.
