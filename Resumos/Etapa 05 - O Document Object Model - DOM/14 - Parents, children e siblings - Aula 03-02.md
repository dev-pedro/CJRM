<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Parents, children e siblings - Aula 03-02

### Resumo

Em JavaScript, podemos representar pais (parents), filhos (children) e irmãos (siblings) através de uma estrutura de dados chamada "árvore DOM" (Document Object Model).

A árvore DOM representa a estrutura hierárquica de um documento HTML ou XML. Cada elemento do documento é representado por um nó na árvore DOM. Os nós podem ter filhos (children) e irmãos (siblings), e podemos navegar na árvore DOM para acessar e manipular esses elementos.

Por exemplo, se tivermos o seguinte código HTML:

```html
<div id="parent">
  <h1>Parent</h1>
  <div id="child">
    <h2>Child</h2>
  </div>
  <div id="sibling">
    <h2>Sibling</h2>
  </div>
</div>
```

Podemos acessar o elemento pai (parent) do elemento com id "child" da seguinte forma em JavaScript:

```javascript
const parentElement = document.getElementById("child").parentNode;
```

Podemos acessar o elemento filho (child) do elemento com id "parent" da seguinte forma:

```javascript
const childElement = document.getElementById("parent").childNodes[1];
```

E podemos acessar o elemento irmão (sibling) do elemento com id "child" da seguinte forma:

```javascript
const siblingElement = document.getElementById("child").nextSibling;
```

É importante lembrar que a árvore DOM pode ter muitos níveis de profundidade, com vários elementos pais, filhos e irmãos. Por isso, é importante conhecer bem a estrutura do documento HTML ou XML para poder manipulá-lo adequadamente em JavaScript.

#### parentElement

Em JavaScript, a propriedade `parentElement` é usada para obter o elemento pai (parent) de um elemento na árvore DOM (Document Object Model).

Por exemplo, considere o seguinte código HTML:

```html
<div class="parent">
  <p>Conteúdo do pai</p>
  <div class="child">
    <p>Conteúdo do filho</p>
  </div>
</div>
```

Podemos usar a propriedade `parentElement` para obter o elemento pai (parent) do elemento com a classe "child":

```javascript
const parentElement = document.querySelector(".child").parentElement;
```

O valor de `parentElement` será o elemento `<div>` com o id "parent". Podemos então acessar as propriedades e métodos desse elemento, por exemplo:

```javascript
console.log(parentElement.tagName); // "DIV"
console.log(parentElement.className); // "parent"
console.log(parentElement.children.length); // 2
```

Note que a propriedade `parentNode` é semelhante à `parentElement`, mas pode retornar também nós de texto ou comentários que possam estar entre os elementos na árvore DOM. A propriedade `parentElement`, por outro lado, sempre retorna um elemento HTML.

#### Convertendo NodeList em Array

Em JavaScript, podemos converter um objeto do tipo `NodeList` em um array usando o método `Array.from()` ou a sintaxe do spread operator (`...`).

Por exemplo, considere o seguinte código HTML:

```html
<ul id="my-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Podemos selecionar todos os elementos `<li>` dentro da lista usando o método `querySelectorAll()`:

```javascript
const liElements = document.querySelectorAll("#my-list li");
```

O valor de `liElements` será um objeto do tipo `NodeList`.

Para converter o objeto `NodeList` em um array, podemos usar o método `Array.from()` da seguinte forma:

```javascript
const liArray = Array.from(liElements);
```

O valor de `liArray` será um array contendo os elementos `<li>` na mesma ordem em que aparecem na lista.

Também podemos usar a sintaxe do spread operator (`...`) para converter o `NodeList` em um array:

```javascript
const liArray = [...liElements];
```

Ambas as formas de conversão produzem o mesmo resultado. A escolha entre elas depende da preferência pessoal do programador ou da compatibilidade com versões mais antigas do JavaScript.
