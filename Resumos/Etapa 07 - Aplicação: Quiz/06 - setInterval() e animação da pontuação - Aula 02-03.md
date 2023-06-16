<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# setInterval() e animação da pontuação - Aula 02-03

### Resumo

Para criar uma animação de pontuação em JavaScript usando `setInterval()`, você pode seguir os seguintes passos:

1. Crie uma variável para armazenar a pontuação atual.
2. Crie uma função para atualizar a pontuação a cada intervalo de tempo desejado. Dentro da função, atualize a pontuação adicionando um valor específico a ela.
3. Crie uma função de animação para exibir a pontuação atualizada. Dentro da função de animação, você pode atualizar o conteúdo de um elemento HTML com a pontuação atualizada.
4. Use `setInterval()` para chamar a função de atualização de pontuação em um intervalo de tempo desejado.
5. Chame a função de animação dentro da função de atualização de pontuação para exibir a pontuação atualizada na página.

Aqui está um exemplo de código que implementa esse processo:

HTML:

```html
<div id="score">0</div>
```

JavaScript:

```javascript
let score = 0;
const updateScore = () => {
  score += 10; // Adiciona 10 à pontuação atual
  updateScoreAnimation();
}

const updateScoreAnimation = () => {
  const scoreElement = document.getElementById("score");
  // Atualiza o conteúdo do elemento HTML com a nova pontuação
  scoreElement.innerHTML = score;
}
// Chama a função updateScore() a cada 1000ms (1 segundo)
setInterval(updateScore, 1000); 
```

Este código irá atualizar a pontuação a cada segundo e exibi-la na página dentro do elemento HTML com o ID "score". Você pode ajustar o intervalo de tempo e o valor adicionado à pontuação dentro da função updateScore() para obter o efeito desejado.

#### setInterval() e setTimeout() - Diferenças

`setInterval()` e `setTimeout()` são duas funções JavaScript que permitem que você execute uma determinada tarefa em um intervalo de tempo específico.

A principal diferença entre as duas é que `setInterval()` executa a tarefa repetidamente em um intervalo de tempo fixo, enquanto `setTimeout()` executa a tarefa apenas uma vez após um intervalo de tempo específico.

Mais especificamente, `setInterval()` executa a tarefa repetidamente em intervalos fixos de tempo definidos em milissegundos, até que seja explicitamente interrompido com `clearInterval()`. Por exemplo, se você definir um intervalo de tempo de 1000ms (1 segundo) em `setInterval()`, a função será executada a cada 1 segundo.

Por outro lado, `setTimeout()` executa a tarefa apenas uma vez após um intervalo de tempo específico definido em milissegundos, e então para. Você pode usar `clearTimeout()` para cancelar a execução da tarefa antes do tempo definido expirar.

Em resumo, `setInterval()` é usado para executar uma tarefa em intervalos de tempo fixos e repetidos, enquanto `setTimeout()` é usado para executar uma tarefa apenas uma vez após um determinado intervalo de tempo.

#### Código utilizado na aula

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Quiz</title>
  </head>
  <body class="bg-light">
    <div class="intro py-3 bg-primary text-center">
      <div class="container">
        <h2 class="text-light display-3 my-4">Quiz</h2>
      </div>
    </div>

    <div class="result py-4 d-none bg-light text-center">
      <div class="container lead">
        <p>
          Você acertou
          <span class="text-primary display-4 p-3">0%</span>
          do quiz!
        </p>
      </div>
      <div class="trouxa-bruxo d-none text-primary display-4 p3">
        <p></p>
      </div>
    </div>

    <div class="quiz py-4 bg-light">
      <div class="container">
        <div class="quiz quiz-title">
          <h2 class="my-sm-n2 text-black" style="text-align: center">
            O Mundo Mágico de Harry Potter:
          </h2>
          <h6 class="my-sm-3 text-black" style="text-align: center">
            Um Quiz para Bruxos e Trouxas
          </h6>
        </div>

        <form class="quiz-form text-black">
          <div class="my-5">
            <p class="lead font-weight-normal">
              1. Qual é a varinha das varinhas?
            </p>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion1" value="A" />
                Varinha de Harry Potter
              </label>
            </div>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion1" value="B" />
                Varinha de Lord Voldemort
              </label>
            </div>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion1" value="C" />
                Varinha de Alvo Dumbledore
              </label>
            </div>
          </div>

          <div class="my-5">
            <p class="lead font-weight-normal">
              2. Qual é a casa de Hogwarts que representa a coragem?
            </p>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion2" value="A" />
                Grifinória
              </label>
            </div>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion2" value="B" />
                Sonserina
              </label>
            </div>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion2" value="C" />
                Corvinal
              </label>
            </div>
          </div>

          <div class="my-5">
            <p class="lead font-weight-normal">
              3. Qual é o patrono de Harry Potter?
            </p>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion3" value="A" />
                Leão
              </label>
            </div>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion3" value="B" />
                Coruja
              </label>
            </div>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion3" value="C" />
                Veado
              </label>
            </div>
          </div>

          <div class="my-5">
            <p class="lead font-weight-normal">
              4. Qual é o nome do elfo doméstico que pertencia à família Malfoy?
            </p>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion4" value="A" />
                Dobby
              </label>
            </div>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion4" value="B" />
                Kreacher
              </label>
            </div>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion4" value="C" />
                Winky
              </label>
            </div>
          </div>

          <div class="my-5">
            <p class="lead font-weight-normal">
              5. Qual é o nome da coruja de Harry Potter?
            </p>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion5" value="A" />
                Edwiges
              </label>
            </div>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion5" value="B" />
                Hagrid
              </label>
            </div>
            <div class="form-check my-2 text-black-50">
              <label class="form-check-label">
                <input type="radio" name="inputQuestion5" value="C" />
                Crookshanks
              </label>
            </div>
          </div>

          <!-- botão envio -->
          <div class="text-center">
            <button name="button" class="btn bg-primary text-light">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>

    <script src="./app.js"></script>
  </body>
</html>
```

CSS:

```css
.quiz-title {
    background: url('./images/hp.png');
    background-repeat: no-repeat;
    background-position: top;
    padding: 100px 0px 5px 0px;
}
```

Javascript:

```javascript
//pega a referencia do 'form' com as perguntas
const form = document.querySelector('.quiz-form')
//array contendo as respostas certas das perguntas da tela do Quiz
const correctAnswers = ['C', 'A', 'C', 'B', 'A']
//pega a referenv=cia da div 'result' para mostrar o resultado
const finalResult = document.querySelector('.result')
// const trouxaBrucho

//trata as respostas do usuário
const onsubmitAnswers = event => {
    event.preventDefault()//evita que o form seja enviado

    let score = 0
    //armazena as resposta do usuário no array 'userAnswers'
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value
    ]

    //verifica as resposta do usuário e adiciona a pontuação
    userAnswers.forEach((userAnswer, index) => {
        //caso resposta certa +20
        if(userAnswer === correctAnswers[index]){
            score += 20
        }
    })

    //sobe a página para o topo da aplicação
    scrollTo(0,0)

    //mostra o resultado em uma 'div' abaixo do nome da aplicação
    finalResult.classList.remove('d-none')

    //anima a pontuação do resultado final 
    let counter = 0
    const timer = setInterval(() => {

        if(counter === score){
            clearInterval(timer)
        }
        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    }, 20);

}

//adiciona um ouvinte ao form
form.addEventListener('submit', onsubmitAnswers)
```
