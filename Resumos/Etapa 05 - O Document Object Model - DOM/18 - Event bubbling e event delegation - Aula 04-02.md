<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Event bubbling e event delegation - Aula 04-02

### Resumo

Event bubbling e event delegation são dois conceitos importantes no desenvolvimento de aplicações JavaScript que envolvem interação com o usuário.

#### Event Bubbling (Bolha de Eventos):

Quando um evento é acionado em um elemento HTML, o evento é propagado (ou "borbulha") para os elementos pai na hierarquia do DOM, até que o evento chegue ao elemento raiz do documento. Esse processo é conhecido como "bubbling" (bolha) e permite que os eventos sejam tratados em vários níveis da hierarquia do DOM.

Por exemplo, se você clicar em um elemento filho em um elemento pai, o evento de clique será acionado primeiro no elemento filho e depois será propagado para o elemento pai e assim por diante até chegar ao elemento raiz do documento.

O evento bubbling é útil porque permite que você defina um único listener de evento em um elemento pai e, em seguida, trate os eventos em todos os elementos filhos. Isso pode ajudar a melhorar o desempenho e a eficiência do seu código.

#### Event Delegation (Delegação de Eventos):

A delegação de eventos é uma técnica que usa o evento bubbling para tratar eventos em vários elementos usando apenas um listener de evento em um elemento pai comum. Em vez de adicionar um listener de evento a cada elemento filho individualmente, você pode adicionar um listener de evento ao elemento pai e tratar o evento com base no elemento que originou o evento.

Por exemplo, imagine que você tem uma lista de itens que podem ser selecionados. Em vez de adicionar um listener de evento de clique a cada item individualmente, você pode adicionar um listener de evento de clique à lista pai e verificar qual item foi clicado usando a propriedade `event.target`.

Isso pode reduzir significativamente a quantidade de código que você precisa escrever e tornar seu código mais eficiente e escalável.

#### stopPropagation()

O método `stopPropagation()` é uma função em JavaScript que pode ser usada para interromper a propagação de eventos em um elemento específico na hierarquia do DOM durante o processo de bubbling.

Quando um evento é acionado em um elemento HTML, o evento é propagado (ou "bolha") para os elementos pai na hierarquia do DOM até chegar ao elemento raiz do documento. A propagação pode ser interrompida usando o método `stopPropagation()`.

Por exemplo, suponha que você tenha um listener de evento de clique em um elemento filho e também um listener de evento de clique em seu elemento pai. Se você clicar no elemento filho, o evento de clique será acionado primeiro no elemento filho e depois propagado para o elemento pai. Se você deseja evitar que o evento seja tratado no elemento pai, você pode usar o método `stopPropagation()` para interromper a propagação do evento no elemento filho.

Isso é útil quando você não deseja que o evento seja tratado em elementos pai adicionais, como no exemplo acima, onde você não deseja que o evento de clique seja tratado no elemento pai quando clicar no elemento filho.

No entanto, é importante ter cuidado ao usar `stopPropagation()` porque ele pode afetar o comportamento esperado do seu código e levar a erros difíceis de depurar. É recomendável usá-lo com moderação e apenas quando necessário.

Exemplos usados:

Javascript:

```javascript
const ul = document.querySelector('ul')

const lis = document.querySelectorAll("li");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const li = document.createElement('li')
  li.textContent = `Novo elemento`
  ul.append(li)
});

lis.forEach((li) => {
  li.addEventListener("click", (event) => {
    const clickedLi = event.target
    console.log('Clicou na LI')
    //clickedLi.style.textDecoration = 'line-through'
    //event.stopPropagation()
    clickedLi.remove()
  });
});

ul.addEventListener('click', (event)=>{
  const clickedElement = event.target 
  if(clickedElement.tagName === 'LI'){
    clickedElement.remove()
  }
})
```

HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Eventos de clique</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Todos</h1>

    <ul>
        <li>Comprar frango</li>
        <li>Ler livros</li>
        <li>Tocar violão</li>
        <li>Pagar as contas</li>
    </ul>

    <button>Adicionar item</button>
    
    <script src="./app.js"></script>
</body>
</html>
```

CSS:

```css
ul {
    padding: 0;
}

li {
    list-style-type: none;
    max-width: 200px;
    padding: 8px;
    margin: 8px 0;
    background: #eee;
    border: 1px dotted #ddd;
}
```

#### Conclusão

Em resumo, o event bubbling e event delegation são conceitos importantes no desenvolvimento de aplicações JavaScript, e a delegação de eventos é uma técnica útil que usa o event bubbling para tratar eventos em vários elementos usando apenas um listener de evento em um elemento pai comum.
