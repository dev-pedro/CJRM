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

const renderGamesList = querySnapshot => {
  const hasPendingWrites = querySnapshot.metadata.hasPendingWrites
  if (!hasPendingWrites) {
    gamesLis.innerHTML = querySnapshot.docs.reduce((acc, doc) => {
      const [id, { title, developedBy, createdAt }] = [doc.id, doc.data()]
      const date = createdAt.toDate()

      return `${acc}<li class="my-4 d-flex flex-column" data-id="${id}">
      <h5>${title}</h5>
      
      <ul>
        <li>Desenvolvido por ${developedBy}</li>
        <li>Adicionado ao banco em ${getFormatedDate(date)}</li>
      </ul>
  
      <button class="btn btn-danger btn-sm align-self-end m-2" data-remove="${id}">Remover</button>
      
    </li>`
    }, '')
  }
}

const addGame = e => {
  e.preventDefault()
  const newGAme = {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    createdAt: serverTimestamp()
  }

  addDoc(collectionGames, newGAme)
    .then(doc => {
      log('Documento criado com o ID = ', doc.id)
      e.target.reset()
      e.target.title.focus()
    })
    .catch(log)
}

const deleteGame = async e => {
  const removeId = e.target.dataset.remove

  if(!removeId){
    return
  }// return early

  try {
    await deleteDoc(doc(db, 'games', removeId))
    log('Game removido do FireStore')
  } catch (e) {
    log(e)
  }
  
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
