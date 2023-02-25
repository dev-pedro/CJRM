<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Criando e removendo elementos do DOM - Aula 03-04

### Resumo

Para criar e remover elementos do DOM (Document Object Model), podemos usar o JavaScript em conjunto com o HTML e o CSS. O DOM é a representação em memória do HTML que permite a manipulação dos elementos de uma página.

Existem várias maneiras de criar e remover elementos do DOM em JavaScript, mas vamos ver algumas das mais comuns.

## Criando elementos do DOM

### Método createElement()

O método `createElement()` é usado para criar um novo elemento HTML. Ele recebe como parâmetro o nome da tag do elemento que desejamos criar.

Por exemplo, se quisermos criar um novo parágrafo (`<p>`), podemos usar o código a seguir:

```javascript
const paragrafo = document.createElement('p');
```

### Propriedade innerHTML

A propriedade `innerHTML` é usada para definir o conteúdo HTML de um elemento. Podemos usá-la para inserir o conteúdo que desejamos no elemento criado com `createElement()`.

Por exemplo, se quisermos criar um novo parágrafo com o texto "Olá, mundo!", podemos usar o código a seguir:

```javascript
const paragrafo = document.createElement('p');
paragrafo.innerHTML = 'Olá, mundo!';
```

### Método appendChild()

O método `appendChild()` é usado para adicionar um novo elemento como filho de outro elemento existente.

Por exemplo, se quisermos adicionar o parágrafo criado anteriormente ao corpo da página, podemos usar o código a seguir:

```javascript
const paragrafo = document.createElement('p');
paragrafo.innerHTML = 'Olá, mundo!';// ou
//paragrafo.textContent = 'Olá, mundo!'

document.body.appendChild(paragrafo);
```

## Removendo elementos do DOM

### Método removeChild()

O método `removeChild()` é usado para remover um elemento filho de outro elemento existente.

Por exemplo, se quisermos remover um elemento `p` com id `meuParagrafo`, podemos usar o código a seguir:

```javascript
const paragrafo = document.getElementById('meuParagrafo');
paragrafo.parentNode.removeChild(paragrafo);
```

### Método remove()

A partir do ECMAScript 6, também podemos usar o método `remove()` para remover um elemento do DOM. Esse método é chamado diretamente no elemento que desejamos remover.

Por exemplo, se quisermos remover um elemento `p` com id `meuParagrafo`, podemos usar o código a seguir:

```javascript
const paragrafo = document.getElementById('meuParagrafo');
paragrafo.remove();
```

### Metodo Prepend e Append

Os métodos `prepend()` e `append()` são usados para adicionar elementos como filhos de outro elemento existente. A diferença entre os dois é a posição em que o novo elemento será adicionado.

- `prepend()`: adiciona o novo elemento como o primeiro filho do elemento pai.

- `append()`: adiciona o novo elemento como o último filho do elemento pai.

Por exemplo, considere o seguinte código HTML:

```html
<div id="meuDiv">
  <p>Primeiro parágrafo</p>
  <p>Segundo parágrafo</p>
</div>
```

Podemos adicionar um novo parágrafo como o primeiro filho do elemento `div` usando o método `prepend()`:

```javascript
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Novo parágrafo';

const meuDiv = document.getElementById('meuDiv');
meuDiv.prepend(novoParagrafo);
```

O resultado será:

```html
<div id="meuDiv">
  <p>Novo parágrafo</p>
  <p>Primeiro parágrafo</p>
  <p>Segundo parágrafo</p>
</div>
```

Podemos adicionar um novo parágrafo como o último filho do elemento `div` usando o método `append()`:

```javascript
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Novo parágrafo';

const meuDiv = document.getElementById('meuDiv');
meuDiv.append(novoParagrafo);
```

O resultado será:

```html
<div id="meuDiv">
  <p>Primeiro parágrafo</p>
  <p>Segundo parágrafo</p>
  <p>Novo parágrafo</p>
</div>
```

Note que, se usarmos o método `appendChild()`, o novo elemento será adicionado como o último filho do elemento pai, assim como o método `append()`. A diferença é que o método `appendChild()` recebe como parâmetro o elemento a ser adicionado, enquanto o método `append()` pode receber um ou mais elementos a serem adicionados.

## Conclusão

Essas são apenas algumas das maneiras de criar e remover elementos do DOM em JavaScript. Existem muitas outras funções e métodos disponíveis para manipulação do DOM, e é importante entender suas diferenças e usos para criar códigos mais eficientes e legíveis.
