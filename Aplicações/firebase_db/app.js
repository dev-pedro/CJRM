// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js'
import {
  getFirestore,
  getDocs,
  collection
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD3OUwr0FbUcfCKft_MWLyJ1RHYk9K0wNM',
  authDomain: 'testing-firebase-e7968.firebaseapp.com',
  projectId: 'testing-firebase-e7968',
  storageBucket: 'testing-firebase-e7968.appspot.com',
  messagingSenderId: '555490413778',
  appId: '1:555490413778:web:2b4e7c1a9c97d717ceb10b',
  measurementId: 'G-K2F9FZS609'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

getDocs(collection(db, 'games'))
.then(querySnapshot => {
    const gamesList = querySnapshot.docs.reduce((acc, doc)=>{
        const {title, developedBy, createdAt} = doc.data()
        acc += `<li class="my-4">
        <h5>${title}</h5>

        <ul>
        <li>Desenvolvido por ${developedBy}</li>
        <li>Adicionado no banco em ${createdAt.toDate()}</li>
        </ul>
        </li>`
        return acc
    }, '')
    
    const ulGamesList = document.querySelector('[data-js="games-list"]')
    ulGamesList.innerHTML = gamesList
  })
  .catch(console.log)
