<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Resolvendo exibição das lis quando usuário está deslogado - Aula 03-29

### Resumo

Você pode usar `innerHTML` ou `textContent` para atribuir um valor vazio a uma lista não ordenada (`ul`) em HTML. A diferença entre os dois é como eles manipulam o conteúdo interno do elemento.

Aqui está como você pode fazer isso:

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="container">
  <ul id="minhaLista" class="collection">
    <li class="collection-item">Item 1</li>
    <li class="collection-item">Item 2</li>
    <li class="collection-item">Item 3</li>
  </ul>

  <button id="limparLista">Limpar Lista</button>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const minhaLista = document.getElementById('minhaLista');
    const limparListaButton = document.getElementById('limparLista');

    limparListaButton.addEventListener('click', function() {
      // Usando innerHTML para atribuir valor vazio à ul
      // minhaLista.innerHTML = '';

      // Ou usando textContent para atribuir valor vazio à ul
      minhaLista.textContent = '';
    });
  });
</script>

</body>
</html>
```

Neste exemplo, temos uma lista não ordenada (`ul`) com alguns itens (`li`). Há também um botão que, quando clicado, usará either `innerHTML` ou `textContent` para atribuir um valor vazio à lista, removendo assim os itens.

Lembre-se de que há uma diferença importante entre `innerHTML` e `textContent`. `innerHTML` interpreta o conteúdo como HTML, o que significa que ele pode processar tags HTML e scripts. Por outro lado, `textContent` trata o conteúdo como texto puro, sem interpretar qualquer HTML ou scripts. Portanto, se você não precisar interpretar HTML, é uma prática mais segura usar `textContent` para evitar problemas de segurança.

# Código Usado

```javascript
...
const initApp = (user = {}) => {
  if (!user) {
    log("Usuário não está logado")
    handleAuthStateChanged(user)
    //adiciona uma string vazia dentro da ul caso usário não esteja logado
    ulPhrasesList.textContent = "" 
    return
  }
  log("Usuário logado!")
  ...
}


onAuthStateChanged(auth, initApp)
```
