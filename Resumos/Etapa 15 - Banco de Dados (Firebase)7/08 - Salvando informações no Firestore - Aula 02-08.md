<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Salvando informações no Firestore - Aula 02-08

### Resumo

### Código Usado Na aula

```javascript
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyD3OUwr0FbUcfCKft_MWLyJ1RHYk9K0wNM',
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

getDocs(collectionGames)
  .then(querySnapshot => {
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
      const { title, createdAt, developedBy } = doc.data()
      acc += `<li class="my-4">
      <h5>${title}</h5>

      <ul>
        <li>Desenvolvido por ${developedBy}</li>
        <li>Adicionado no banco em ${createdAt.toDate()}</li>
      </ul>
    </li>`
      return acc
    }, '')

    const lis = document.querySelector('[data-js="games-list"]')
    lis.innerHTML = gamesLis
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
```

### Explicando o trecho que salva os arquivo no banco

```javascript
...
const newGAme = {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    createdAt: serverTimestamp()
  }

  addDoc(collectionGames, newGAme)
    .then(doc => console.log('Documento criado com o ID = ', doc.id))
    .catch(console.log)
...
```

1. `const newGame = { ... }`:
   Nesta linha, está sendo criado um objeto chamado `newGame` que contém três propriedades:
- `title`: O valor é obtido do campo `title` do evento (`e.target.title.value`). Isso provavelmente faz parte de um formulário HTML onde o usuário pode inserir o título do jogo.

- `developedBy`: O valor é obtido do campo `developer` do evento (`e.target.developer.value`). Isso também deve ser parte do formulário onde o usuário insere o nome do desenvolvedor do jogo.

- `createdAt`: O valor desta propriedade é obtido chamando a função `serverTimestamp()`. Essa função é uma função de utilitário fornecida pelo Firebase, que retorna a data e hora atual do servidor. Ela é usada para registrar quando o documento é criado.
2. `addDoc(collectionGames, newGame)`:
   Aqui, o código está usando a função `addDoc` do Firebase Firestore para adicionar um novo documento ao Firestore. `collectionGames` representa a coleção onde o documento será armazenado. Pode ser uma referência a uma coleção específica obtida anteriormente através do Firestore SDK. `newGame` é o objeto que criamos na etapa anterior, contendo as informações do novo jogo a ser salvo.

3. `.then(doc => console.log('Documento criado com o ID = ', doc.id))`:
   Este é o tratamento da promessa (`Promise`). Se o documento for salvo com sucesso, a função `then` será executada, e ela recebe um parâmetro chamado `doc`, que representa a referência para o documento recém-criado. A função imprime uma mensagem no console com o ID do documento recém-criado (`doc.id`).

4. `.catch(console.log)`:
   Este é o tratamento de erro da promessa. Se ocorrer algum erro durante o processo de criação e salvamento do documento, a função `catch` será executada, e o erro será impresso no console.

Resumindo, o código recebe os dados do título e do desenvolvedor do jogo a partir do evento `e`, cria um objeto `newGame` com esses dados e o horário de criação obtido do servidor, e, em seguida, salva esse objeto como um novo documento na coleção especificada. Se tudo ocorrer corretamente, ele imprimirá a mensagem "Documento criado com o ID = [ID_DO_DOCUMENTO]" no console, caso contrário, ele imprimirá o erro encontrado durante o processo.
