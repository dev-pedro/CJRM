<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Desenvolvendo um popup - Aula 04-04

### Resumo

Nesta aula foi desenvolvido um popup e também foi apresentado o método `some()`.

HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desenvolvendo um Popup</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button>Clique aqui</button>
    <div class="popup-wrapper">
        <div class="popup">
            <div class="popup-close">x</div>

            <div class="popup-content">
                <h2>Popup deselegante</h2>
                <p>O autor do popup foi o programador Ethan Zuckerman.</p>
                <a class="popup-link" href="#">Saiba mais</a>
            </div>
        </div>
    </div>
    <script src="/app.js"></script>
</body>
</html>
```

CSS:

```css
* {
    box-sizing: border-box;
}

button {
    display: block;
    margin: 20px auto;
    background: crimson;
    color: white;
    border: 0;
    cursor: pointer;
    padding: 6px 10px;
    border-radius: .4rem;
}

.popup-wrapper {
    display: none;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.popup {
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    width: 100%;
    max-width: 300px;
    margin: 10% auto;
    padding: 20px;
    background: white;
    position: relative;
    border-radius: .8rem;
}

.popup a {
    color: white;
    cursor: pointer;
    padding: 6px 10px;
    text-decoration: none;
    background: crimson;
}

.popup-close {
    position: absolute;
    top:  5px;
    right: 10px;
    cursor: pointer;
}
```

Javascript:

```javascript
const callPopup = document.querySelector("button");
const popupWrapper = document.querySelector(".popup-wrapper");

callPopup.addEventListener("click", () => {
  popupWrapper.style.display = "block";
});

//Evento de clique no Popup
popupWrapper.addEventListener("click", (event) => {
  //identifica a classe do elemento clicado
  const classNameTarget = event.target.classList[0];
  const classNameArrays = ["popup-close", "popup-wrapper", "popup-link"];
  //verifica se a classe de um dos elementos clicado contém no array "classNameArrays"
  const actionClose = classNameArrays.some(
    (className) => className === classNameTarget
  );

  //fecha o popup
  if (actionClose) {
    popupWrapper.style.display = "none";
  }
});
```

<img src="file:///home/pedro/Dropbox/CJRM/Resumos/Etapa%2005%20-%20O%20Document%20Object%20Model%20-%20DOM/popup.png" title="" alt="" data-align="center">

#### some()

O método `some()` é um método em JavaScript que é usado para verificar se pelo menos um elemento de um array satisfaz a uma determinada condição. Ele retorna um valor boolean `true` se pelo menos um elemento satisfaz a condição ou `false` se nenhum elemento satisfaz a condição.

O método `some()` recebe como argumento uma função de retorno de chamada (callback) que define a condição que deve ser verificada. Essa função é executada para cada elemento do array até que um elemento que satisfaça a condição seja encontrado ou até que todos os elementos tenham sido verificados.

A função de retorno de chamada recebe três argumentos:

- O valor do elemento atual do array;
- O índice do elemento atual do array;
- O próprio array sendo percorrido.

Aqui está um exemplo simples que usa o método `some()` para verificar se pelo menos um número em um array é maior que 10:

```javascript
const numeros = [2, 5, 8, 11, 13, 16];

const temNumeroMaiorQue10 = numeros.some(function(numero) {
  return numero > 10;
});

console.log(temNumeroMaiorQue10); // true
```

Neste exemplo, a função de retorno de chamada verifica se o número atual é maior que 10. Como o array contém os números 11, 13 e 16, que são maiores que 10, o método `some()` retorna `true`. Note que poderíamos ter utilizado uma arrow function para simplificar o código:

```javascript
const temNumeroMaiorQue10 = numeros.some(numero => numero > 10);
```

O método `some()` é muito útil quando precisamos verificar se pelo menos um elemento de um array satisfaz uma determinada condição antes de realizar uma ação específica.
