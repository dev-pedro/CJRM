<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Modificando informações no Firestore - Aula 02-10

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
//códigos abaixos de exemplo usados para atualizar os dados no firestore
const docRef = doc(db, 'games', '7molj3lIL7QceBXIFu8Z')
if (false) {
  const updateDoc = { title: 'Viva Piñata', developedBy: 'Microsoft' }
  const merge = { merge: true }

  setDoc(docRef, updateDoc, merge)
    .then(() => console.log('Documento atualizado com sucesso'))
    .catch(console.log)
}

if (true) {
  const newTitleDoc = { title: 'Grand Turismo ' }
  updateDoc(docRef, newTitleDoc)
    .then(() => console.log('Documento atualizado com sucesso'))
    .catch(console.log)
}
```

### setDoc() e updateDoc()

As funções `setDoc()` e `updateDoc()` são métodos do Firebase Firestore que são utilizados para atualizar documentos no banco de dados. No entanto, eles têm algumas diferenças significativas em como eles atualizam os dados.

### setDoc()

A função `setDoc()` é utilizada para definir (ou sobrescrever) completamente os dados de um documento específico. Se o documento já existir, ele será substituído pelos novos dados fornecidos. Se o documento ainda não existir, um novo documento será criado com os dados fornecidos.

A função `setDoc()` do Firebase Firestore aceita três parâmetros, e o terceiro parâmetro é de fato um objeto com uma propriedade `merge`.

```javascript
setDoc(documentRef, data, options);
```

Os parâmetros são os seguintes:

1. `documentRef`: É a referência ao documento no qual você deseja definir os dados. Geralmente é criado utilizando a função `doc()` do Firestore para especificar a coleção e o ID do documento.

2. `data`: É um objeto contendo os dados que você deseja definir no documento especificado pela `documentRef`. Esses dados podem ser qualquer objeto JavaScript que representa as informações que você deseja armazenar no documento.

3. `options` (opcional): É um objeto de opções que pode conter propriedades adicionais para controlar o comportamento da função. Uma das opções é a propriedade `merge`, que indica se os dados fornecidos devem ser mesclados com os dados existentes no documento ou se eles devem substituir completamente os dados existentes. Se a opção `merge` for definida como `true`, os dados fornecidos serão mesclados; caso contrário, eles substituirão completamente os dados existentes.

Exemplo de uso da função `setDoc()` com a opção `merge`:

```javascript
const documentId = "ID_DO_DOCUMENTO";
const documentData = {
  title: "Viva Piñata",
};

const documentRef = doc(db, 'games', '7molj3lIL7QceBXIFu8Z');

setDoc(documentRef, documentData, { merge: true })
  .then(() => {
    console.log("Documento definido com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao definir o documento:", error);
  });

```

Neste exemplo, usamos `setDoc()` para definir os dados do documento com o ID especificado na coleção "colecao". O parâmetro `{ merge: true }` indica que os dados fornecidos (`documentData`) devem ser mesclados com os dados existentes no documento, caso ele já exista. Se o documento não existir, um novo documento com os dados fornecidos será criado.

### updateDoc()

A função `updateDoc()` é utilizada para atualizar campos específicos de um documento sem substituir os demais campos. Se o documento não existir, essa função lançará um erro. Portanto, é importante garantir que o documento exista antes de chamar `updateDoc()`.

Exemplo de uso do `updateDoc()`:

```javascript
const documentId = "ID_DO_DOCUMENTO";
const updateDoc = {
  developedBy: 'Microsoft',
  updatedAt: serverTimestamp(),
};

const documentRef = doc(db, 'games', '7molj3lIL7QceBXIFu8Z');

updateDoc(documentRef, updateDoc)
  .then(() => {
    console.log("Documento atualizado com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao atualizar o documento:", error);
  });

```

Neste exemplo, estamos utilizando `updateDoc()` para atualizar apenas os campos `developedBy` e `updatedAt` do documento com o ID especificado na coleção "games". O restante dos campos do documento permanecerá inalterado.

Resumindo, a principal diferença entre `setDoc()` e `updateDoc()` é que `setDoc()` sobrescreve completamente os dados do documento, enquanto `updateDoc()` atualiza campos específicos, mantendo os demais inalterados. Escolha a função adequada com base na necessidade de atualização dos dados no seu aplicativo.
