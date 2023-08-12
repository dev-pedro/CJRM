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
