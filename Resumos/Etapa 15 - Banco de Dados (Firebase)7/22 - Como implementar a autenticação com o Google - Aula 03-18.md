<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Como implementar a autenticação com o Google - Aula 03-18

### Resumo

A implementação da autenticação com o Google no Firebase é relativamente simples e envolve os seguintes passos:

1. **Configuração do Firebase:**
   
   - Crie um projeto no Firebase Console (https://console.firebase.google.com/).
   - Acesse a seção "Authentication" e habilite o provedor de autenticação do Google.

2. **Configuração de Credenciais no Google:**
   
   - Acesse a Console de Desenvolvedores do Google (https://console.developers.google.com/).
   - Crie um projeto ou selecione um projeto existente.
   - Acesse a seção "Credenciais" e crie uma credencial do tipo "ID do cliente OAuth".
   - Escolha "Aplicativo da Web" como tipo de aplicativo.
   - Insira as origens permitidas e os URIs de redirecionamento permitidos (normalmente, esses são URLs do seu aplicativo).
   - Copie o ID do cliente OAuth gerado.

3. **Configuração no Aplicativo:**
   
   - No seu aplicativo, adicione a configuração do Firebase. Isso pode envolver adicionar o SDK do Firebase e as credenciais de configuração do seu projeto Firebase.

4. **Implementação do Login:**
   
   - Ao implementar o login, você normalmente terá um botão "Login com o Google" no seu aplicativo.
   - Ao clicar nesse botão, chame a função de autenticação do Firebase correspondente ao provedor do Google.
   - No SDK do Firebase, isso é geralmente feito usando `signInWithPopup` ou `signInWithRedirect` dependendo do ambiente (web ou mobile).

Exemplo em JavaScript (Web):

```javascript
// Importar o SDK do Firebase e configurá-lo
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Sua configuração do Firebase
};

firebase.initializeApp(firebaseConfig);

// Função para autenticar com o Google
const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // O usuário foi autenticado com sucesso
      const user = result.user;
    })
    .catch((error) => {
      // Ocorreu um erro durante a autenticação
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
```

Lembre-se de que você precisará adaptar esse exemplo para a linguagem e plataforma específicas do seu aplicativo (por exemplo, Android, iOS, React Native, etc.).

Certifique-se também de seguir as práticas recomendadas de segurança ao lidar com autenticação e proteger as credenciais do seu projeto Firebase e do Google.

### Código Usado

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link rel="stylesheet" href="./style.css">
  <title>Firebase Auth</title>
</head>
<body class="blue-grey darken-3">
  <nav class="z-depth-0 blue-grey darken-4">
    <div class="nav-wrapper container">
      <a href="#"><img src="img/logo.svg" class="logo"></a>

      <ul data-js="nav-ul" class="right hide-on-med-and-down">
        <li data-js="logged-in" class="hide"><!-- class="hide" -->
          <a href="#" class="blue-grey-text modal-trigger" data-target="modal-add-phrase">Adicionar frase</a>
        </li>

        <li data-js="logged-in" class="hide"><!-- class="hide" -->
          <a data-js="account-link" href="#" class="blue-grey-text modal-trigger" data-target="modal-account">Conta</a>
        </li>

        <li data-js="logged-in" class="hide"><!-- class="hide" -->
          <a data-js="logout" href="#" class="blue-grey-text">Logout</a>
        </li>

        <li data-js="logged-out" class=""><!-- class="hide" -->
          <a href="#" class="blue-grey-text modal-trigger" data-target="modal-login">Login</a>
        </li>

        <li data-js="logged-in"><!-- class="hide" -->
          <span data-js="user-name" class="grey-text text-lighten-1 ">Olá, Visitante</span>
        </li>
      </ul>
    </div>
  </nav>

  <div data-js="modal" data-js="modal-login" id="modal-login" class="modal blue-grey darken-4 blue-grey-text text-lighten-5">
    <div class="modal-content">
      <div class="modal-close-buttom">
        <button class="btn red darken-1 z-depth-0 modal-close ">x</button>
      </div>
      <h4>Login</h4><br />
      <button data-js="button-google" class="btn red darken-1 z-depth-0">Entrar com Google</button>
    </div>
  </div>

  <div data-js="modal" id="modal-account" class="modal blue-grey darken-4 blue-grey-text text-lighten-5">
    <div class="modal-content center-align">
      <div class="modal-close-buttom">
        <button class="btn red darken-1 z-depth-0 modal-close ">x</button>
      </div>
      <h4>Detalhes da conta</h4><br />
      <div data-js="account-details"></div>
    </div>
  </div>

  <div data-js="modal" id="modal-add-phrase" class="modal blue-grey darken-4 blue-grey-text text-lighten-5">
    <div class="modal-content">
      <div class="modal-close-buttom">
        <button class="btn red darken-1 z-depth-0 modal-close ">x</button>
      </div>
      <h4>Adicionar frase</h4><br />

      <form data-js="add-phrase-form">
        <div class="input-field">
          <input class="blue-grey-text text-lighten-5" type="text" name="title" required>
          <label for="title">Nome do filme</label>
        </div>

        <div class="input-field">
          <input class="blue-grey-text text-lighten-5" name="phrase" type="text" required></input>
          <label for="phrase">Frase</label>
        </div>

        <button class="btn red darken-1 z-depth-0">Adicionar</button>
      </form>
    </div>
  </div>
  
  
  <div class="container phrases-container">
    <p data-js="logout-message" class="white-text center-align">Faça login para ver as frases</p>

    <ul data-js="collapsible" class="collapsible hide"></ul>
    
  </div>

  <script src="firebaseConfig.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script type="module" src="./app.js"></script>
</body>
</html>

```

CSS:

```css
.phrases-container {
  margin-top: 40px;
}

.phrases {
  border: none;
}

.logo {
  width: 180px;
  margin-top: 10px;
}

.input-field label {
  color: #fff;
}

.input-field input[type="text"]:focus + label {
  color: #fff;
}

.input-field input[type="text"]:focus {
  border-bottom: 1px solid #fff;
  box-shadow: 0 1px 0 0 #fff;
}

.input-field input[type="text"].valid {
  border-bottom: 1px solid #fff;
  box-shadow: 0 1px 0 0 #fff;
}

.input-field input[type="text"].invalid {
  border-bottom: 1px solid #fff;
  box-shadow: 0 1px 0 0 #fff;
}

.input-field .prefix.active {
  color: #fff;
}

.modal-close-buttom {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
}

```

Javascript:

```javascript
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js'
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  onSnapshot
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
import {} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js'

const log = (...arg) => console.log(...arg)

const firebaseConfig = FIREBASECONFIG

const buttonGoogle = document.querySelector('[data-js="button-google"]')

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const collectionFrases = collection(db, 'frases')

const hideOrShowLinksNav = user => {
  const navLinks = [...document.querySelector('[data-js="nav-ul"]').children]
  const logoutMessage = document.querySelector('[data-js="logout-message"]')
  const displayUsername = document.querySelector('[data-js="user-name"]')
  
  navLinks.forEach(link => {
    const linkShouldBeVisible = link.dataset.js.includes(
      user ? 'logged-in' : 'logged-out'
      )
      
      if (linkShouldBeVisible) {
        link.classList.remove('hide')
        logoutMessage.classList.remove('hide')
        displayUsername.classList.remove('hide')
        displayUsername.textContent = `Ola, ${user.displayName}`
        return
      }
      link.classList.add('hide')
      logoutMessage.classList.add('hide')
  })
}

const initModals = () => {
  const modals = document.querySelectorAll('[data-js="modal"]')
  M.Modal.init(modals)
}

const user = null

const initApp = (user = {}) => {
  initModals()
 
  if (!user) {
    log('Usuário não está logado')
    hideOrShowLinksNav(user)
    return
  }

  log('Usuário logado!')
  hideOrShowLinksNav(user)

  const unsubscribe = onSnapshot(
    collectionFrases,
    snapshot => {
      snapshot.docChanges().forEach(({ type, doc }) => {
        log(doc.data())
      })
    },
    error => log(error)
  )

}

const loginGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    
    initApp(result.user)
  } catch (error) {
    log(error)
  }
}

buttonGoogle.addEventListener('click', loginGoogle)

initApp(user)
```
