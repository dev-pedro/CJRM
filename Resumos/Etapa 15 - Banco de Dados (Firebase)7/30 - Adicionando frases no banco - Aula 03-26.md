<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Adicionando frases no banco - Aula 03-26

### Resumo

Para salvar dados no Firestore, você precisará seguir os seguintes passos:

1. **Configurar o Firebase:**
   Certifique-se de ter configurado corretamente o Firebase em seu projeto. Isso inclui importar os módulos apropriados, inicializar o Firebase com sua configuração e obter uma referência à instância do Firestore.

2. **Obter uma Referência à Coleção ou Documento:**
   Antes de salvar os dados, você precisa decidir se deseja armazená-los em um documento ou em uma coleção. Em seguida, obtenha uma referência ao documento ou à coleção onde deseja salvar os dados.

3. **Salvar os Dados:**
   Use o método `set()` para salvar os dados em um documento ou `add()` para adicionar um novo documento a uma coleção.

Aqui está um exemplo usando o Firestore e os imports que você mencionou:

```javascript
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getFirestore, doc, setDoc, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';

// Configuração do Firebase (mesmo código da configuração)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exemplo de como salvar dados em um documento
async function saveDataToDocument() {
  const userRef = doc(db, 'users', 'user_id');
  const data = {
    name: 'John Doe',
    email: 'johndoe@example.com'
  };

  try {
    await setDoc(userRef, data);
    console.log('Dados salvos com sucesso em um documento.');
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
  }
}

// Exemplo de como adicionar dados a uma coleção
async function addDataToCollection() {
  const usersCollectionRef = collection(db, 'users');
  const data = {
    name: 'Jane Smith',
    email: 'janesmith@example.com'
  };

  try {
    await addDoc(usersCollectionRef, data);
    console.log('Dados adicionados com sucesso à coleção.');
  } catch (error) {
    console.error('Erro ao adicionar dados:', error);
  }
}

// Chame as funções para salvar os dados
saveDataToDocument();
addDataToCollection();
```

Certifique-se de personalizar os campos `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, etc., com as informações do seu projeto Firebase, e ajuste os caminhos da coleção e do documento conforme necessário.

# Código Usado

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
  <title>Firebase Auth</title>
</head>

<body class="grey lighten-5">
  <nav class="z-depth-0 grey darken-4">
    <div class="nav-wrapper container">
      <a href="#"><img src="img/logo.svg" class="logo"></a>

      <ul class="right show-on-medium-and-down">
        <li data-js="user-name" class="blue-text text-lighten-3"><!-- class="hide" -->
          <span> Olá, Visitante</span>
        </li>

      </ul>

      <ul data-js="nav-ul" class="right hide-on-med-and-down">
        <li data-js="logged-in" class="hide"><!-- class="hide" -->
          <a href="#" class="blue-grey-text text-lighten-5 modal-trigger" data-target="modal-add-phrase">Adicionar
            frase</a>
        </li>

        <li data-js="logged-in" class="hide"><!-- class="hide" -->
          <a data-js="account-link" href="#" class="blue-grey-text text-lighten-5 modal-trigger"
            data-target="modal-account">Conta</a>
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

  <div data-js="modal" data-modal="login" id="modal-login"
    class="modal blue-grey darken-4 blue-grey-text text-lighten-5">
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

  <div data-js="modal" data-modal="add-phrase" id="modal-add-phrase" class="modal blue-grey darken-4 blue-grey-text text-lighten-5">
    <div class="modal-content">
      <div class="modal-close-buttom">
        <button class="btn red darken-1 z-depth-0 modal-close ">x</button>
      </div>
      <h4>Adicionar frase</h4><br />

      <form data-js="add-phrase-form">
        <div class="input-field">
          <input data-js="input-title" class="blue-grey-text text-lighten-5" type="text" name="title" required>
          <label class="active" for="title">Nome do filme</label>
        </div>

        <div class="input-field">
          <input data-js="input-phrase" class="blue-grey-text text-lighten-5" name="phrase" type="text" required></input>
          <label for="phrase">Frase</label>
        </div>

        <button class="btn red darken-1 z-depth-0">Adicionar</button>
      </form>
    </div>
  </div>

  <div data-js="phrases-container" class="container phrases-container">

    <ul data-js="phrases-list" class="collapsible"></ul>

  </div>

  <script src="firebaseConfig.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.3.8/purify.min.js" integrity="sha512-M72KfQy4kPuLYC6CeTrN0eA17U1lXEMrr5qEJC/40CLdZGC3HpwPS0esQLqBHnxty2FIcuNdP9EqwSOCLEVJXQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
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

.collapsible-header{
  display: flex;
  justify-content: space-between;
}

.material-icons {
  transform: rotate(0deg);
  transition: all 0.3s ease-in-out;
}

.material-icons.active  {
  transform: rotate(180deg);
}
```

Javascript:

```javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import {} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";

const log = (...arg) => console.log(...arg);

const firebaseConfig = FIREBASECONFIG;

const buttonGoogle = document.querySelector('[data-js="button-google"]');
const ulPhrasesList = document.querySelector('[data-js="phrases-list"]');
const modals = document.querySelectorAll('[data-js="modal"]');

const displayUsername = document.querySelector('[data-js="user-name"]');
const linkLogout = document.querySelector('[data-js="logout"]');
const phrasesContainer = document.querySelector(
  '[data-js="phrases-container"]'
);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const collectionPhrases = collection(db, "frases");

const loginMessage = (user) => {
  const loginMessageExists = document.querySelector(
    '[data-js="login-message"]'
  );
  loginMessageExists?.remove();

  if (!user) {
    const loginMessage = document.createElement("p");
    loginMessage.textContent = "Faça login para ver as frases";
    loginMessage.classList.add("grey-text", "center-align");
    loginMessage.setAttribute("data-js", "login-message");

    phrasesContainer.prepend(loginMessage);
  }
};

const sanitize = string => DOMPurify.sanitize(string)

const addPhrase = async (e) => {
  e.preventDefault();
  const phase = sanitize(e.target.phrase.value);
  const title = sanitize(e.target.title.value);

  try {
    const docCreate = await addDoc(collectionPhrases, {
      movie_title: `${title}`,
      message: `${phase}`
    });
    log("Documento criado com id:", docCreate.id);
  } catch (error) {
    log("Problema na adicição do document: ", error);
  }
  e.target.reset();
  e.target.title.focus();
};

const showInfoAccount = () => {
  const { displayName, email } = getAuth(app).currentUser;
  const accountDetails = document.querySelector('[data-js="account-details"]');

  accountDetails.textContent = `${displayName} | ${email}`;
};

const handleAuthStateChanged = (user) => {
  const navLinks = [...document.querySelector('[data-js="nav-ul"]').children];
  const addPhraseForm = document.querySelector('[data-js="add-phrase-form"]');
  const linkShowInfoAccount = document.querySelector('[data-js="account-link"');

  navLinks.forEach((link) => {
    const linkShouldBeVisible = link.dataset.js.includes(
      user ? "logged-in" : "logged-out"
    );

    if (linkShouldBeVisible) {
      link.classList.remove("hide");
      displayUsername.textContent = user
        ? `Ola, ${user.displayName}`
        : "Olá, Visitante";
      // displayUsername.classList.remove('hide')
      return;
    }
    link.classList.add("hide");
  });

  loginMessage(user);

  if (!user) {
    log("remove eventos");
    addPhraseForm.removeEventListener("submit", addPhrase);
    linkShowInfoAccount.removeEventListener("click", showInfoAccount);
    return;
  }

  addPhraseForm.addEventListener("submit", addPhrase);
  linkShowInfoAccount.addEventListener("click", showInfoAccount);
};

const closeModal = (modal) => M.Modal.getInstance(modal).close();

const initModals = () => M.Modal.init(modals);

const initCollapsibles = () => M.Collapsible.init(ulPhrasesList);

const loginGoogle = async () => {
  const modal = document.querySelector('[data-modal="login"]');
  try {
    await signInWithPopup(auth, provider);

    closeModal(modal);
  } catch (error) {
    log(error);
  }
};

const logoutGoogle = async () => {
  try {
    await signOut(auth);
    log("Usuário deslogado com sucesso.");
  } catch (error) {
    log("Erro ao fazer logout:", error);
  }
};

const toggleIcons = (e) => {
  const allIcons = document.querySelectorAll(".material-icons");
  const id = e.target.dataset.id;

  allIcons.forEach((icon) =>
    id === icon.dataset.js ? icon.classList.toggle("active") : icon.classList.remove("active")
  );
}

const initApp = (user = {}) => {
  if (!user) {
    log("Usuário não está logado");
    handleAuthStateChanged(user);
    ulPhrasesList.textContent = "";
    return;
  }
  log("Usuário logado!");
  handleAuthStateChanged(user);

  const unsubscribe = onSnapshot(
    collectionPhrases,
    (snapshot) => {
      snapshot.docChanges().forEach(({ type, doc }) => {
        const [id, { movie_title, message }] = [doc.id, doc.data()];

        if (type === "removed") {
          const liByRemove = document.querySelector(`[data-id="${id}"]`);
          liByRemove?.remove();
          return;
        }
        const documentFragment = document.createDocumentFragment();

        const phraseLi = document.createElement("li");
        phraseLi.setAttribute("data-id", `${id}`);

        const iconExpand = document.createElement("i");
        iconExpand.setAttribute("class", "material-icons right");
        iconExpand.setAttribute("data-js", `${id}`);
        iconExpand.textContent = "expand_more";

        const phraseHeader = document.createElement("div");
        phraseHeader.setAttribute("class", "collapsible-header cyan lighten-5");
        phraseHeader.setAttribute("data-id", `${id}`);
        phraseHeader.textContent = movie_title;
        phraseHeader.append(iconExpand);

        const phraseBody = document.createElement("div");
        phraseBody.setAttribute("class", "collapsible-body blue lighten-4");

        const phraseSpan = document.createElement("span");
        phraseSpan.textContent = message;
        phraseBody.append(phraseSpan);

        phraseLi.append(phraseHeader, phraseBody);
        documentFragment.append(phraseLi);

        ulPhrasesList.append(documentFragment);
      });
    },
    (error) => log(error)
  );

  initCollapsibles();
};

onAuthStateChanged(auth, initApp);
buttonGoogle.addEventListener("click", loginGoogle);
linkLogout.addEventListener("click", logoutGoogle);
ulPhrasesList.addEventListener("click", toggleIcons);

initModals();
```

# Referencias

[Materialize](https://materializecss.com/)

[DOMPurify - 2.3.8](https://cdnjs.com/libraries/dompurify/2.3.8)

[Firestore ](https://firebase.google.com/docs/firestore?authuser=0&hl=pt)
