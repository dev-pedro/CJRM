<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Resolvendo o problema da renderização de loginMessage - Aula 03-23

### Resumo

### Código Usado

HTML:

```html
<div class="container phrases-container">
    <p data-js="logout-message" class="white-text center-align">Faça login para ver as frases</p>

    <ul data-js="phrases-list" class="collapsible"></ul>
    
  </div>
```

Javascript:

```javascript

...
const loginMessage = (user) => {
  const phrasesContainer = document.querySelector(
    '[data-js="phrases-container"]'
  );
  const loginMessageExists = document.querySelector('[data-js="login-message"]')
  if(loginMessageExists){
    loginMessageExists.remove()
  }
  if (!user) {
    const loginMessage = document.createElement("p");
    loginMessage.textContent = "Faça login para ver as frases";
    loginMessage.classList.add("white-text", "center-align");
    loginMessage.setAttribute("data-js", "login-message");

    phrasesContainer.append(loginMessage);
  }
};

const hideOrShowLinksNav = (user) => {
  ...
  loginMessage(user);
  
};

...
```
