<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Refatorando a aplicação - Aula 03-36

### Resumo

Algumas dicas e diretrizes gerais que podem ser aplicadas ao refatorar uma aplicação:

1. **Identificar Objetivos**: Antes de começar a refatoração, defina claramente quais são os objetivos da sua refatoração. Você quer melhorar o desempenho, tornar o código mais legível, adicionar recursos novos, ou algo mais?

2. **Análise do Código Existente**: Analise o código existente para identificar áreas que precisam ser melhoradas. Isso pode incluir trechos de código repetitivos, complexidade desnecessária, má organização, entre outros.

3. **Dividir em Funções/Componentes**: Divida o código em funções ou componentes menores e mais coesos. Isso torna o código mais legível e mais fácil de manter.

4. **Nomenclatura Descritiva**: Use nomes de variáveis, funções e classes descritivos. Isso torna o código mais fácil de entender.

5. **Remover Código Morto**: Procure por código que não é mais usado e remova-o. Isso ajuda a reduzir a complexidade e o tamanho do código.

6. **Evitar Duplicação**: Elimine código duplicado. Se você tem blocos semelhantes de código em vários lugares, considere criar uma função para esse código.

7. **Melhorar a Estrutura de Dados**: Se você está lidando com muitos dados, considere utilizar estruturas de dados apropriadas, como arrays ou objetos, para armazenar e manipular esses dados de forma mais eficiente.

8. **Comentários e Documentação**: Se o código não for autoexplicativo, adicione comentários para explicar a lógica complexa ou partes importantes do código.

9. **Testes**: Certifique-se de que sua aplicação esteja adequadamente testada. Isso ajuda a evitar regressões ao fazer alterações.

10. **Melhorias de Desempenho**: Se o desempenho for uma preocupação, procure por gargalos e otimize os trechos de código que são mais críticos em termos de desempenho.

Lembre-se de que a refatoração é um processo contínuo e que pode ser feito em pequenos passos. Sempre teste cuidadosamente suas alterações para garantir que elas não causem problemas inesperados.

Se você puder fornecer mais detalhes sobre a aplicação específica que você deseja refatorar, posso fornecer orientações mais direcionadas.

## Fumção to()

A função `to`, parece usa uma abordagem para lidar com promessas de uma maneira mais concisa e eliminar a necessidade de usar blocos `try/catch` para capturar erros. Vou explicar como essa função funciona:

```javascript
const to = (promisse) => promisse
  .then((result) => [null, result])
  .catch((error) => [error]);
```

A função `to` recebe uma promessa como argumento. Ela aproveita a cadeia de métodos das promessas para transformar a promessa original em um array com dois elementos: o primeiro elemento é o erro (caso ocorra) e o segundo elemento é o resultado da promessa (caso seja bem-sucedida).

Vamos analisar as partes dessa função:

1. **`promisse`**: Este é o argumento que representa a promessa que você deseja processar.

2. **`.then((result) => [null, result])`**: Aqui, o método `.then()` é encadeado à promessa. O que ele faz é pegar o resultado da promessa quando ela é resolvida (quando tudo correu bem) e transformá-lo em um array com dois elementos. O primeiro elemento é `null` para indicar que não houve erro, e o segundo elemento é o resultado da promessa.

3. **`.catch((error) => [error])`**: O método `.catch()` é encadeado à promessa. Isso permite que você capture qualquer erro que ocorra durante a resolução da promessa. Ele transforma o erro em um array com um único elemento, que é o erro em si.

Portanto, o resultado geral dessa função é um array que pode conter um erro ou um resultado, dependendo de como a promessa foi resolvida. Isso permite que você evite usar blocos `try/catch` para capturar erros e, em vez disso, use uma estrutura de dados mais simples para lidar com ambos os cenários (sucesso e erro) de forma consistente.

Aqui está um exemplo de como você pode usar essa função:

```javascript
const minhaPromessa = fetch('https://api.example.com/data');

const [erro, resultado] = to(minhaPromessa);

if (erro) {
  console.error('Ocorreu um erro:', erro);
} else {
  console.log('Resultado:', resultado);
}
```

## Exemplo de Uso da Função to()

Neste exemplo, a função `to` é usada para processar a promessa retornada por `fetch`. O array resultante é desestruturado para acessar o erro (se houver) ou o resultado da promessa, permitindo que você lide com ambos os casos de maneira mais elegante e sem o uso de `try/catch`.

No código abaixo, a função `to` é usada para lidar com o processo de login usando a autenticação do Google. A função `loginGoogle` é uma função assíncrona que utiliza a função `to` para tratar possíveis erros durante o processo de autenticação. Vou explicar passo a passo como isso funciona:

```javascript
const loginGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const [error] = await to(signInWithRedirect(auth, provider));
  if (error) {
    log(":( | Houve um problema ao fazer login.");
  }
};
```

1. **`const provider = new GoogleAuthProvider();`**: Aqui, um objeto `GoogleAuthProvider` é criado. Esse objeto será usado para fornecer os detalhes de autenticação ao usar a autenticação do Google.

2. **`const [error] = await to(signInWithRedirect(auth, provider));`**: Nesta linha, a função `signInWithRedirect` é chamada para iniciar o processo de autenticação com o provedor Google. A função `to` é usada para capturar o resultado da promessa retornada por `signInWithRedirect`. Como explicado anteriormente, o array retornado por `to` conterá `[null, resultado]` se a promessa for bem-sucedida ou `[erro]` se ocorrer um erro.

3. **`if (error) { log(":( | Houve um problema ao fazer login."); }`**: Aqui, um condicional verifica se o array `error` (capturado a partir do resultado da função `to`) não é nulo. Se não for nulo, isso indica que ocorreu um erro durante a autenticação. Nesse caso, a mensagem de erro é registrada usando a função `log`.

Em resumo, o código está tentando realizar um login usando a autenticação do Google. Ele usa a função `to` para capturar possíveis erros durante o processo de autenticação, permitindo que você lide com falhas de autenticação de maneira mais controlada e informativa. Se ocorrer um erro, a mensagem de erro é registrada no console.

Lembre-se de que a função `to` foi definida anteriormente para transformar o resultado de uma promessa em um array contendo informações sobre erro e resultado, permitindo uma abordagem mais concisa para tratar erros em operações assíncronas.

# Código da Aplicação

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
      <h4>Detalhes da conta</h4>
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
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js"
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  doc,
  getDoc,
  addDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"
import {} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js"

//funções de uso geral
const log = (...arg) => console.log(...arg)
const sanitize = (string) => DOMPurify.sanitize(string)

//variaveis de escopo global
const ulCollapsible = document.querySelector('[data-js="phrases-list"]')
const addPhraseForm = document.querySelector('[data-js="add-phrase-form"]')
const linkShowInfoAccount = document.querySelector('[data-js="account-link"')
const linkLogout = document.querySelector('[data-js="logout"]')
const buttonGoogle = document.querySelector('[data-js="button-google"]')
const modals = document.querySelectorAll('[data-js="modal"]')
const fragment = document.createDocumentFragment()

//configuração e conexão com serviços de banco e autenticação
const firebaseConfig = FIREBASECONFIG
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

const collectionPhrases = collection(db, "frases")
//TODO: removeLoginMessage
const removeLoginMessage = async (user) => {
  const displayUsername = document.querySelector('[data-js="user-name"]')
  const loginMessageExists = document.querySelector('[data-js="login-message"]')

  loginMessageExists?.remove() //remove paragrafo para evitar duplicata

  if (!user) {
    const phraseContainer = document.querySelector(
      '[data-js="phrases-container"]'
    )
    const loginMessage = document.createElement("p")
    const infoUserExist = document.querySelector('[data-js="info-user"]')
    loginMessage.textContent = "Faça login para ver as frases"
    loginMessage.classList.add("grey-text", "center-align")
    loginMessage.setAttribute("data-js", "login-message")

    displayUsername.textContent = "Olá, Visitante"
    phraseContainer.prepend(loginMessage)
    infoUserExist?.remove()
    return
  }

  //adiciona nome do usuário no menu
  displayUsername.textContent = user.displayName
}

const showInfoAccount = (user) => {
  const { displayName, email } = user
  const infoUserContainer = document.querySelector(
    '[data-js="account-details"]'
  )
  const infoUser = document.createElement("p")

  infoUserContainer.textContent = ""
  infoUser.setAttribute("data-js", "info-user")
  infoUser.textContent = `${displayName} | ${email}`

  infoUserContainer.append(infoUser)
}

// prettier-ignore
const to = (promisse) => promisse
  .then((result) => [null, result])
  .catch((error) => [error])

//TODO: addPhrase
const addPhrase = async (e, user) => {
  e.preventDefault()
  const phase = sanitize(e.target.phrase.value)
  const title = sanitize(e.target.title.value)

  const [error] = await to(
    addDoc(collectionPhrases, {
      movie_title: title,
      message: phase,
      userId: user.uid,
      isPublic: false,
      addedBy: user.displayName
    })
  )

  if (error) {
    log(":( | Hove um problema na adicição da frase.")
    return
  }

  e.target.reset()
  e.target.title.focus()
}
//TODO: Login
const loginGoogle = async () => {
  const provider = new GoogleAuthProvider()
  const [error] = await to(signInWithRedirect(auth, provider))
  if (error) {
    log(":( | Houve um problema ao fazer login.")
  }
}
//TODO: Logout
const logoutGoogle = async (unsubscribe) => {
  const [error] = await to(signOut(auth))

  if (error) {
    log(":( | Houve um problema ao fazer logout.")
    return
  }
  unsubscribe()
}

const toggleIcons = (e) => {
  const allIcons = document.querySelectorAll("i")
  const id = e.target.dataset.id
  if (id) {
    allIcons.forEach((icon) =>
      icon.dataset.id === id
        ? icon.classList.toggle("active")
        : icon.classList.remove("active")
    )
  }
}

const closeModal = (modal) => M.Modal.getInstance(modal).close()

const initModals = (modals) => M.Modal.init(modals)

const initCollapsibles = (collapsible) => M.Collapsible.init(collapsible)

//TODO: renderPhases
const renderPhases = (doc) => {
  const { id, movie_title, message } = doc
  const phraseLi = document.createElement("li")
  phraseLi.setAttribute("data-id", `${id}`)

  const iconExpand = document.createElement("i")
  iconExpand.setAttribute("class", "material-icons right")
  iconExpand.setAttribute("data-id", `${id}`)
  iconExpand.textContent = "expand_more"

  const phraseHeader = document.createElement("div")
  phraseHeader.setAttribute("class", "collapsible-header cyan lighten-5")
  phraseHeader.setAttribute("data-id", `${id}`)
  phraseHeader.textContent = movie_title
  phraseHeader.append(iconExpand)

  const phraseBody = document.createElement("div")
  phraseBody.setAttribute("class", "collapsible-body blue lighten-4")

  const phraseSpan = document.createElement("span")
  phraseSpan.textContent = message
  phraseBody.append(phraseSpan)

  phraseLi.append(phraseHeader, phraseBody)
  fragment.append(phraseLi)
}

const handleRedirectResult = async () => {
  const [error] = await to(getRedirectResult(auth))
  if (error) {
    log(":( | Houve um problema no redirecionamento.")
    return
  }
}
//TODO: renderLinks
const renderLinks = ({ userExists }) => {
  const lis = [...document.querySelector('[data-js="nav-ul"]').children]
  lis.forEach((li) => {
    const liToBeVisible = li.dataset.js.includes(
      userExists ? "logged-in" : "logged-out"
    )

    if (liToBeVisible) {
      li.classList.remove("hide")

      return
    }
    li.classList.add("hide")
  })
}

const disableEventListner = () => {
  addPhraseForm.onsubmit = null
  linkShowInfoAccount.removeEventListener("click", showInfoAccount)
  linkLogout.onclick = null
  buttonGoogle.addEventListener("click", loginGoogle)
  ulCollapsible.innerHTML = ""
}

const enableEventListener = (user, unsubscribe) => {
  addPhraseForm.onsubmit = (e) => addPhrase(e, user)
  linkShowInfoAccount.addEventListener("click", showInfoAccount)
  ulCollapsible.addEventListener("click", toggleIcons)
  linkLogout.onclick = () => logoutGoogle(unsubscribe)
  buttonGoogle.removeEventListener("click", loginGoogle)
}
//TODO: createUserDoc
const createUserDoc = async (user) => {
  const userDocRef = doc(db, "users", user.uid)
  const [error, docSnapshot] = await to(getDoc(userDocRef))

  if (error) {
    log(":( | Houve um problema ao tentar cadastrar o usuário.")
    return
  }

  if (!docSnapshot.exists()) {
    await setDoc(userDocRef, {
      displayName: user.displayName,
      email: user.email,
      userId: user.uid
    })
  }
}
//TODO: signUser
const signUser = (user) => {
  createUserDoc({
    displayName: user.displayName,
    uid: user.uid,
    email: user.email
  })

  const userPhrases = query(collectionPhrases, where("userId", "==", user.uid))
  const unsubscribe = onSnapshot(
    userPhrases,
    (snapshot) => {
      snapshot.docChanges().forEach(({ type, doc }) => {
        const liByRemove = document.querySelector(`[data-id="${doc.id}"]`)
        const movieTitle = sanitize(doc.data().movie_title)
        const message = sanitize(doc.data().message)
        const docId = sanitize(doc.id)
        const docEnough = {
          id: docId,
          movie_title: movieTitle,
          message: message
        }

        if (type === "removed") {
          liByRemove?.remove()
          return
        }

        renderPhases(docEnough)
      })
      ulCollapsible.append(fragment)
    },
    (error) => log(":( | Houve um problema para ler os dados no banco.")
  )

  enableEventListener(user, unsubscribe)
}

const handleAuthStateChanged = async (user) => {
  const userSanitezed = user
    ? {
        displayName: sanitize(user.displayName),
        uid: sanitize(user.uid),
        email: sanitize(user.email)
      }
    : null

  handleRedirectResult()
  renderLinks({ userExists: !!userSanitezed })
  removeLoginMessage(userSanitezed)

  //se usuário não está logado remove eventos
  if (!userSanitezed) {
    disableEventListner()
    return
  }

  //se usuário estiver logado
  signUser(userSanitezed)

  initCollapsibles(ulCollapsible)
}

onAuthStateChanged(auth, handleAuthStateChanged)
initModals(modals)

```
