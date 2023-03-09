<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# setTimeout() e o objeto window - Aula 02-02

### Resumo

#### setTimeout()

Em JavaScript, a função `setTimeout()` é usada para atrasar a execução de uma função específica por um determinado período de tempo. Ela recebe dois argumentos: a função que deve ser executada e o tempo, em milissegundos, que deve ser esperado antes de executar a função.

Por exemplo, o seguinte código chama a função `alert()` após 5 segundos:

```javascript
setTimeout(function() {
  alert('Hello, world!');
}, 5000);
```

O objeto `window` em JavaScript representa a janela do navegador. Ele fornece vários métodos e propriedades que podem ser usados para interagir com a janela do navegador e com o documento HTML que está sendo exibido.

Por exemplo, a propriedade `window.location` contém informações sobre a URL atual da página e pode ser usada para redirecionar o navegador para uma nova página. O método `window.open()` pode ser usado para abrir uma nova janela do navegador.

Em resumo, enquanto `setTimeout()` é uma função para agendar a execução de uma função depois de um certo período de tempo, o objeto `window` é usado para acessar e interagir com a janela do navegador e com o documento HTML que está sendo exibido.

#### scrollTo()

A função `scrollTo()` em JavaScript é usada para rolar a página para uma determinada posição especificada. Ela pode ser usada para rolar a página verticalmente ou horizontalmente.

A sintaxe da função `scrollTo()` é a seguinte:

```javascript
window.scrollTo(x, y);
```

Onde `x` é a coordenada horizontal da posição desejada e `y` é a coordenada vertical. Por exemplo, para rolar a página para a posição `x = 0` e `y = 500`, podemos chamar a função `scrollTo()` da seguinte maneira:

```javascript
scrollTo(0, 500);
```

Além disso, também é possível usar a função `scrollTo()` em conjunto com a propriedade `window.scrollX` e `window.scrollY`, que indicam a posição atual da janela de visualização em relação ao topo e à esquerda da página, respectivamente. Por exemplo, para rolar a página 100 pixels para baixo a partir da posição atual, podemos fazer o seguinte:

```javascript
window.scrollTo(window.scrollX, window.scrollY + 100);
```

Existem também outras variações da função `scrollTo()` em JavaScript, como `scrollBy()` que permite rolar a página por uma quantidade relativa em vez de uma posição absoluta e `scrollIntoView()` que permite rolar a página para a posição de um elemento específico na página.

#### Código usado na aplicação

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

Javascript:

```javascript
//pega a referencia do 'form' com as perguntas
const form = document.querySelector('.quiz-form')
//array contendo as respostas certas das perguntas da tela do Quiz
const correctAnswers = ['C', 'A', 'C', 'B', 'A']
//pega a referenv=cia da div 'result' para mostrar o resultado
const finalResult = document.querySelector('.result')

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
    finalResult.querySelector('span').textContent = `${score}%`
    finalResult.classList.remove('d-none')

}

//adiciona um ouvinte ao form
form.addEventListener('submit', onsubmitAnswers)

```
