<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Outras maneiras de fazer queries no DOM - Aula 01-08

### Resumo

Existem outras formas de selecionar elementos HTML no DOM (Document Object Model) em JavaScript, além do `querySelector` e `querySelectorAll`. As três formas mais comuns de obter elementos são `getElementById`, `getElementsByClassName` e `getElementsByTagName`. Vamos dar uma olhada em cada um deles.

1. `getElementById`

O método `getElementById` seleciona um único elemento com base no valor do atributo `id` do elemento HTML. Ele retorna um objeto que representa o elemento HTML selecionado ou null se nenhum elemento for encontrado. O valor do atributo `id` deve ser exclusivo dentro do documento HTML.

Exemplo:

HTML:

```html
<p id="exemplo">Exemplo de parágrafo com id.</p>
```

Javascript:

```javascript
let exemploParagrafo = document.getElementById('exemplo');
```

2. `getElementsByClassName`

O método `getElementsByClassName` seleciona todos os elementos que possuem uma classe específica. Ele retorna um objeto do tipo HTMLCollection, que é semelhante a um array e pode ser iterado com um loop. Vários elementos podem ter a mesma classe, portanto, este método pode retornar vários elementos.

Exemplo:

HTML:

```html
<div class="exemplo">Exemplo de div com classe.</div>
<div class="exemplo">Outro exemplo de div com classe.</div>
```

Javascript:

```javascript
let exemplosDiv = document.getElementsByClassName('exemplo');
```

3. `getElementsByTagName`

O método `getElementsByTagName` seleciona todos os elementos com um determinado nome de tag. Ele retorna um objeto do tipo HTMLCollection, que é semelhante a um array e pode ser iterado com um loop.

Exemplo:

HTML:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Javascript:

```javascript
let listaItens = document.getElementsByTagName('li');
```

Essas são algumas das formas mais comuns de selecionar elementos HTML no DOM em JavaScript. Cada método tem suas próprias vantagens e desvantagens, e a escolha do método a ser usado depende do que você precisa fazer no seu código.
