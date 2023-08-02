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

const unsubscribe = onSnapshot(collectionGames, querySnapshot => {
  const options = {}

  const hasPendingWrites = querySnapshot.metadata.hasPendingWrites
  if (!hasPendingWrites) {
    const gamesList = querySnapshot.docs.reduce((acc, doc) => {
      const { title, developedBy, createdAt } = doc.data()

      const timeOptions = { timeStyle: 'short', dateStyle: 'short' }
      const formatedDate = new Intl.DateTimeFormat('pt-BR', timeOptions).format(
        createdAt.toDate()
      )

      acc += `<li class="my-4 d-flex flex-column" data-id="${doc.id}">
      <h5>${title}</h5>
      
      <ul>
        <li>Desenvolvido por ${developedBy}</li>
        <li>Adicionado ao banco em ${formatedDate.replace(',', ' ')}</li>
      </ul>
  
      <button class="btn btn-danger btn-sm align-self-end m-2" data-remove="${doc.id}">Remover</button>
      
    </li>`
      return acc
    }, '')

    gamesLis.innerHTML = gamesList
  }
})

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
        console.log('Game removido do FireStore.')
      })
      .catch(console.log)
  }
})

buttonUnsub.addEventListener('click', unsubscribe)

/*

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
*/
