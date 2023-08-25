<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Ajustando a função onSnapshot - Aula 03-31

### Resumo

### Manipular Evento de Clique

O evento `event.onclick` é uma forma de adicionar um manipulador de evento diretamente a um elemento HTML usando a propriedade `onclick`. Isso permite que você execute uma função específica quando um evento de clique ocorre nesse elemento.

Aqui está uma explicação mais detalhada:

- **Evento de Clique (`click`)**: O evento de clique ocorre quando o usuário clica com o botão esquerdo do mouse em um elemento específico, como um botão, um link ou qualquer outro elemento interativo.

- **Manipulador de Evento**: Um manipulador de evento é uma função que é executada quando um determinado evento ocorre. No contexto do evento de clique, o manipulador de evento é executado quando o usuário clica no elemento.

- **`onclick`**: `onclick` é uma propriedade que pode ser usada em um elemento HTML para atribuir um manipulador de evento ao evento de clique. Você pode definir essa propriedade como uma função que será chamada quando o clique ocorrer.

Aqui está um exemplo simples usando `onclick`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo de onclick</title>
</head>
<body>

<button id="meuBotao">Clique em mim</button>

<script>
// Obtém o elemento do botão
const botao = document.getElementById("meuBotao");

// Define o manipulador de evento usando onclick
botao.onclick = function() {
    alert("Você clicou no botão!");
};
</script>

</body>
</html>
```

Neste exemplo, estamos selecionando um botão com o ID "meuBotao" e atribuindo a ele um manipulador de evento usando `onclick`. Quando o botão é clicado, a função anônima dentro de `onclick` é executada e exibe um alerta.

Vale ressaltar que, embora `onclick` seja uma maneira fácil de adicionar um manipulador de evento, ela tem algumas limitações. Por exemplo, se você definir `onclick` novamente em um elemento, ele substituirá qualquer manipulador anterior, o que pode levar a conflitos. Em situações mais complexas, pode ser mais conveniente usar o método `addEventListener` para adicionar e gerenciar manipuladores de eventos de forma mais flexível.

### Removendo o Evento de Clique

Você pode remover um evento de clique atribuindo `null` à propriedade `onclick`. Isso basicamente remove o manipulador de evento associado ao elemento. Aqui está como você pode fazer isso:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Removendo evento de clique</title>
</head>
<body>

<button id="meuBotao">Clique em mim</button>

<script>
// Obtém o elemento do botão
const botao = document.getElementById("meuBotao");

// Define o manipulador de evento usando onclick
botao.onclick = function() {
    alert("Você clicou no botão!");
};

// Após um tempo, remova o manipulador de evento
setTimeout(function() {
    botao.onclick = null;
    alert("O manipulador de evento de clique foi removido.");
}, 3000); // Remove após 3 segundos
</script>

</body>
</html>
```

Neste exemplo, estamos definindo um manipulador de evento de clique usando `onclick`. Depois de aguardar 3 segundos, estamos removendo o manipulador de evento atribuindo `null` à propriedade `onclick`. Isso significa que, após a remoção, o botão não terá mais nenhum comportamento de clique associado a ele.

### Removendo o Escutador de Evento do onSnapshot

Para remover o escutador de evento do `onSnapshot()` no Firebase Firestore, você precisa armazenar uma referência à função que você passou para `onSnapshot()`. Em seguida, você pode chamar essa função para cancelar o registro do escutador.

Aqui está como você pode fazer isso:

```javascript
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getFirestore, collection, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';

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

// Referência à coleção
const usersCollectionRef = collection(db, 'users');

// Função para o onSnapshot()
function startListening() {
  return onSnapshot(usersCollectionRef, (snapshot) => {
    snapshot.forEach((doc) => {
      const data = doc.data();
      console.log('Documento:', data);
    });
  });
}

// Iniciar escutador
const unsubscribe = startListening();

// Para remover o escutador de evento
unsubscribe(); // Isso irá parar o escutador e não ouviremos mais as alterações na coleção.
```

Neste exemplo, a função `startListening()` inicia o escutador usando `onSnapshot()` e retorna a função de cancelamento `unsubscribe`. Chamar `unsubscribe()` irá parar o escutador e não receberemos mais atualizações quando os dados na coleção mudarem.

Lembre-se de ajustar os campos `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, etc., com as informações do seu projeto Firebase e personalize a referência à coleção de acordo com sua estrutura de dados.

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
...

const logoutGoogle = async (unsubscribe) => {
  try {
    await signOut(auth)
    unsubscribe()
    log("Usuário deslogado com sucesso.")
  } catch (error) {
    log("logoutGoogle | Erro ao fazer logout: ", error)
  }
}

const handleAuthStateChanged = (user = {}) => {
  const linkLogout = document.querySelector('[data-js="logout"]')
..
  //se usuário não está logado
  if (!user) {
...
    linkLogout.onclick = null
...
    return
  }

  //se usuário estiver logado
...
  const unsubscribe = onSnapshot(
    collectionPhrases,
    (snapshot) => {
      ...

      snapshot.docChanges().forEach(({ type, doc }) => {
        ...
    },
    (error) => log(error)
  )
  linkLogout.onclick =  () => logoutGoogle(unsubscribe)
  ...
}

onAuthStateChanged(auth, handleAuthStateChanged)
```
