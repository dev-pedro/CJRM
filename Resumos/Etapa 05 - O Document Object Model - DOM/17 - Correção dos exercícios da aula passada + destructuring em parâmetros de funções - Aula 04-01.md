<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula passada + destructuring em parâmetros de funções - Aula 04-01

### Resumo

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Correção dos exercícios da aula 03 da etapa 05</title>
</head>
<body>
  <h1>Correção dos exercícios da aula 03 da etapa 05</h1>

  <h2>Vídeos</h2>

  <ul class="videos">
    <li>Como desenvolver uma pokedex com JavaScript puro</li>
    <li>Como desenvolver uma aplicação que busca e exibe letras de músicas, com JavaScript puro</li>
    <li>Como gerar um template html com JavaScript</li>
    <li>Como refatorar uma função que tem mais de uma responsabilidade | JavaScript</li>
    <li>Como eliminar a sintaxe objeto.propriedade em seu código | JavaScript</li>
  </ul>

  <button>Adicionar vídeos</button>

  <script src="./app.js"></script>
</body>
</html>
```

Javascript:

```javascript
const showChallengerNumber = (number) => {
  console.log(`***** Exercício ${number} *****`);
};
showChallengerNumber(1);
/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/
const ul = document.querySelector(".videos");
//duas formas de obter a lista de todas as lis
const lis = Array.from(ul.children); //convertendo HTML collector
const insertClassVideoCallBack = (li) => {
  li.classList.add("video");
};
lis.forEach(insertClassVideoCallBack);
console.log(lis);

showChallengerNumber(2);
/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/
const h2 = document.querySelector("h2");
const fatherH2 = h2.parentElement;
console.log(fatherH2);

showChallengerNumber(3);
/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/
const h1 = document.querySelector("h1");
console.log(h1.nextElementSibling);

showChallengerNumber(4);
/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/
console.log(ul.previousElementSibling);

showChallengerNumber(5);
/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/
const showCleckedLi = (event) => {
  console.log(event.target.textContent);
};
const addClickEvent = (li) => {
  li.addEventListener("click", showCleckedLi);
};
lis.forEach(addClickEvent);

showChallengerNumber(6);
/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [
  {
    name: "Como o promise all funciona | JavaScript",
    length: "00:01:52",
  },
  {
    name: "Como refatorar um for loop | JavaScript",
    length: "00:04:18",
  },
  {
    name: "Como fazer requisições HTTP com o método fetch | JavaScript",
    length: "00:02:55",
  },
];
const button = document.querySelector("button");

const insertVideos = ({ name, length }) => {
  ul.innerHTML += `<li class="video">${name} | ${length}</li>`;
};
const addVideoClickEvent = () => {
  videos.forEach(insertVideos);
};

button.addEventListener("click", addVideoClickEvent);

showChallengerNumber(7);
/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/
h1.addEventListener("click", () => {
  //document.body.remove()
  document.body.innerHTML = "";
});
```

#### Destructuring

Destructuring em JavaScript é uma técnica que permite extrair dados de arrays ou objetos em variáveis individuais de forma mais simples e concisa.

Por exemplo, suponha que você tenha o seguinte objeto:

```javascript
const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};
```

Para extrair os valores das propriedades `nome` e `idade` do objeto `pessoa` e armazená-los em variáveis separadas, você pode utilizar a sintaxe de destructuring da seguinte maneira:

```javascript
const { nome, idade } = pessoa;
```

Agora, as variáveis `nome` e `idade` contêm, respectivamente, os valores `'João'` e `30`.

Você também pode usar destructuring em arrays. Por exemplo, suponha que você tenha o seguinte array:

```javascript
const numeros = [1, 2, 3];
```

Para extrair os valores dos elementos do array e armazená-los em variáveis separadas, você pode usar a seguinte sintaxe de destructuring:

```javascript
const [primeiroNumero, segundoNumero, terceiroNumero] = numeros;
```

Agora, as variáveis `primeiroNumero`, `segundoNumero` e `terceiroNumero` contêm, respectivamente, os valores `1`, `2` e `3`.

A sintaxe geral do destructuring é a seguinte:

```javascript
// Para objetos
const { propriedade1, propriedade2, ...resto } = objeto;

// Para arrays
const [ elemento1, elemento2, ...resto ] = array;
```

Aqui, `propriedade1`, `propriedade2` e `elemento1`, `elemento2` são as variáveis que receberão os valores extraídos do objeto ou array, respectivamente. O operador `...resto` indica que o restante dos valores do objeto ou array serão armazenados na variável `resto`.

O destructuring também pode ser utilizado em funções para receber argumentos nomeados ou para definir valores padrão. Por exemplo:

```javascript
// Recebendo argumentos nomeados
function imprimeDados({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}

imprimeDados({ nome: 'João', idade: 30 }); // Imprime "Nome: João, Idade: 30"

// Definindo valores padrão
function calculaArea({ largura = 0, altura = 0 } = {}) {
  return largura * altura;
}

calculaArea({ largura: 10, altura: 5 }); // Retorna 50
calculaArea(); // Retorna 0
```

Essas são algumas das maneiras em que a técnica de destructuring pode ser usada em JavaScript para simplificar o código e torná-lo mais legível.
