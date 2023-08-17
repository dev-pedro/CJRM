<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Renderizando primeiros elementos e conhecendo a doc do Materialize - Aula 03-14

### Resumo

O Materialize CSS é um framework de design de código aberto que implementa os princípios de design do Material Design, criado pela Google. O Material Design é um conjunto de diretrizes de design que visa criar uma experiência de usuário consistente e agradável, com ênfase em elementos visuais realistas, animações sutis e uma hierarquia clara de informações.

O Materialize CSS oferece uma coleção de componentes pré-estilizados e prontos para uso, como botões, formulários, tipografia, ícones, barras de navegação, cards e muito mais. Ele permite que os desenvolvedores criem interfaces web atraentes e responsivas de maneira relativamente simples, sem a necessidade de criar estilos personalizados a partir do zero.

Aqui estão algumas características-chave do Materialize CSS:

1. **Grid System**: O framework oferece um sistema de grid responsivo que facilita a criação de layouts flexíveis para diferentes tamanhos de tela.

2. **Componentes Pré-Estilizados**: Uma variedade de componentes está disponível, como botões, cards, modais, barras de navegação, abas, caixas de seleção, entre outros. Esses componentes já têm estilos consistentes e estão prontos para serem incorporados às páginas.

3. **Tipografia e Ícones**: Materialize CSS oferece estilos tipográficos consistentes, além de uma seleção de ícones Material Design que podem ser facilmente incorporados em projetos.

4. **Animacões e Efeitos**: O framework incorpora animações suaves e efeitos de transição para melhorar a experiência do usuário e dar vida às interfaces.

5. **Responsividade**: O design responsivo é um aspecto importante do Materialize CSS, permitindo que as páginas se ajustem bem a diferentes dispositivos e tamanhos de tela.

6. **Personalização**: Embora o Materialize CSS ofereça estilos predefinidos, é possível personalizar cores, tipografia e outros aspectos para se adequarem à identidade visual do projeto.

7. **Documentação Detalhada**: O Materialize CSS possui uma documentação abrangente que descreve como usar cada componente e recurso, facilitando o processo de aprendizado e implementação.

Lembrando que, até a minha data de corte em setembro de 2021, essas informações são precisas. No entanto, pode haver atualizações ou novas versões do Materialize CSS que não foram abordadas aqui. Se estiver buscando informações mais recentes, recomendo visitar o site oficial do Materialize CSS ou suas fontes de documentação mais recentes.

### Frameworks e Bibliotecas - Desatualizadas

Considerando que o Materialize CSS não teve atualizações recentes desde junho de 2020 **até a data deste resumo (ago/2023)**, é importante avaliar cuidadosamente o uso de ferramentas mais atualizadas para projetos de desenvolvimento web. Utilizar frameworks e bibliotecas mais recentes pode oferecer vantagens significativas, como acesso a recursos mais modernos, melhorias de desempenho, segurança aprimorada e suporte contínuo.

Optar por frameworks ativamente mantidos e atualizados ajuda a garantir que você esteja seguindo as melhores práticas de desenvolvimento e aproveitando as últimas tecnologias disponíveis. Frameworks como Bootstrap, Foundation, Bulma e outros podem oferecer uma ampla gama de recursos e estilos de design que se alinham às tendências atuais do design web.

No entanto, é importante reconhecer que muitos projetos antigos podem estar utilizando bibliotecas desatualizadas, como o Materialize CSS. Nesses casos, o desenvolvimento web enfrenta desafios específicos ao lidar com a manutenção de projetos legados. É possível que seja necessário realizar atualizações graduais, refatorações e ajustes para garantir que o projeto continue funcionando corretamente e esteja seguro.

Ao fazer a manutenção de projetos antigos que usam bibliotecas desatualizadas, é crucial equilibrar as necessidades de atualização com os riscos envolvidos. Às vezes, pode ser impraticável ou economicamente inviável reescrever todo o projeto para utilizar uma biblioteca mais recente. Nesses casos, uma abordagem de mitigação de riscos, como a aplicação de correções de segurança críticas, pode ser mais realista.

Em última análise, a escolha entre usar ferramentas mais atualizadas ou continuar com ferramentas desatualizadas dependerá das necessidades e objetivos do projeto, dos recursos disponíveis e das limitações específicas do contexto. Manter um equilíbrio entre a adoção de tecnologias modernas e a manutenção de sistemas legados é uma habilidade importante no desenvolvimento web.

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
import {} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'

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

const initApp = (user = {}) => {
  if (!user.loggedIn) {
    log('Usuário não está logado')
    hideOrShowLinksNav(user)
    return
  }

  log('Usuário logado!')
  hideOrShowLinksNav(user)
}

initApp(user)

// loginGoogle()

```

# Referencia

[Doc - Materialize](https://materializecss.com/)
