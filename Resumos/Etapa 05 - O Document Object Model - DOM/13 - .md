<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 02 da etapa 05 - Aula 03-01

### Resumo

Javascript:

```javascript
/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/
const titleH1 = document.querySelector("h1");
titleH1.textContent = titleH1.textContent.toUpperCase();

/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/
let ul = document.querySelector(".numbers");

const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55];
const insertNumberIntoUl = (number) => {
  ul.innerHTML += `<li class="number">${number}</li>`;
};
numbers.forEach(insertNumberIntoUl);

/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/
const allLi = ul.querySelectorAll(".number");

const changeLiColor = (li) => {
  const isEven = Number(li.textContent) % 2 === 0;
  isEven
    ? (li.style.color = "lightblue")
    : li.setAttribute("style", "color:pink");
};

allLi.forEach(changeLiColor);

/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/
document.body.classList.add("body-background")
//document.body.classList.toggle('body-background')

/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/
const link = document.querySelector(".link");
link.setAttribute(
  "href",
  "https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo"
);

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/
console.log(link.getAttribute("href"));

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/
console.log(titleH1.style);

/*
  08

  - Remova a classe "body-background", do elemento body.
*/
document.body.classList.remove("body-background");

/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/
link.classList.toggle("link");
```

HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exercícios da aula 02 da etapa 05</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <h1>Exercícios da aula 02 da etapa 05</h1>

  <ul class="numbers"></ul>

  <a class="link" href="#">Repo de exercícios e dúvidas dos alunos(as) do CJRM</a>

  <script src="./app.js"></script>
</body>
</html>
```

CSS:

```css
.body-background {
  color: white;
  background-color: #3d0f92;
}

.number {
  list-style: none;
}

.link {
  color: lightblue;
}
```

# 

Aprendi as primeriras manipulações de `style` e `tags`HTML via Javascript.
