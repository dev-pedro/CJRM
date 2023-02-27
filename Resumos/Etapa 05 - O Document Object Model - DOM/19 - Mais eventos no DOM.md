<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Mais eventos do DOM - Aula 04-03

### Resumo

#### 'copy' event

O evento de cópia (ou "copy event" em inglês) em JavaScript é acionado quando o usuário copia um texto ou um elemento de uma página da web para a área de transferência do computador, seja através do atalho do teclado ou do menu de contexto do botão direito do mouse.

Quando o evento é acionado, é possível executar uma ação específica, como exibir uma mensagem de sucesso, modificar o conteúdo que está sendo copiado ou até mesmo cancelar a cópia.

Por exemplo, suponha que você queira adicionar um aviso ao usuário quando ele copiar um texto de um elemento específico da página. Você pode usar o evento de cópia para detectar quando a cópia ocorre e exibir uma mensagem usando o método `alert()` do JavaScript:

```javascript
const elemento = document.querySelector('#elemento');
elemento.addEventListener('copy', () => {
  alert('Texto copiado com sucesso!');
});
```

#### 'mousemove' event

O evento mousemove (em português, "movimento do mouse") em JavaScript é acionado sempre que o cursor do mouse é movido sobre um elemento da página da web.

Esse evento é útil para detectar a posição atual do cursor do mouse e, assim, realizar ações em tempo real, como exibir informações adicionais ou animar elementos da página.

Para usar o evento mousemove, é possível adicionar um listener (ou "ouvinte") ao elemento desejado usando o método `addEventListener()` do JavaScript. O listener deve ser definido para o evento `mousemove`, e pode conter um ou mais comandos a serem executados quando o cursor do mouse se mover sobre o elemento.

Por exemplo, suponha que você queira exibir as coordenadas exatas do cursor do mouse quando ele se mover sobre uma imagem. Você pode usar o evento mousemove para detectar a posição atual do cursor e exibir essas informações em um elemento específico da página:

```javascript
const imagem = document.querySelector('#imagem');
const coordenadas = document.querySelector('#coordenadas');
imagem.addEventListener('mousemove', (evento) => {
  const posX = evento.pageX - imagem.offsetLeft;
  const posY = evento.pageY - imagem.offsetTop;
  coordenadas.textContent = `Posição do cursor: ${posX}, ${posY}`;
});
```

Dessa forma, sempre que o cursor do mouse se mover sobre a imagem, as coordenadas exatas serão exibidas no elemento identificado pelo seletor CSS `#coordenadas`.

#### 'wheel' event

O evento wheel (em português, "roda do mouse") em JavaScript é acionado sempre que o usuário rola a roda do mouse sobre um elemento da página da web, como uma caixa de rolagem ou um mapa.

Esse evento é útil para detectar a direção e a velocidade da rolagem do mouse e, assim, realizar ações em tempo real, como navegar por uma lista ou aumentar o zoom em um mapa.

Para usar o evento wheel, é possível adicionar um listener (ou "ouvinte") ao elemento desejado usando o método `addEventListener()` do JavaScript. O listener deve ser definido para o evento "wheel", e pode conter um ou mais comandos a serem executados quando o usuário rola a roda do mouse.

Por exemplo, suponha que você queira permitir que o usuário navegue por uma lista de itens rolando a roda do mouse para cima e para baixo. Você pode usar o evento wheel para detectar a direção da rolagem e, assim, atualizar a posição da lista:

```javascript
const lista = document.querySelector('#lista');
lista.addEventListener('wheel', (evento) => {
  evento.preventDefault();
  const velocidade = evento.deltaY;
  lista.scrollTop += velocidade;
});
```

Dessa forma, sempre que o usuário rolar a roda do mouse sobre a lista identificada pelo seletor CSS "#lista", a posição da lista será atualizada com base na direção e na velocidade da rolagem. O método `preventDefault()` é usado para evitar que a página seja rolada juntamente com a lista.

#### pageX e pageY no 'wheel'

As propriedades `pageX` e `pageY` também podem ser usadas no evento `wheel` em JavaScript para determinar a posição do ponteiro do mouse no momento em que o evento foi acionado.

Por exemplo, suponha que você queira permitir que o usuário aumente e diminua o zoom em um mapa usando a roda do mouse e queira que o zoom seja centrado no ponto em que o ponteiro do mouse está localizado. Você pode usar as propriedades `pageX` e `pageY` para obter as coordenadas do ponto em que o ponteiro do mouse está localizado no momento em que a roda do mouse é rolada, e usar essas coordenadas para centralizar o zoom no mapa:

```javascript
const mapa = document.querySelector('#mapa');
mapa.addEventListener('wheel', (evento) => {
  evento.preventDefault();
  const velocidade = evento.deltaY;
  const pontoX = evento.pageX - mapa.offsetLeft;
  const pontoY = evento.pageY - mapa.offsetTop;
  const novaLargura = mapa.clientWidth + velocidade;
  const novaAltura = mapa.clientHeight + velocidade;
  const novaPosX = pontoX - (novaLargura / mapa.offsetWidth) * pontoX;
  const novaPosY = pontoY - (novaAltura / mapa.offsetHeight) * pontoY;
  mapa.style.width = `${novaLargura}px`;
  mapa.style.height = `${novaAltura}px`;
  mapa.style.left = `${novaPosX}px`;
  mapa.style.top = `${novaPosY}px`;
});
```

Dessa forma, sempre que o usuário rolar a roda do mouse sobre o mapa identificado pelo seletor CSS "#mapa", o zoom será centrado no ponto em que o ponteiro do mouse está localizado no momento em que a roda do mouse é rolada. Note que é necessário subtrair as coordenadas do elemento pai (neste caso, o mapa) para obter a posição correta do ponto em relação à borda superior e esquerda da página. Além disso, é possível fazer cálculos adicionais com as propriedades `pageX` e `pageY` para obter a posição do ponteiro do mouse em relação a outros elementos na página.

Lembre-se de que o método `preventDefault()` deve ser usado no evento `wheel` para evitar que a página seja rolada juntamente com o elemento que está sendo rolado com a roda do mouse.

#### Código da aula abaixo

HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Mais eventos do DOM</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="copy-me">Lorem ipsum dolor sit amet, consectetur</p>

    <div class="box">Mova o mouse nesse box</div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    
    <script src="./app.js"></script>
</body>
</html>
```

CSS:

```css
.box {
    width: 200px;
    height: 200px;
    margin: 10px 0;
    background: #eee;
    text-align: center;
    padding: 20px;
}
```

Javascript:

```javascript
const paragraph = document.querySelector(".copy-me");
paragraph.addEventListener("copy", () => {
  console.log("Texto copiado!");
});

const div = document.querySelector(".box");
div.addEventListener("mousemove", (event) => {
  div.textContent = `x ${event.offsetX} | y ${event.offsetY}`;
  //console.log(event.offsetX, event.offsetY)
});

document.addEventListener("wheel", (event) => {
  console.log(event.pageX, event.pageY);
});
```
