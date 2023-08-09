<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Práticas para evitar ataques Cross-site Scripting (XSS) no front-end - Parte 02 - Aula 03-11

### Resumo

### DOMPurify

O `DOMPurify` é uma biblioteca JavaScript que oferece uma maneira segura e eficiente de limpar e sanitizar conteúdo HTML, removendo quaisquer elementos, atributos e scripts maliciosos ou inseguros. Essa biblioteca é amplamente usada para prevenir ataques de Cross-site Scripting (XSS) e outras vulnerabilidades de segurança relacionadas à manipulação de HTML.

A principal finalidade do `DOMPurify` é proteger o seu aplicativo ou site contra injeções de código malicioso, garantindo que o conteúdo fornecido pelo usuário seja filtrado e seguro antes de ser renderizado no DOM.

Aqui está um exemplo básico de como usar o `DOMPurify`:

1. Instale a biblioteca:

Você pode instalar o `DOMPurify` usando o npm (Node Package Manager) ou outra ferramenta de gerenciamento de pacotes:

```
npm install dompurify
```

2. Importe e utilize o `DOMPurify` em seu código:

```javascript
import DOMPurify from 'dompurify';

const unsafeHtml = '<p><script>alert("Hello, XSS");</script>Texto inseguro</p>';
const sanitizedHtml = DOMPurify.sanitize(unsafeHtml);

const container = document.getElementById('container');
container.innerHTML = sanitizedHtml;
```

Neste exemplo, o `DOMPurify` limpa o conteúdo inseguro do HTML antes de ser inserido no DOM, removendo o script malicioso.

O `DOMPurify` também oferece várias opções e configurações para personalizar o processo de sanitização, como permitir certos atributos ou elementos, configurar regras específicas e muito mais. Certifique-se de consultar a documentação oficial do `DOMPurify` para entender todas as possibilidades e como usá-las de acordo com suas necessidades específicas.

Em resumo, o `DOMPurify` é uma ferramenta valiosa para ajudar a prevenir ataques de XSS e manter a segurança do seu aplicativo ou site ao manipular conteúdo HTML fornecido pelos usuários.

### Usando DOMPurify através de CDNjs

Você pode usar o `DOMPurify` por meio de um CDN (Content Delivery Network) como o CDNjs. Aqui está um exemplo de como você pode incluir e usar o `DOMPurify` em sua página HTML através do CDNjs:

1. Adicione a referência ao `DOMPurify` no cabeçalho da sua página HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo de uso do DOMPurify via CDNjs</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.3.2/purify.min.js"></script>
</head>
<body>
    <div id="container"></div>
    <script>
        // Seu código JavaScript aqui
    </script>
</body>
</html>
```

2. Use o `DOMPurify` para limpar e renderizar o conteúdo de forma segura:

```html
<script>
    const unsafeHtml = '<p><script>alert("Hello, XSS");</script>Texto inseguro</p>';
    const sanitizedHtml = DOMPurify.sanitize(unsafeHtml);

    const container = document.getElementById('container');
    container.innerHTML = sanitizedHtml;
</script>
```

Neste exemplo, a biblioteca `DOMPurify` é carregada a partir do CDNjs e usada para sanitizar e renderizar o conteúdo de forma segura dentro do elemento com o id "container".

Lembre-se de que usar um CDN para carregar bibliotecas externas é conveniente, mas esteja ciente de que o CDN pode ter suas próprias políticas de segurança e confiabilidade. Se você estiver desenvolvendo um aplicativo mais sensível ou crítico em termos de segurança, considere baixar e hospedar a biblioteca em seu próprio servidor, além de seguir as melhores práticas de segurança ao lidar com conteúdo HTML fornecido pelos usuários.

Sempre consulte a documentação oficial do `DOMPurify` para entender completamente as opções e recursos disponíveis ao usar a biblioteca.

### Códigos Usados Nessa Aula

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

const log = (...anyArg) => console.log(...anyArg)

const getFormatedDate = date => {
  const timeOptions = { dateStyle: 'short', timeStyle: 'short' }
  return new Intl.DateTimeFormat('pt-BR', timeOptions).format(date)
}

const sanitize = text => DOMPurify.sanitize(text)

const renderGamesList = querySnapshot => {
  const hasPendingWrites = querySnapshot.metadata.hasPendingWrites
  if (!hasPendingWrites) {
    gamesLis.textContent = ''
    const games = querySnapshot.docs.map(doc => {
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

      if(createdAt){
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

      return liGame

    })

    games.forEach(game => gamesLis.append(game))
  }
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

/*
// atualizar um documento no firestore

const docRef = doc(db, 'games', '7molj3lIL7QceBXIFu8Z')
if (false) {
  const updateDoc = { title: 'Viva Piñata', developedBy: 'Microsoft' }
  const merge = { merge: true }
  
  setDoc(docRef, updateDoc, merge)
  .then(() => log('Documento atualizado com sucesso'))
  .catch(log)
}

if (true) {
  const newTitleDoc = { title: 'Grand Turismo ' }
  updateDoc(docRef, newTitleDoc)
    .then(() => log('Documento atualizado com sucesso'))
    .catch(log)
}
*/
```

# Rreferencias

[cdnjs](https://cdnjs.com/)

[DOMPurify](https://github.com/cure53/DOMPurify)
