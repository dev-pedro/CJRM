<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Observando o estado de autenticação do usuário - Aula 03-20

### Resumo

Gerenciar usuários no Firebase envolve a criação, autenticação, gerenciamento de sessões e acesso às informações dos usuários. O Firebase oferece recursos para facilitar todo esse processo. Uma das principais ferramentas é o `onAuthStateChanged`, que permite acompanhar as alterações no estado de autenticação do usuário em tempo real. Vamos abordar como gerenciar usuários e usar o `onAuthStateChanged`:

**Gerenciamento de Usuários:**

1. **Criação de Contas:**
   Você pode usar métodos como `createUserWithEmailAndPassword` para criar contas de usuário com um e-mail e senha.

2. **Login:**
   Use métodos como `signInWithEmailAndPassword`, `signInWithGoogle`, `signInWithFacebook`, etc., para permitir que os usuários façam login.

3. **Gerenciamento de Sessões:**
   O Firebase mantém automaticamente o estado de autenticação, então você não precisa se preocupar com a persistência das sessões do usuário. No entanto, você pode fazer ajustes nas configurações de autenticação para determinar quanto tempo as sessões permanecerão ativas.

4. **Logout:**
   Use `signOut` para encerrar a sessão do usuário.

5. **Recuperação de Senha:**
   Use `sendPasswordResetEmail` para permitir que os usuários redefinam suas senhas por e-mail.

**Persistência da Autenticação com `onAuthStateChanged`:**

O `onAuthStateChanged` é um método útil para ouvir alterações no estado de autenticação do usuário. Ele dispara sempre que o usuário faz login, faz logout ou o estado de autenticação muda por qualquer motivo. Isso é especialmente útil para atualizar a interface do usuário em resposta às alterações de autenticação.

Aqui está um exemplo de como usar o `onAuthStateChanged` em um aplicativo JavaScript:

```javascript
import firebase from 'firebase/app';
import 'firebase/auth';

// Inicialize o Firebase (mesmo código da configuração)
firebase.initializeApp(firebaseConfig);

// Adicione um listener para monitorar as mudanças de autenticação
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // O usuário está logado
    console.log('Usuário logado:', user);
  } else {
    // O usuário não está logado
    console.log('Usuário deslogado.');
  }
});

// Função para fazer login
function signIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // O listener onAuthStateChanged será acionado aqui
    })
    .catch((error) => {
      console.error('Erro ao fazer login:', error);
    });
}

// Função para fazer logout
function signOut() {
  firebase.auth().signOut()
    .then(() => {
      // O listener onAuthStateChanged será acionado aqui
    })
    .catch((error) => {
      console.error('Erro ao fazer logout:', error);
    });
}
```

O uso do `onAuthStateChanged` permite que você atualize a interface do usuário, ajuste as rotas autenticadas e tome decisões de negócios com base no estado de autenticação atual. Lembre-se de que o `user` retornado pelo `onAuthStateChanged` conterá os detalhes do usuário autenticado ou será nulo se o usuário não estiver autenticado.

### Código Usado

HTML:

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

      <ul class="right show-on-medium-and-down">
        <li data-js="user-name" class="light-blue-text accent-1"><!-- class="hide" -->
         <span> Olá, Visitante</span>
        </li>
        
      </ul>

      <ul data-js="nav-ul" class="right hide-on-med-and-down">
        <li data-js="logged-in" class="hide"><!-- class="hide" -->
          <a href="#" class="blue-grey-text text-lighten-5 modal-trigger" data-target="modal-add-phrase">Adicionar frase</a>
        </li>

        <li data-js="logged-in" class="hide"><!-- class="hide" -->
          <a data-js="account-link" href="#" class="blue-grey-text text-lighten-5 modal-trigger" data-target="modal-account">Conta</a>
        </li>

        <li data-js="logged-in" class="hide"><!-- class="hide" -->
          <a data-js="logout" href="#" class="blue-grey-text text-lighten-5">Logout</a>
        </li>

        <li data-js="logged-out" class=""><!-- class="hide" -->
          <a href="#" class="blue-grey-text text-lighten-5 modal-trigger" data-target="modal-login">Login</a>
        </li>

      </ul>
    </div>
  </nav>

  <div data-js="modal" data-modal="login" id="modal-login" class="modal blue-grey darken-4 blue-grey-text text-lighten-5">
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

    <ul data-js="phrases-list" class="collapsible"></ul>
    
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
  GoogleAuthProvider,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
import {} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js'

const log = (...arg) => console.log(...arg)

const firebaseConfig = FIREBASECONFIG

const buttonGoogle = document.querySelector('[data-js="button-google"]')
const modals = document.querySelectorAll('[data-js="modal"]')

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const collectionFrases = collection(db, 'frases')

let user = null

const hideOrShowLinksNav = user => {
  const navLinks = [...document.querySelector('[data-js="nav-ul"]').children]
  const logoutMessage = document.querySelector('[data-js="logout-message"]')

  navLinks.forEach(link => {
    const linkShouldBeVisible = link.dataset.js.includes(
      user ? 'logged-in' : 'logged-out'
    )

    if (linkShouldBeVisible) {
      link.classList.remove('hide')
      displayUsername.textContent = user
        ? `Ola, ${user.displayName}`
        : 'Olá, Visitante'
      return
    }
    link.classList.add('hide')
  })

  user
    ? logoutMessage.classList.add('hide')
    : logoutMessage.classList.remove('hide')
}

const closeModal = modal => M.Modal.getInstance(modal).close()

const initModals = () => M.Modal.init(modals)

const loginGoogle = async () => {
  const modal = document.querySelector('[data-modal="login"]')
  try {
    await signInWithPopup(auth, provider)

    closeModal(modal)
  } catch (error) {
    log(error)
  }
}

const initApp = (user = {}) => {
  if (!user) {
    log('Usuário não está logado')
    hideOrShowLinksNav(user)
    return
  }

  log('Usuário logado!')
  hideOrShowLinksNav(user)
  
}

onAuthStateChanged(auth, initApp)
buttonGoogle.addEventListener('click', loginGoogle)

initModals()
```

# Referencias

[Persistência do estado do Authentication](https://firebase.google.com/docs/auth/web/auth-state-persistence?hl=pt&authuser=0)

[Gerenciar usuários no Firebase](https://firebase.google.com/docs/auth/web/manage-users?authuser=0&hl=pt)
