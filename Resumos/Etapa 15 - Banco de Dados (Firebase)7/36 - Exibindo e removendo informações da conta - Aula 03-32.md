<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Exibindo e removendo informações da conta - Aula 03-32

### Resumo

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
const handleSetInfoUser = async (user) => {
  const infoUserExist = document.querySelector('[data-js="info-user"]')
  ...

  if (!user) {
    ...
    infoUserExist?.remove()
    return
  }
}

const showInfoAccount = () => {
  const { displayName, email } = getAuth(app).currentUser
  const infoUserContainer = document.querySelector('[data-js="account-details"]')
  const infoUser = document.createElement('p')

  infoUserContainer.textContent = ''
  infoUser.setAttribute('data-js', 'info-user')
  infoUser.textContent = sanitize(`${displayName} | ${email}`)

  infoUserContainer.append(infoUser)
}

const handleAuthStateChanged = (user = {}) => {
  const linkShowInfoAccount = document.querySelector('[data-js="account-link"')
  ...

handleSetInfoUser(user)

  //se usuário não está logado remove eventos
  if (!user) {
    linkShowInfoAccount.removeEventListener("click", showInfoAccount)
    ...
    return
  }

  //se usuário estiver logado
  
  linkShowInfoAccount.addEventListener("click", showInfoAccount)
  
  ...
}
```
