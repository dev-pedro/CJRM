<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Stringficando e parseando dados - Aula-01-06

### Resumo

Em JavaScript, podemos armazenar dados em diferentes formatos, como strings, números, objetos, arrays, etc. No entanto, ao armazenar dados em um local de armazenamento, como o `localStorage`, é necessário armazená-los em forma de string. Para fazer isso, podemos usar o método `JSON.stringify()`.

O método `JSON.stringify()` é usado para converter um objeto JavaScript em uma string JSON. Isso torna mais fácil armazenar e transmitir objetos JavaScript entre diferentes sistemas, como uma API e um navegador.

Por exemplo, vamos supor que temos um objeto JavaScript que contém alguns dados que queremos armazenar no `localStorage`:

```javascript
let meuObjeto = { nome: "João", idade: 30 };
```

Podemos transformar esse objeto em uma string JSON usando o método `JSON.stringify()`:

```javascript
let meuObjetoJSON = JSON.stringify(meuObjeto);
```

Agora, podemos armazenar a string JSON no `localStorage`:

```javascript
localStorage.setItem("meuObjeto", meuObjetoJSON);
```

Para recuperar o objeto original, precisamos converter a string JSON de volta para um objeto JavaScript usando o método `JSON.parse()`:

```javascript
let meuObjetoDeJSON = JSON.parse(localStorage.getItem("meuObjeto"));
```

Agora, a variável `meuObjetoDeJSON` contém o objeto JavaScript original que armazenamos no `localStorage`.

É importante lembrar que nem todos os tipos de dados em JavaScript podem ser convertidos em uma string JSON usando `JSON.stringify()`. Alguns tipos, como funções, não podem ser serializados em JSON.

#### Código usados nesta aula

```javascript
const myArray = [
    {a: 1, b: 2},
    {c: 3, d: 4},
    {e: 5, f: 6}
]
localStorage.setItem('myArray', JSON.stringify(myArray))

const JSONFromLocalStorage = localStorage.getItem('myArray')
const myConvertedArray = JSON.parse(JSONFromLocalStorage)

console.log(myConvertedArray)
```

#### Referencias

[JSON.stringify() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

[JSON.parse() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

[Serialization - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Serialization)
