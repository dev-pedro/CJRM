<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Obtendo, adicionando, removendo e alternando classes CSS - Aula 02-05

### Resumo

Para obter, adicionar, remover e alternar classes CSS usando JavaScript, você pode usar os seguintes métodos:

Javascript:

```javascript
const paragraph = document.querySelector('p')

//exibe a lista de classes na tag paragraph
console.log(paragraph.classList)

//remove a classe 'error' da tag 'p' no HTML
paragraph.classList.remove('error')

//adiciona a classe 'success' na tag 'p' no HTML
paragraph.classList.add('success')
```

HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício etapa 5 - aula 2</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Obtendo, adicionando, removendo e alterando classes CSS</h1>
    <p class="error classe-2 classe-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit, massa at commodo dictum, nulla sem tempor lorem, at tempus neque augue non nunc.</p>

    <script src="./app.js"></script>
</body>
</html>
```

CSS:

```css
.error {
    padding: 10px;
    color: crimson;
    border: 1px dotted crimson;
}

.success {
    padding: 10px;
    color: green;
    border: 1px dotted green;
}
```

Browser:

<img title="" src="file:///home/pedro/Dropbox/CJRM/Resumos/Etapa%2005%20-%20O%20Document%20Object%20Model%20-%20DOM/manipulacaoCSS.png" alt="" data-align="center">

1. Obter uma lista de classes CSS de um elemento:

```javascript
var element = document.getElementById("myElement");
var classes = element.classList; // retorna um objeto DOMTokenList com as classes do elemento
```

2. Adicionar uma classe CSS a um elemento:

```javascript
var element = document.getElementById("myElement");
element.classList.add("myClass"); // adiciona a classe "myClass" ao elemento
```

3. Remover uma classe CSS de um elemento:

```javascript
var element = document.getElementById("myElement");
element.classList.remove("myClass"); // remove a classe "myClass" do elemento
```

4. Alternar uma classe CSS em um elemento:

```javascript
var element = document.getElementById("myElement");
element.classList.toggle("myClass"); // adiciona a classe "myClass" se ela não estiver presente, ou remove se ela estiver presente
```

#### classListToggle

O método `classList.toggle()` em JavaScript é usado para adicionar ou remover uma classe em um elemento HTML, alternando sua presença na lista de classes do elemento. Se a classe especificada já estiver presente, ela será removida, caso contrário, será adicionada.

A sintaxe do método `toggle()` é a seguinte:

```javascript
element.classList.toggle(className);
```

Onde `element` é a referência ao elemento HTML em que você deseja alterar a classe e `className` é a classe que você deseja adicionar ou remover.

O método `classList.toggle()` pode receber um segundo parâmetro opcional chamado `force`, que é um valor booleano. Se `force` for verdadeiro, o método adicionará a classe independentemente de já estar presente ou não. Se `force` for falso, o método removerá a classe independentemente de já estar presente ou não.

Por exemplo, suponha que você tenha um botão HTML com a classe `"active"` e deseje alternar a classe `"active"` em resposta a um evento de clique. Você pode fazer isso da seguinte maneira:

HTML:

```html
<button id="myButton" class="active">Clique em mim</button>
```

Javascript:

```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  button.classList.toggle("active");
});
```

O código acima adiciona um ouvinte de evento de clique no botão e, quando o botão é clicado, chama o método `classList.toggle()` para alternar a classe `"active"`. Isso adicionará a classe ao botão se ela não estiver presente e removerá se já estiver presente.
