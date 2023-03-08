<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Template HTML e checando as respostas - Aula 01-03

### Resumo

#### Início da aplicação - Quiz

Códigos utilizados nessa aula.

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <title>Quiz | Você consegue acertar qual é o filme pelo título em português de Portugal?</title>
</head>
<body>
  <div class="intro py-3 bg-primary text-center">
    <div class="container">
      <h2 class="text-light display-3 my-4">Quiz</h2>
    </div>
  </div>

  <div class="quiz py-4 bg-dark">
    <div class="container">
      <h2 class="my-5 text-white">Você consegue acertar qual é o filme pelo título em português de Portugal?</h2>

      <form class="quiz-form text-light">
        <div class="my-5">
          <p class="lead font-weight-normal">1. "O Mal Disposto" é o nome dado para o filme:</p>
          <div class="form-check my-2 text-white-50">
            <label class="form-check-label">
              <input type="radio" name="inputQuestion1" value="A" checked>
              Psicose
            </label>
          </div>
          <div class="form-check my-2 text-white-50">
            <label class="form-check-label">
              <input type="radio" name="inputQuestion1" value="B">
              Meu Malvado Favorito
            </label>
          </div>
        </div>

        <div class="my-5">
          <p class="lead font-weight-normal">2. "O Aviso" é o nome dado para o filme de terror:</p>
          <div class="form-check my-2 text-white-50">
            <label class="form-check-label">
              <input type="radio" name="inputQuestion2" value="A" checked>
              O Grito
            </label>
          </div>
          <div class="form-check my-2 text-white-50">
            <label class="form-check-label">
              <input type="radio" name="inputQuestion2" value="B">
              O Chamado
            </label>
          </div>
        </div>

        <div class="my-5">
          <p class="lead font-weight-normal">3. "Uma Família a Beira de um Ataque de Nervos" é o título de:</p>
          <div class="form-check my-2 text-white-50">
            <label class="form-check-label">
              <input type="radio" name="inputQuestion3" value="A" checked>
              Família do Bagulho
            </label>
          </div>
          <div class="form-check my-2 text-white-50">
            <label class="form-check-label">
              <input type="radio" name="inputQuestion3" value="B">
              Pequena Miss Sunshine
            </label>
          </div>
        </div>

        <div class="my-5">
          <p class="lead font-weight-normal">4. "O Rei dos Gazeteiros" é o famoso filme:</p>
          <div class="form-check my-2 text-white-50">
            <label class="form-check-label">
              <input type="radio" name="inputQuestion4" value="A" checked>
              O Lobo de Wall Street
            </label>
          </div>
          <div class="form-check my-2 text-white-50">
            <label class="form-check-label">
              <input type="radio" name="inputQuestion4" value="B">
              Curtindo a Vida Adoidado
            </label>
          </div>
        </div>
        
        <div class="text-center">
          <button class="btn bg-primary text-light">Enviar</button>
        </div>
      </form>
    </div>
  </div>

  <script src="./app.js"></script>
</body>
</html>
```

Javascript:

```javascript
//pega a referencia do form com as perguntas
const form = document.querySelector('.quiz-form')
//array contendo as respostas certas das perguntas da tela do Quiz
const correctAnswers = ['B','B','B','B']

//adiciona um ouvinte ao form
form.addEventListener('submit', event => {
    event.preventDefault()//evita que o form seja enviado

    let score = 0
    //armazena as resposta do usuário no array 'userAnswers'
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    //verifica as resposta do usuário e adiciona a pontuação
    userAnswers.forEach((userAnswer, index) => {
        //caso resposta certa +25
        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    })
    console.log(score)//mostra no console os pontos do usuário

})
```

#### Tela da aplicação

![](../Etapa%2007%20-%20Aplicação:%20Quiz/quiz.png)
