<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Como fechar o modal automaticamente após o login - Aula 03-19

### Resumo

### Código

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems, options);
  });

const elem = document.querySelecto('[data-js="modal"]')
const instance = M.Modal.getInstance(elem);

instance.close();
```

Fechar um modal usando o framework Materialize CSS. Vou explicar o processo com mais detalhes:

1. **DOMContentLoaded Event Listener**:
   
   - O evento `DOMContentLoaded` é um evento JavaScript que é disparado quando o navegador termina de construir o Document Object Model (DOM) da página, ou seja, quando todo o conteúdo HTML foi analisado e estruturado.
   - O código dentro da função associada ao evento `DOMContentLoaded` só será executado após o DOM estar totalmente carregado.

2. **Selecionando e Inicializando Modais**:
   
   - `document.querySelectorAll('.modal')` seleciona todos os elementos da página com a classe "modal". Esses elementos provavelmente representam os modais que você deseja controlar.
   - `M.Modal.init(elems, options)` inicializa os modais selecionados usando o Materialize CSS. `elems` são os elementos modais que você selecionou, e `options` são as opções de configuração do modal (que não foram definidas no código fornecido).

3. **Obtendo Instância do Modal**:
   
   - `M.Modal.getInstance(elem)` é usado para obter uma instância específica de um modal com base em um elemento (neste caso, `elem`).
   - Isso permite que você interaja diretamente com a instância do modal para executar ações como fechar o modal.

4. **Fechando o Modal**:
   
   - Depois de obter a instância do modal usando `M.Modal.getInstance(elem)`, você pode chamar o método `.close()` nessa instância para fechar o modal.
   - Isso fecha o modal e o remove da visualização do usuário.

Resumindo, o código começa inicializando os modais usando o Materialize CSS quando o DOM estiver carregado. Em seguida, ele obtém uma instância específica de um modal (possivelmente com base em um determinado elemento). Por fim, ele fecha essa instância do modal usando o método `.close()`, o que resulta no fechamento do modal na página.

Lembre-se de que, para que esse código funcione corretamente, é necessário ter o Materialize CSS e suas dependências incluídas na página, bem como garantir que a variável `elem` seja definida adequadamente antes de usar o método `M.Modal.getInstance()`.

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
        <li data-js="user-name" class="grey-text text-lighten-1"><!-- class="hide" -->
         <span> Olá, Visitante</span>
        </li>
        
      </ul>

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

const user = null

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
      displayUsername.textContent = user
        ? `Ola, ${user.displayName}`
        : 'Olá, Visitante'
      displayUsername.classList.remove('hide')
      return
    }
    link.classList.add('hide')
  })

  user
    ? logoutMessage.classList.add('hide')
    : logoutMessage.classList.remove('hide')
}

const closeModal = modal => M.Modal.getInstance(modal).close()

const initModals = () => {
  const modals = document.querySelectorAll('[data-js="modal"]')
  M.Modal.init(modals)
}

const initAccordions = () => {
  const accordions = document.querySelectorAll('[data-js="collapsible"]')
  M.Collapsible.init(accordions)
}

const initApp = (user = {}) => {
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

  const ulPhrasesList = document.querySelector('[data-js="phrases-list"]')
  const phrasesLis = document.createElement('li')
}

const loginGoogle = async () => {
  const modal = document.querySelector('[data-modal="login"]')
  try {
    const result = await signInWithPopup(auth, provider)
    initApp(result.user)
    closeModal(modal)
  } catch (error) {
    log(error)
  }
}

buttonGoogle.addEventListener('click', loginGoogle)

initModals()
initApp(user)

```

# Referencia

[Modals - Materialize](https://materializecss.com/modals.html)
