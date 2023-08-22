<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Apresentando o removeEventListener - Aula 03-25

### Resumo

O `removeEventListener` é uma parte crucial para lidar com eventos em páginas web, e podemos utilizá-lo com as sintaxes mais modernas, como as arrow functions.

Aqui está como você pode usar o `removeEventListener` com arrow functions:

```javascript
elemento.removeEventListener(evento, função);
```

Os parâmetros necessários são os mesmos:

1. **elemento**: O elemento HTML do qual você deseja remover o ouvinte de evento.
2. **evento**: Uma string que indica o tipo de evento a ser removido.
3. **função**: A função de seta (arrow function) que você usou originalmente com `addEventListener`.

Aqui está um exemplo de como usar o `removeEventListener` com arrow functions:

```javascript
// Criando uma arrow function como tratador de evento
const meuManipuladorEvento = (event) => {
    console.log("Evento ocorreu!", event);
};

// Selecionando o elemento
const meuElemento = document.getElementById("meuElemento");

// Adicionando o ouvinte de evento usando a arrow function
meuElemento.addEventListener("click", meuManipuladorEvento);

// Removendo o ouvinte de evento após um tempo
setTimeout(() => {
    meuElemento.removeEventListener("click", meuManipuladorEvento);
    console.log("Ouvinte de evento removido.");
}, 5000); // Remove após 5 segundos
```

Neste exemplo, a arrow function `meuManipuladorEvento` é usada como tratador de evento ao adicionar o ouvinte, e também é passada para `removeEventListener` para remoção.

Lembre-se de que ao usar arrow functions, é importante garantir que você está passando a mesma arrow function para o `removeEventListener` que você usou ao adicionar o ouvinte originalmente. Isso garante que o ouvinte correto seja removido.

O `removeEventListener` é uma ferramenta essencial para controlar o comportamento dos eventos em suas páginas web.

# Código Usado

HTML:

```html
...
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
...
```

Javascript:

```javascript
...
const addPhrase = (e) => {
  //TODO: implementar salvamento das mensagens no firestore
  e.preventDefault();
  log("enviou a frase");
};


const handleAuthStateChanged = (user) => {
  ...
  const addPhraseForm = document.querySelector('[data-js="add-phrase-form"]');

  ...

  if(!user){
    addPhraseForm.removeEventListener("submit", addPhrase);
    return
  }
  
  addPhraseForm.addEventListener("submit", addPhrase);
};
```
