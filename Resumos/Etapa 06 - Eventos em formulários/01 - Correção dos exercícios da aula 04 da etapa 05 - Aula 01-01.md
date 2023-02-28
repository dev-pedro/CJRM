<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 04 da etapa 05 - Aula 01-01

### Resumo

Nestes exercícios aprendi sobre aplicação de `distruction` em elementos `html` durante o listener de eventos, melhorar a refatoração e organizar o código, eventos de `click`, `copy`, atribuir cor em um elemento através da propriedade `style`.

HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./style.css">
  <title>Exercícios da aula 04 da etapa 05</title>
</head>
<body>
  <div>
    <h1>3 objetos que toda casa brasileira já teve</h1>
    
    <p>TV portátil</p>
    <p>Antena UHF</p>
    <p>Galinha da Maggi</p>
  </div>
  <h2 class="content-h2"></h2>
  <div class="egg">Mova o mouse aqui dentro</div>
  <button>Mudar cor do ovo</button>

  <script src="./app.js"></script>
</body>
</html>
```

CSS:

```css
.egg {
  width: 300px;
  height: 300px;
  background: lightblue;
  border-radius: 50%;
  margin: 30px auto;
  text-align: center;
  padding-top: 50px;
}
```

Javascript:

```javascript
/*
01

  - Faça com que ao clicar em um dos elementos dentro da div, a mensagem  
    'Clicou na div.' não seja exibida no console.
*/
//declaração das const 
const div = document.querySelector('div')
const elementsInsideDiv = Array.from(div.children)
const h2Content = document.querySelector('.content-h2')
const egg = document.querySelector('.egg')
const button = document.querySelector('button')

//exercício 1, 2, 3
//distruction no elemento para acessar a propriedade target
const showClickedElement = ({ target }) => {
  const clickedElementName = target.tagName.toLowerCase()
  if (clickedElementName === 'div') {
    console.log('Clicou na div.') //exercício 2
    h2Content.textContent = 'Clicou na div.'
    return
  }
  h2Content.textContent = `Clicou no ${clickedElementName}, filho da div.` //exercício 3
}

//exercício 4
const logCopyMaessage = event => {
  console.log('Texto copiado!')
}

//exercício 5
const showCoordenates = ({ offsetX, offsetY }) => {
  egg.textContent = `Eixo X: ${offsetX} | Eixo Y: ${offsetY}`
}

//exercício 6
const changeEggColor = () => {
  egg.style.background = 'lightgoldenrodyellow'
}

//Listner de eventos
div.addEventListener('click', showClickedElement)
h2Content.addEventListener('copy', logCopyMaessage)
egg.addEventListener('mousemove', showCoordenates)
button.addEventListener('click', changeEggColor)

/*
02

  - No código acima, faça com que quando um filho da div for clicado, a mensagem  
    exibida no console seja "Clicou no NOME_DA_TAG_COM_LETRAS_MINÚSCULAS, filho
    da div.".
*/

/*
  03

  - No index.html, abaixo da div sem classe, insira um h2;
  - Faça com que a mensagem de clique na div e a mensagem de clique em algum
    filho da div, ao invés de ser exibida no console, seja inserida neste h2.
*/

/*
  04

  - Faça com que quando o texto do h2 for copiado, a mensagem "Texto copiado!"  
    seja exibida no console.
*/

/*
  05

  - Faça com que o movimento do mouse dentro da div com a classe "egg" substitua
    o texto que ela tem por 
    "Eixo X: COORDENADA_EIXO_X | Eixo Y: COORDENADA_EIXO_Y".
*/

/*
  06

  - Modifique a cor do ovo para "lightgoldenrodyellow" quando o botão for 
    clicado.
*/

/*
  07

  - Se o array de pessoas abaixo conter, no mínimo, um(a) Front-end developer,
    exiba a mensagem abaixo no console.

    "O array people contém, no mínimo, um(a) Front-end developer."
*/

const people = [
  { id: 1, name: 'Pedro Henrique', profession: 'Dentista' },
  { id: 2, name: 'Fábio Alexandre', profession: 'Físico' },
  { id: 3, name: 'Thiago Ferreira', profession: 'Veterinário' },
  { id: 4, name: 'Marcelo Antonio', profession: 'Matemático' },
  { id: 5, name: 'Camilla Midori', profession: 'Engenheira Civil' },
  { id: 6, name: "Gustavo D'Aqui", profession: 'Gerente de Marketing' },
  { id: 7, name: 'Ana Paula', profession: 'Front-end developer' },
  { id: 8, name: 'Matheus Manucci', profession: 'Piloto' },
  { id: 9, name: 'Hamilton Silva', profession: 'Advogado' }
]

//exercício 7
const isDeveloper = people.some(
  //distruction no objeto para acessar a propriedade "profession"
  ({ profession }) => profession === 'Front-end developer'
)
if (isDeveloper)
  console.log('O array people contém, no mínimo, um(a) Front-end developer.')
```
