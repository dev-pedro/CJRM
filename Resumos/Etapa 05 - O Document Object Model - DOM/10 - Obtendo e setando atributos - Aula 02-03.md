<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Obtendo e setando atributos - Aula 02-03

### Resumo

Ao trabalhar com elementos HTML em JavaScript, frequentemente precisamos obter e definir seus atributos. Podemos fazer isso usando os métodos e propriedades do DOM (Document Object Model).

1. Obtendo um atributo:

Para obter o valor de um atributo de um elemento HTML, podemos usar o método `getAttribute()`. Por exemplo, se tivermos um elemento `<a>` com um atributo `href`, podemos obter o valor desse atributo da seguinte maneira:

```javascript
const a = document.querySelector("a") //obtendo a referncia do elemento
const href = a.getAttribute('href') //obtendo a referência do atributo
```

Nesse exemplo, a constante `a` é definida como uma referência ao primeiro elemento `<a>` encontrado na página, e a constante `href` é definida como o valor do atributo `href` desse elemento.

2. Definindo um atributo:

Para definir o valor de um atributo de um elemento HTML, podemos usar o método `setAttribute()`. Por exemplo, se quisermos alterar o valor do atributo `href` de um elemento `<a>`, podemos fazer o seguinte:

```javascript
a.setAttribute('href', 'https://www.linkedin.com/in/pedro-henrique-rjas')
a.innerText = 'Pedro - Linkedin'
```

Nesse exemplo, usamos o método `setAttribute()` para definir o valor do atributo `href` do elemento `a` como `https://www.linkedin.com/in/pedro-henrique-rjas`.

3. Removendo um atributo:

Para remover um atributo de um elemento HTML, podemos usar o método `removeAttribute()`. Por exemplo, se quisermos remover o atributo `src` de um elemento `<img>`, podemos fazer o seguinte:

```javascript
const minhaImagem = document.querySelector('img');
minhaImagem.removeAttribute('src');
```

Nesse exemplo, usamos o método `removeAttribute()` para remover o atributo `src` do elemento `minhaImagem`.

É importante notar que alguns atributos, como `class` e `id`, têm propriedades correspondentes no objeto do elemento DOM, que podemos usar para obter e definir seus valores. Por exemplo, para obter o valor do atributo `class` de um elemento HTML, podemos usar a propriedade `className` em vez do método `getAttribute()`:

```javascript
const meuElemento = document.querySelector('#meuElemento');
const classeDoElemento = meuElemento.className;
```

E para definir o valor do atributo `class` de um elemento HTML, podemos usar a propriedade `className` em vez do método `setAttribute()`:

```javascript
const meuElemento = document.querySelector('#meuElemento');
meuElemento.className = 'minha-classe';
```

Essas são algumas maneiras de obter e definir atributos em elementos HTML usando o DOM em JavaScript.

* HTML usado no exercício

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Obtendo e setando elementos</title>
</head>
<body>
    <h1>Obtendo e setando elementos</h1>

   <a href="https://github.com/dev-pedro">Pedro Henrique</a>

   <p class="error">Mensagem</p>

    <script src="./app.js"></script>
</body>
</html>
```

* Javascript usado no exercício

```javascript
const a = document.querySelector("a");

console.log(a.getAttribute('href'))

a.setAttribute('href', 'https://www.linkedin.com/in/pedro-henrique-rjas')
a.innerText = 'Pedro - Linkedin'

const paragraph = document.querySelector('p')
console.log(paragraph.getAttribute('class'))

paragraph.setAttribute('class', 'success')

paragraph.setAttribute('style', 'color: red;')
```
