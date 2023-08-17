<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Inicializando modais do Materialize - Aula 03-15

### Resumo

HTML:

```html
<!-- Modal Trigger -->
  <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
```

Javascript:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });
```

Esse código JavaScript e HTML está sendo usado para inicializar e controlar modais (janelas modais) usando o framework Materialize CSS. Modais são caixas de diálogo que aparecem sobre o conteúdo da página, geralmente para exibir informações adicionais, capturar entrada do usuário ou interagir com o usuário de maneira mais focada. Vamos analisar o código em partes:

HTML:

1. **Modal Trigger**: O link `<a>` com a classe "modal-trigger" é usado como o gatilho para abrir o modal. Quando esse link é clicado, o modal associado será exibido.

2. **Modal Structure**: Aqui está a estrutura do modal em si. O elemento `<div>` com o ID "modal1" é o conteúdo do modal. Ele contém um título (elemento `<h4>`) e um parágrafo (elemento `<p>`) como conteúdo. Além disso, há uma seção para o rodapé do modal, onde um botão "Agree" é colocado.

JavaScript:

1. **DOMContentLoaded Event Listener**: O código JavaScript é envolvido por um evento "DOMContentLoaded". Isso garante que o código só será executado quando o DOM (Document Object Model) da página estiver completamente carregado.

2. **Selecionando Elementos Modais**: `document.querySelectorAll('.modal')` seleciona todos os elementos com a classe "modal". Isso pega todos os elementos `<div>` que representam os modais na página.

3. **Inicialização do Modal**: `M.Modal.init(elems, options)` é usado para inicializar os modais selecionados. Aqui, `elems` são os elementos modais selecionados, e `options` representa as opções de configuração do modal, embora no código fornecido não haja uma variável `options` definida.

No geral, esse código cria um modal com um gatilho que, quando clicado, exibirá o conteúdo do modal, incluindo o título e o parágrafo. O rodapé do modal contém um botão "Agree". O JavaScript é responsável por selecionar todos os elementos modais, inicializá-los usando o Materialize CSS e permitir que os modais sejam abertos quando o gatilho é clicado.

Lembre-se de que, para que esse código funcione corretamente, você deve ter o Materialize CSS e suas dependências (como o jQuery) incluídos em seu projeto. Certifique-se também de ter os scripts de inicialização do Materialize CSS configurados adequadamente.

### Códigos Usados

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

  <div data-js="modal" data-js="modal-login" id="modal-login" class="modal blue-grey darken-4 blue-grey-text text-lighten-5">
    <div class="modal-content">
      <div class="modal-close-buttom">
        <button class="btn red darken-1 z-depth-0 modal-close ">x</button>
      </div>
      <h4>Login</h4><br />
      <button data-js="button-form" class="btn red darken-1 z-depth-0">Entrar com Google</button>
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
import {} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js'
// https://firebase.google.com/docs/web/setup#available-libraries
import {} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js'
import {} from 'https://www.gstatic.com/firebasejs/9.66/firebase-auth.js'

const log = (...arg) => console.log(...arg)

const user = { loggedIn: false }

const hideOrShowLinksNav = user => {
  const navLinks = [...document.querySelector('[data-js="nav-ul"]').children]
  const logoutMessage = document.querySelector('[data-js="logout-message"]')

  navLinks.forEach(link => {
    const linkShouldBeVisible = link.dataset.js.includes(
      user.loggedIn ? 'logged-in' : 'logged-out'
    )

    if (linkShouldBeVisible) {
      link.classList.remove('hide')
      logoutMessage.classList.remove('hide')
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

const initApp = (user = {}) => {
  initModals()

  if (!user.loggedIn) {
    log('Usuário não está logado')
    hideOrShowLinksNav(user)
    return
  }

  log('Usuário logado!')
  hideOrShowLinksNav(user)
}

initApp(user)


```

# Referencia

[Doc - Materialize](https://materializecss.com/)
