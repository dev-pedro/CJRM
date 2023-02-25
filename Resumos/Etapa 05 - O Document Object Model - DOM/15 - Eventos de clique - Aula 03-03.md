<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Eventos de clique - Aula 03-03

### Resumo

Eventos de clique são muito comuns em aplicações web, e o JavaScript oferece uma forma simples de lidar com eles. Existem várias maneiras de lidar com eventos de clique em JavaScript, mas as duas mais comuns são:

1. Adicionar um ouvinte de eventos usando o método addEventListener():

```javascript
const button = document.querySelector('#meuBotao');
button.addEventListener('click', () => {
  // código que será executado quando o botão for clicado
});
```

Nesse exemplo, estamos selecionando o botão usando o seletor CSS "#meuBotao" e adicionando um ouvinte de eventos para o evento "click". Quando o botão for clicado, o código dentro da função de retorno será executado.

2. Usar o atributo onclick do elemento HTML:

HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo de evento de clique</title>

  </head>
  <body>
    <button onclick="meuBotaoClicado()">Clique aqui</button>
    
    <script src="meuScript.js"></script>
  </body>
</html>
```

Javascript:

```javascript
function meuBotaoClicado() {
  alert('O botão foi clicado!');
}
```

Mesmo exemplo acima mas com o código javascript dentro do html:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo de evento de clique</title>
  </head>
  <body>
    <button onclick="meuBotaoClicado()">Clique aqui</button>

    <script>
      function meuBotaoClicado() {
        alert('O botão foi clicado!');
      }
    </script>
  </body>
</html>
```

Nesse exemplo, estamos definindo um atributo onclick diretamente no botão HTML. Quando o botão for clicado, a função `meuBotaoClicado()` será executada.

É importante notar que a primeira abordagem é geralmente considerada uma prática melhor, pois separa o comportamento do código HTML e torna o código mais fácil de manter. Além disso, o método addEventListener() permite adicionar vários ouvintes de eventos para o mesmo elemento, enquanto o uso do atributo onclick só permite um ouvinte por elemento.

#### Target

O `target` é uma propriedade de eventos em JavaScript que indica o alvo do evento, ou seja, o elemento HTML que gerou o evento. O valor da propriedade `target` é um objeto que representa o elemento HTML no qual o evento foi originado.

Por exemplo, em um evento de clique em um botão, o valor de `event.target` seria o objeto que representa o próprio botão. Podemos usar essa propriedade para obter informações sobre o elemento que gerou o evento ou para realizar ações específicas com base no elemento.

Segue abaixo um exemplo de como usar a propriedade `target` em um evento de clique para alterar a cor de fundo do elemento que gerou o evento:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo de target em eventos de clique</title>
    <style>
      button {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <button onclick="mudarCorDeFundo(event)">Clique aqui</button>

    <script>
      function mudarCorDeFundo(event) {
        const botao = event.target;
        botao.style.backgroundColor = 'red';
      }
    </script>
  </body>
</html>
```

Nesse exemplo, temos um botão com um evento de clique definido como `mudarCorDeFundo(event)`. Quando o botão é clicado, a função `mudarCorDeFundo()` é chamada e recebe o evento como parâmetro.

Dentro da função, usamos `event.target` para obter o elemento que gerou o evento, que é o próprio botão. Em seguida, alteramos a cor de fundo do botão para vermelho usando a propriedade `style.backgroundColor`.

Note que, para usar a propriedade `target`, precisamos passar o evento como parâmetro para a função e usá-lo dentro da função para acessar a propriedade `target`.

#### Target com Foreach

Segue abaixo um exemplo de como usar a propriedade `target` com um loop `forEach()` para adicionar eventos de clique em vários elementos HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo de target com forEach</title>
    <style>
      .item {
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <div id="listaDeItens">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
    </div>

    <script>
      const itens = document.querySelectorAll('.item');

      itens.forEach(function(item) {
        item.addEventListener('click', function(event) {
          const elementoClicado = event.target;
          elementoClicado.style.backgroundColor = 'red';
        });
      });
    </script>
  </body>
</html>
```

Nesse exemplo, temos três elementos `<div>` com a classe `.item` dentro de um elemento `<div>` com o id `listaDeItens`. Em seguida, usamos o método `querySelectorAll()` para selecionar todos os elementos com a classe `.item`.

Em seguida, usamos o método `forEach()` para adicionar um evento de clique a cada elemento. Dentro do loop `forEach()`, adicionamos um ouvinte de evento de clique a cada elemento usando o método `addEventListener()`.

Dentro da função de retorno do evento, usamos `event.target` para obter o elemento que gerou o evento (ou seja, o elemento clicado) e, em seguida, alteramos sua cor de fundo para vermelho.

Dessa forma, quando um elemento com a classe `.item` é clicado, sua cor de fundo é alterada para vermelho. Note que, com o uso do loop `forEach()`, podemos adicionar o mesmo evento de clique a vários elementos HTML de uma só vez, tornando nosso código mais limpo e eficiente.

#### Event reference

Abaixo o link da página do MDN com todas as referencias  de eventos que podem ser manipulados

[Event reference | MDN](https://developer.mozilla.org/en-US/docs/Web/Events)
