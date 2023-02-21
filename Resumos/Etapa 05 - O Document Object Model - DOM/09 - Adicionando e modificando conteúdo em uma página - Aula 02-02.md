<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Adicionando e modificando conteúdo em uma página - Aula 02-02

### Resumo

#### InnerHTML

Para adicionar e modificar o conteúdo em uma página JavaScript, podemos usar o DOM (Document Object Model) que é uma interface de programação para HTML e XML.

A seguir estão algumas maneiras de adicionar e modificar conteúdo em uma página JavaScript usando o DOM:

1. Adicionando conteúdo a um elemento HTML:

Para adicionar conteúdo a um elemento HTML existente, você pode usar a propriedade `innerHTML` do elemento. Por exemplo, para adicionar um texto dentro de um elemento `p`, você pode fazer o seguinte:

```javascript
const elemento = document.querySelector('p');
elemento.innerHTML = 'Este é um novo texto adicionado ao elemento p.';
```

2. Adicionando elementos HTML:

Para adicionar um novo elemento HTML à página, você pode usar o método `createElement()` do objeto `document`. Por exemplo, para adicionar um novo elemento `div` com um texto dentro, você pode fazer o seguinte:

```javascript
const novoElemento = document.createElement('div');
novoElemento.innerHTML = 'Este é um novo elemento div adicionado à página.';
document.body.appendChild(novoElemento);
```

O código acima cria um novo elemento `div`, adiciona o texto a ele usando a propriedade `innerHTML` e, em seguida, adiciona o novo elemento ao final do corpo da página usando o método `appendChild()`.

3. Modificando atributos de elementos HTML:

Para modificar o valor de um atributo de um elemento HTML, você pode usar a propriedade `setAttribute()`. Por exemplo, para alterar o valor do atributo `src` de uma imagem, você pode fazer o seguinte:

```javascript
const imagem = document.querySelector('img');
imagem.setAttribute('src', 'nova-imagem.png');
```

O código acima seleciona a imagem usando o método `querySelector()`, em seguida, usa o método `setAttribute()` para alterar o valor do atributo `src` da imagem para 'nova-imagem.png'.

#### InnerText

A propriedade `innerText` é usada para definir ou obter o texto dentro de um elemento HTML, excluindo quaisquer tags HTML dentro desse elemento. Em outras palavras, ele retorna o texto visível para o usuário dentro de um elemento, sem nenhuma formatação.

Aqui está um exemplo que demonstra como usar a propriedade `innerText`:

Suponha que temos o seguinte HTML em nosso documento:

```javascript
<p class="meuParagrafo">Este é um parágrafo de exemplo.</p>
```

Podemos acessar o texto dentro desse elemento `<p>` usando a propriedade `innerText` e exibi-lo no console do navegador:

```javascript
const meuParagrafo = document.querySelector('.meuParagrafo');
console.log(meuParagrafo.innerText); // Output: "Este é um parágrafo de exemplo."
```

Aqui, a constante `meuParagrafo` é definida como uma referência ao elemento HTML com a `classe` "meuParagrafo". Em seguida, usamos a propriedade `innerText` para obter o texto dentro desse elemento e exibi-lo no console.

Também podemos usar a propriedade `innerText` para definir o texto dentro de um elemento. Por exemplo, podemos alterar o texto dentro do nosso elemento `<p>` para "Este é um novo parágrafo." usando o seguinte código:

```javascript
meuParagrafo.innerText = "Este é um novo parágrafo.";
```

Agora, se executarmos `console.log(meuParagrafo.innerText);`, veremos que o valor do texto foi atualizado para "Este é um novo parágrafo.".

É importante notar que a propriedade `innerText` é diferente da propriedade `innerHTML`. A propriedade `innerHTML` retorna todo o conteúdo dentro de um elemento, incluindo as tags HTML, enquanto a propriedade `innerText` retorna apenas o texto visível dentro do elemento.

# 

Essas são apenas algumas maneiras de adicionar e modificar o conteúdo em uma página JavaScript usando o DOM. Existem muitos outros métodos e propriedades disponíveis no DOM que podem ser usados para manipular o conteúdo da página.
