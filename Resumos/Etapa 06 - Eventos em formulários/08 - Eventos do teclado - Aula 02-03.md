<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Eventos do teclado - Aula 02-03

### Resumo

#### Evento 'Keydown'

Em JavaScript, é possível detectar eventos do teclado usando o objeto `event` que é passado como parâmetro para a função de callback do evento. Os eventos mais comuns do teclado são:

- `keydown`: esse evento é acionado quando uma tecla é pressionada.
- `keyup`: esse evento é acionado quando uma tecla é liberada após ser pressionada.
- `keypress`: esse evento é acionado quando uma tecla é pressionada e mantida pressionada.

Para detectar qual tecla foi pressionada, você pode acessar a propriedade `keyCode` do objeto `event`. O valor da propriedade `keyCode` corresponde ao código ASCII da tecla pressionada. Por exemplo, o código ASCII para a tecla "a" é 97.

Aqui está um exemplo simples de como detectar eventos de teclado em JavaScript:

```javascript
// Adiciona um evento de "keydown" no documento
document.addEventListener("keydown", function(event) {
  // Exibe o código ASCII da tecla pressionada
  console.log(event.keyCode);
});
```

Este exemplo exibe o código ASCII da tecla pressionada no console do navegador sempre que uma tecla é pressionada.

#### Evento 'keyup'

O evento `keyup` em JavaScript é acionado quando uma tecla é liberada após ser pressionada. Ele é um dos eventos mais comuns do teclado e pode ser usado para executar ações quando uma tecla é solta, como validar um formulário ou executar uma pesquisa em tempo real.

Assim como outros eventos de teclado, o evento `keyup` é disparado em um elemento quando uma tecla é liberada, geralmente dentro de um formulário, um campo de texto ou um elemento de entrada.

Aqui está um exemplo simples de como usar o evento `keyup` em JavaScript:

```javascript
// Adiciona um evento "keyup" no input com id "myInput"
document.getElementById("myInput").addEventListener("keyup", function(event) {
  // Obtém o valor do input
  var inputValue = event.target.value;

  // Exibe o valor do input no console
  console.log(inputValue);
});
```

Neste exemplo, o evento `keyup` é adicionado a um elemento de entrada com o ID "myInput". Quando o usuário solta uma tecla enquanto o foco está no input, o valor do input é obtido e exibido no console.

Outro exemplo de uso do evento `keyup` é para implementar uma pesquisa em tempo real. Por exemplo, imagine que você tenha uma lista de produtos em uma página e um campo de pesquisa que permite ao usuário procurar produtos na lista. Você pode usar o evento `keyup` para atualizar a lista de produtos sempre que o usuário digitar algo no campo de pesquisa. Aqui está um exemplo:

* HTML

```html
<input type="text" id="searchInput" placeholder="Pesquisar produtos...">
<ul id="productList">
  <li>Produto 1</li>
  <li>Produto 2</li>
  <li>Produto 3</li>
  <li>Produto 4</li>
</ul>
```

* Javascript

```javascript
// Adiciona um evento "keyup" no input de pesquisa
document.getElementById("searchInput").addEventListener("keyup", function(event) {
  // Obtém o valor do input de pesquisa
  var searchQuery = event.target.value.toLowerCase();

  // Obtém a lista de produtos
  var productList = document.getElementById("productList");

  // Remove todos os itens da lista de produtos
  while (productList.firstChild) {
    productList.removeChild(productList.firstChild);
  }

  // Filtra os produtos com base na consulta de pesquisa
  var filteredProducts = products.filter(function(product) {
    return product.toLowerCase().indexOf(searchQuery) !== -1;
  });

  // Adiciona os itens filtrados à lista de produtos
  filteredProducts.forEach(function(product) {
    var li = document.createElement("li");
    li.textContent = product;
    productList.appendChild(li);
  });
});
```

Neste exemplo, o evento `keyup` é adicionado ao campo de pesquisa. Quando o usuário digita algo no campo, a lista de produtos é filtrada com base na consulta de pesquisa e atualizada na página. O usuário pode ver os resultados da pesquisa em tempo real, sem precisar recarregar a página.

#### Evento 'keypress'

O evento `keypress` em JavaScript é acionado quando uma tecla é pressionada e mantida pressionada. Ele é semelhante ao evento `keydown`, mas é acionado repetidamente enquanto a tecla é mantida pressionada.

O evento `keypress` é útil para implementar ações que requerem que uma tecla seja mantida pressionada, como mover um objeto na tela ou aumentar o zoom em uma imagem. Ele também pode ser usado para implementar atalhos de teclado personalizados em um aplicativo da web.

1. Exemplo

Aqui está um exemplo simples de como usar o evento `keypress` em JavaScript:

```javascript
// Adiciona um evento "keypress" no documento
document.addEventListener("keypress", function(event) {
  // Obtém o código ASCII da tecla pressionada
  const keyCode = event.keyCode;

  // Move um objeto na tela com base na tecla pressionada
  if (keyCode === 119) { // w
    moveUp();
  } else if (keyCode === 97) { // a
    moveLeft();
  } else if (keyCode === 115) { // s
    moveDown();
  } else if (keyCode === 100) { // d
    moveRight();
  }
});
```

Neste exemplo, o evento `keypress` é adicionado ao documento. Quando o usuário pressiona uma tecla, o código ASCII da tecla é obtido e usado para mover um objeto na tela. As teclas "w", "a", "s" e "d" são usadas para mover o objeto para cima, para a esquerda, para baixo e para a direita, respectivamente.

2. Exemplo

Outro exemplo de uso do evento `keypress` é para implementar atalhos de teclado personalizados em um aplicativo da web. Por exemplo, imagine que você tenha um aplicativo de edição de texto e queira permitir que os usuários salvem o documento pressionando as teclas "Ctrl + S". Você pode usar o evento `keypress` para detectar quando essas teclas são pressionadas e executar a ação apropriada. Aqui está um exemplo:

```javascript
// Adiciona um evento "keypress" no documento
document.addEventListener("keypress", function(event) {
  // Obtém o código ASCII da tecla pressionada
  const keyCode = event.keyCode;

  // Verifica se a tecla "Ctrl" está pressionada
  if (event.ctrlKey) {
    // Verifica se a tecla "S" está pressionada
    if (keyCode === 115) { // S
      event.preventDefault(); // Impede que o navegador execute a ação padrão
      saveDocument(); // Salva o documento
    }
  }
});
```

Neste exemplo, o evento `keypress` é adicionado ao documento. Quando o usuário pressiona as teclas "Ctrl + S", o evento é acionado e o documento é salvo. A função `event.preventDefault()` é usada para impedir que o navegador execute a ação padrão associada a essas teclas (no caso do "Ctrl + S", a ação padrão é abrir a janela "Salvar como").
