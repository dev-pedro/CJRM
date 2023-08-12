<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Refatorando a limpeza da ul dos games - Aula 03-12

### Resumo

### docChanges() de um snapshot no Firestore

No contexto do Firestore, o método `docChanges()` é usado para obter as alterações que ocorreram em um conjunto de documentos entre duas consultas em um banco de dados. Geralmente, é usado em conjunto com o método `onSnapshot()` para monitorar em tempo real as mudanças nos documentos de uma coleção.

Aqui está um exemplo de como isso pode ser usado:

```javascript
// Referência para uma coleção no Firestore
const collectionRef = firebase.firestore().collection('usuarios');

// Iniciar a escuta por mudanças na coleção
collectionRef.onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const docData = change.doc.data();

    if (change.type === 'added') {
      console.log('Novo documento adicionado:', docData);
    } else if (change.type === 'modified') {
      console.log('Documento modificado:', docData);
    } else if (change.type === 'removed') {
      console.log('Documento removido:', docData);
    }
  });
});
```

Neste exemplo, quando ocorrem alterações na coleção 'usuarios', a função de retorno de chamada passada para `onSnapshot()` é acionada. Dentro dela, chamamos `docChanges()` no objeto `snapshot` para obter um array de objetos que representam as alterações que ocorreram nos documentos.

Cada objeto `change` contém informações sobre a mudança, incluindo o tipo de alteração (`added`, `modified` ou `removed`), bem como o documento afetado, acessado por `change.doc`. Você pode usar essa informação para atualizar a interface do usuário ou realizar outras ações em resposta às mudanças nos documentos.

Isso é particularmente útil para criar recursos em tempo real em aplicativos, como feeds de notícias ou painéis de administração que precisam reagir automaticamente a alterações nos dados armazenados no Firestore.

# Código usados nessa aula

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
          <input
            value=""
            class="form-control bg-transparent text-white"
            name="title"
            placeholder="Ex: Ghost of Tsushima"
            required
            autofocus
          />
        </div>

        <div class="mb-3">
          <label for="developer" class="form-label">Desenvolvedora</label>
          <input
            value=""
            class="form-control bg-transparent text-white"
            name="developer"
            placeholder="Ex: Capcom"
            required
          />
        </div>
        <button class="btn btn-success">Adicionar game</button>
      </form>

      <div class="d-grid gap2 mt-4">
        <button data-js="unsub" class="btn btn-outline-warning btn-lg">
          Desabilitar listener em tempo real
        </button>
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.3.4/purify.min.js" integrity="sha512-jGh38w63cHRzfBHtyKgEMMkJswUFXDA3YXrDjaE8ptzxV5DDkLDUDjtGUy5tmDkOXHWsItKfFjocaEtj1WuVnQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="apiKeys.js"></script>
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
  onSnapshot,
  addDoc,
  deleteDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const collectionGames = collection(db, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesLis = document.querySelector('[data-js="games-list"]')
const buttonUnsub = document.querySelector('[data-js="unsub"]')

const log = (...anyArg) => onsole.log(...anyArg)

const getFormatedDate = date => {
  const timeOptions = { dateStyle: 'short', timeStyle: 'short' }
  return new Intl.DateTimeFormat('pt-BR', timeOptions).format(date)
}

const sanitize = text => DOMPurify.sanitize(text)

const renderGame = doc => {
  const [id, { title, developedBy, createdAt }] = [doc.id, doc.data()]
  const date = createdAt.toDate()

  const liGame = document.createElement('li')
  liGame.setAttribute('data-id', id)
  liGame.setAttribute('class', 'my-4 d-flex flex-column')

  const h5 = document.createElement('h5')
  h5.textContent = sanitize(title)

  const ul = document.createElement('ul')

  const liDevelopedBy = document.createElement('li')
  liDevelopedBy.textContent = `Desenvolvido por ${sanitize(developedBy)}`

  if (createdAt) {
    const liDate = document.createElement('li')
    liDate.textContent = `Adicionado ao banco em ${getFormatedDate(date)}`
    ul.append(liDate)
  }

  const button = document.createElement('button')
  button.textContent = 'Remover'
  button.setAttribute('data-remove', id)
  button.setAttribute('class', 'btn btn-danger btn-sm align-self-end m-2')

  ul.append(liDevelopedBy)
  liGame.append(h5, ul, button)
  gamesLis.append(liGame)
}

const renderGamesList = snapshot => {
  const hasPendingWrites = snapshot.metadata.hasPendingWrites
  if (hasPendingWrites) {
    return
  }

  snapshot.docChanges().forEach(({ type, doc }) => {
    if (type === 'removed') {
      const liGame = document.querySelector(`[data-id="${doc.id}"]`)
      liGame.remove()
      return
    }

    renderGame(doc)
  })
}

const to = async promise =>
  promise.then(result => [null, result]).catch(error => [error])

const addGame = async e => {
  e.preventDefault()
  const newGAme = {
    title: sanitize(e.target.title.value),
    developedBy: sanitize(e.target.developer.value),
    createdAt: serverTimestamp()
  }

  const [error, doc] = await to(addDoc(collectionGames, newGAme))

  if (error) {
    return log(error)
  }

  log('Documento criado com o ID = ', doc.id)
  e.target.reset()
  e.target.title.focus()
}

const deleteGame = async e => {
  const removeId = e.target.dataset.remove

  if (!removeId) {
    return
  } // return early

  const [error] = await to(deleteDoc(doc(db, 'games', removeId)))

  if (error) {
    return log(error)
  }

  log('Game removido do FireStore')
}

const handleSnapshotError = e => log(e)

const unsubscribe = onSnapshot(
  collectionGames,
  renderGamesList,
  handleSnapshotError
)
formAddGame.addEventListener('submit', addGame)
gamesLis.addEventListener('click', deleteGame)
buttonUnsub.addEventListener('click', unsubscribe)
```

# Referências

[docChanges](https://firebase.google.com/docs/firestore/query-data/listen?hl=pt&authuser=0#view_changes_between_snapshots)
