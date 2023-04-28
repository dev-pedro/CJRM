const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')
const bruxoOuTrouxa = document.querySelector('.bruxo-trouxa')
const questionsContainer = document.querySelector('.questions')
let correctAnswers = []
const allQuestions = []
let score = 0
let wasAnswered = false
let templateHTML = ''

/**Cria as perguntas com as opções dentro do form
 * esta função retorna um template HTML contendo
 * RECEBE COMO ARGUMENTO UM ARRAY DE OBJETOS
 * uma div com
 *  - titulo da pergunta
 *  - opções de resposta
 * os estilos CSS são "bootstrap@4.4.1"
 */
function insertAsketsOnIndexHTML (questions = {}) {
  let asksLabel = ''
  questions.forEach(({ number, title, options, correctAnswer }) => {
    //adiciona em um arrays as respostas corretas
    correctAnswers.push(correctAnswer)

    //cria as input label com as opções de respostas
    options.forEach((option, index) => {
      asksLabel += `<div class="form-check my-2 text-black-50">
                        <label class="form-check-label">
                        <input class="pergunta" type="radio" name="inputQuestion${number}" value="${index}" checked/>
                        ${option}
                        </label>
                        </div>`
    })
    //cria a pergunta com as opções de respostas
    templateHTML += `<div class="my-5">
                <p class="lead font-weight-normal">
                ${number}. ${title}
                </p>
                ${asksLabel}
                </div>
            </div>`
    asksLabel = '' //limpa asksLabel para evitar duplicação
  })

  questionsContainer.innerHTML = templateHTML
  form.insertAdjacentElement('afterbegin', questionsContainer)
  //return templateHTML
}

//para cada pergunta no quiz é coletada a resposta do usuário
const getUserAnswers = () =>
correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value)
//caucula o resultado das respostas
const getScore = (userAnswers = []) => {
  const percentualAsked = Math.round(100 / userAnswers.length)
  if (!wasAnswered) {
    return userAnswers.reduce((acc, answer, index) => {
      return answer === correctAnswers[index] ? acc + percentualAsked : acc
    }, 0)
  }
  return score
}

//sobe a página para o topo da aplicação e mostra o resultado
const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  finalScoreContainer.classList.remove('d-none')
}

//mostra mensagem conforme a pontuação
const showBruxoOuTrouxa = () => {
  const showBruxoOuTrouxa = bruxoOuTrouxa.querySelector('span')
  if (score >= 50) {
    showBruxoOuTrouxa.textContent = '" Bruxo "'
  } else {
    showBruxoOuTrouxa.textContent = '" Trouxa "'
  }
  setTimeout(() => {
    bruxoOuTrouxa.classList.remove('d-none')
  }, 1000)
}

//anima a pontuação do resultado final
const animateFinalScore = () => {
  let counter = 0
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
      showBruxoOuTrouxa()
    }
    finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 50)
  wasAnswered = true //evita soma do resultado repetidas vezes
}

//envia o form
const onsubmitAnswers = event => {
  event.preventDefault() //evita que o form seja enviado

  const userAnswers = getUserAnswers()
  score = getScore(userAnswers)
  showFinalScore()
  animateFinalScore()
}

//adiciona um ouvinte ao form
form.addEventListener('submit', onsubmitAnswers)

//carrega um JSON e chama function para popular o index
fetch('./questions.json')
.then(response => response.json())
.then(data => {
  //chama o metodo que criar as perguntas
  insertAsketsOnIndexHTML(data.questions)
})
