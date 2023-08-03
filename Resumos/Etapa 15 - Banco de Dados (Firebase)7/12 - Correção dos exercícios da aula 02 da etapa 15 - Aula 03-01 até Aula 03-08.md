<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 02 da etapa 15 - Aula 03-01 até Aula 03-08

### Resumo

### Temas Abordados nas Aulas dos Exercícios

Em JavaScript, o termo "utility functions" se refere a funções que são projetadas para realizar tarefas comuns e úteis em programação. Essas funções são criadas para facilitar a reutilização de código e simplificar a implementação de operações frequentes.

As utility functions geralmente não estão diretamente relacionadas a uma tarefa específica do domínio do problema que você está resolvendo, mas sim a funcionalidades genéricas que podem ser aplicadas em várias situações.

Exemplos de utility functions em JavaScript incluem:

1. Funções para manipulação de arrays:
   
   - `Array.prototype.map()`: Cria um novo array com os resultados da aplicação de uma função a cada elemento do array original.
   - `Array.prototype.filter()`: Cria um novo array com todos os elementos que passam por um teste (fornecido por uma função).
   - `Array.prototype.reduce()`: Reduz os elementos de um array para um único valor, aplicando uma função acumuladora.

2. Funções para manipulação de strings:
   
   - `String.prototype.trim()`: Remove os espaços em branco do início e do final de uma string.
   - `String.prototype.split()`: Divide uma string em um array de substrings, com base em um separador especificado.

3. Funções para manipulação de datas e horas:
   
   - `Date.now()`: Retorna o número de milissegundos desde 1º de janeiro de 1970 (Unix Epoch) até o momento atual.
   - `Date.prototype.toISOString()`: Retorna uma representação da data em formato de string no padrão ISO 8601.

4. Funções de validação e utilitários diversos:
   
   - `isNaN()`: Verifica se um valor é NaN (Not-a-Number).
   - `parseInt()`: Converte uma string em um número inteiro.
   - `encodeURIComponent()` e `decodeURIComponent()`: Codifica e decodifica componentes de uma URL.

Essas são apenas algumas das muitas utility functions disponíveis em JavaScript. É comum que desenvolvedores criem suas próprias utility functions personalizadas para resolver problemas específicos em seus projetos, tornando o código mais limpo, organizado e mais fácil de manter. Essas funções podem ser agrupadas em bibliotecas e módulos reutilizáveis para facilitar o compartilhamento com outros desenvolvedores.

### Criando Funções Utilitárias

Para criar uma função que permita digitar menos ao usar o `console.log()`, você pode fazer o "destructuring" do objeto `console` e criar uma nova função chamada `log`, que encapsula o `console.log()` para que você possa usar apenas `log()` para exibir mensagens no console. Aqui está dois exemplo de como fazer isso:

1. Exemplo

```javascript
// Destructuring do objeto console
const { log } = console;

// Exemplo de uso
log('Isso é um exemplo.');
log('Você pode usar a função "log" agora!');
```

Neste exemplo, estamos utilizando o recurso de destructuring para extrair a função `log` do objeto `console`. Em seguida, atribuímos essa função extraída a uma variável com o mesmo nome (`log`). Agora, podemos chamar a função `log()` diretamente, em vez de usar `console.log()`, o que nos permite digitar menos ao exibir mensagens no console.

2. Exemplo

```javascript
// Criando uma funç
const newLog = (...value) => console.log(...value)

// Exemplo de uso
log('Isso é um exemplo.');
newLog('Arg 1 - Você pode usar a função "log" agora com mais argumentos!', 'Arg 2 - Segundo argumento!');
```

No código fornecido, temos duas abordagens para criar funções que imprimem mensagens no console, mas com algumas diferenças na sua implementação.

1. **Abordagem 1: const { log } = console;**
   
   Nesta abordagem, estamos usando a técnica de "destructuring" do objeto `console`, onde estamos extraindo a função `log` do objeto `console` e armazenando-a em uma constante com o mesmo nome, `log`. Dessa forma, podemos usar `log` como um alias para `console.log()`, o que nos permite chamar `log('mensagem')` em vez de `console.log('mensagem')`. O comportamento da função `log` será exatamente o mesmo que a função `console.log()` original, pois é apenas um alias para ela.
   
   **Exemplo de uso:**
   
   ```javascript
   log('Isso é um exemplo.');
   ```

2. **Abordagem 2: const newLog = (...value) => console.log(...value);**
   
   Nesta abordagem, estamos criando uma nova função chamada `newLog` usando uma função de seta (arrow function). A função `newLog` recebe um número variável de argumentos (representados por `...value`) e, em seguida, repassa esses argumentos para a função `console.log()` usando a sintaxe `console.log(...value)`. Isso permite que a função `newLog` suporte o mesmo comportamento que `console.log()` quando se trata de exibir mensagens no console.
   
   **Exemplo de uso:**
   
   ```javascript
   newLog('Arg 1 - Você pode usar a função "log" agora com mais argumentos!', 'Arg 2 - Segundo argumento!');
   ```

Ambas as abordagens têm resultados semelhantes no exemplo de uso. Elas permitem exibir mensagens no console, mas a primeira abordagem usa um alias (`log`) para a função `console.log()`, enquanto a segunda abordagem cria uma nova função que apenas repassa os argumentos para `console.log()`. A escolha entre as duas abordagens depende das preferências pessoais do desenvolvedor e do contexto específico do código em que serão utilizadas. Ambas são válidas e podem ser úteis para diferentes situações.

### IntelliSense

IntelliSense é um recurso encontrado em muitos ambientes de desenvolvimento integrado (IDEs) que ajuda os programadores a escrever código de forma mais eficiente e precisa. Foi desenvolvido pela Microsoft e originalmente implementado no Microsoft Visual Studio, mas agora está disponível em muitos outros ambientes de desenvolvimento e editores de código.

O IntelliSense fornece recursos de autocompletar, sugestões contextuais, informações sobre parâmetros de função, documentação e muito mais, tudo enquanto você digita o código. O objetivo principal do IntelliSense é aumentar a produtividade do programador, economizando tempo e minimizando erros comuns.

Os principais recursos do IntelliSense incluem:

1. Autocompletar: O IntelliSense exibe uma lista de opções de código relevantes enquanto você digita, permitindo que você pressione "Tab" ou "Enter" para completar automaticamente o código desejado.

2. Sugestões de código: À medida que você digita, o IntelliSense sugere o próximo código que pode ser relevante para o contexto, tornando a escrita do código mais rápida e eficiente.

3. Documentação de código: O IntelliSense exibe informações contextuais sobre funções, métodos e classes, como descrições, parâmetros, tipos de retorno e exemplos de uso, facilitando o entendimento do código e sua utilização correta.

4. Navegação de código: O IntelliSense permite navegar facilmente pelo código-fonte, fornecendo atalhos para a definição de classes, métodos e variáveis.

5. Realce de erros: O IntelliSense identifica erros de sintaxe à medida que você digita, destacando-os com cores específicas para correção rápida.

O IntelliSense é especialmente útil em linguagens de programação complexas, como C++, C#, Python, JavaScript e outras, onde há muitas funções, bibliotecas e classes disponíveis para uso. Ele aumenta a produtividade do desenvolvedor, reduzindo a necessidade de pesquisar a documentação constantemente e melhorando a precisão do código escrito.

Por fim, o IntelliSense é um recurso poderoso para programadores de todos os níveis de experiência, tornando o processo de desenvolvimento de software mais eficiente e agradável. É um dos muitos recursos que ajudam a tornar as IDEs modernas ferramentas essenciais para os desenvolvedores.

[IntelliSense in Visual Studio Code](https://code.visualstudio.com/docs/editor/intellisense)

### Intl.DateTimeFormat() constructor

O construtor `Intl.DateTimeFormat()` é uma função nativa do JavaScript usada para criar objetos que representam formatação de data e hora de acordo com as regras do local especificado. Ele faz parte da API de Internacionalização, que permite que aplicativos exibam informações de data e hora de maneira amigável ao usuário e culturalmente apropriada com base no local do usuário.

Aqui está a sintaxe básica do construtor `Intl.DateTimeFormat()`:

```javascript
new Intl.DateTimeFormat(locales, options)
```

Parâmetros:

- `locales` (opcional): Uma string ou um array de strings que especificam o(s) local(is) ou etiqueta(s) de idioma a serem usados. O local determina como as informações de data e hora são formatadas. Se esse parâmetro não for fornecido, o local padrão do ambiente do usuário será usado.
- `options` (opcional): Um objeto contendo várias opções de configuração para formatar a data e a hora. Ele inclui propriedades como `timeZone`, `hour12`, `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`, etc.

Aqui está um exemplo de como usar `Intl.DateTimeFormat()`:

```javascript
const data = new Date('2023-08-03T12:34:56');
const local = 'pt-BR';
const opcoes = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short',
};

const formatador = new Intl.DateTimeFormat(local, opcoes);
const dataFormatada = formatador.format(data);
console.log(dataFormatada); // Saída: 3 de agosto de 2023, 12:34:56 PM PDT
```

Neste exemplo, estamos formatando a data `2023-08-03T12:34:56` no local `pt-BR` com várias opções de formatação. A saída resultante inclui o nome completo do mês, dia do mês, ano, hora (horas, minutos, segundos) e o nome curto do fuso horário (PDT - Horário de Verão do Pacífico).

O construtor `Intl.DateTimeFormat()` é uma ferramenta poderosa para trabalhar com formatação de data e hora, especialmente ao criar aplicativos internacionalizados que precisam exibir datas e horas em diferentes idiomas e regiões.

# Códigos Usados

HTML:

```html
<!DOCTYPE html>
<html lang="pt_BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Banco de Dados - Firebase</title>
  </head>
  <body>
    <div class="container text-white my-5">
      <h2>Games</h2>

      <ul data-js="games-list"></ul>

      <form data-js="add-game-form">
        <div class="mb-3">
          <label for="title" class="form-label">Nome</label>
          <input
            value=""
            class="form-control bg-transparent text-white"
            name="title"
            placeholder="Ex: Ghost of Tsushima"
            required
            autofocus
          />
        </div>

        <div class="mb-3">
          <label for="developer" class="form-label">Desenvolvedora</label>
          <input
            value=""
            class="form-control bg-transparent text-white"
            name="developer"
            placeholder="Ex: Capcom"
            required
          />
        </div>
        <button class="btn btn-success">Adicionar game</button>
      </form>

      <div class="d-grid gap2 mt-4">
        <button data-js="unsub" class="btn btn-outline-warning btn-lg">
          Desabilitar listener em tempo real
        </button>
      </div>
    </div>
    <script src="apiKeys.js"></script>
    <script type="module" src="app.js"></script>
  </body>
</html>
```

CSS:

```css
body {
    background-color: #212529;
  }
```

Javascript:

```javascript
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  addDoc,
  deleteDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const collectionGames = collection(db, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesLis = document.querySelector('[data-js="games-list"]')
const buttonUnsub = document.querySelector('[data-js="unsub"]')

const log = (...anyArg) => console.log(...anyArg)

const getFormatedDate = date => {
  const timeOptions = { dateStyle: 'short', timeStyle: 'short' }
  return new Intl.DateTimeFormat('pt-BR', timeOptions).format(date)
}

const renderGamesList = querySnapshot => {
  const hasPendingWrites = querySnapshot.metadata.hasPendingWrites
  if (!hasPendingWrites) {
    gamesLis.innerHTML = querySnapshot.docs.reduce((acc, doc) => {
      const [id, { title, developedBy, createdAt }] = [doc.id, doc.data()]
      const date = createdAt.toDate()

      return `${acc}<li class="my-4 d-flex flex-column" data-id="${id}">
      <h5>${title}</h5>
      
      <ul>
        <li>Desenvolvido por ${developedBy}</li>
        <li>Adicionado ao banco em ${getFormatedDate(date)}</li>
      </ul>
  
      <button class="btn btn-danger btn-sm align-self-end m-2" data-remove="${id}">Remover</button>
      
    </li>`
    }, '')
  }
}

const to = async promise =>
  promise.then(result => [null, result]).catch(error => [error])

const addGame = async e => {
  e.preventDefault()
  const newGAme = {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    createdAt: serverTimestamp()  
  }

  const [error, doc] = await to(addDoc(collectionGames, newGAme))

  if (error) {
    return log(error)
  }

  log('Documento criado com o ID = ', doc.id)
  e.target.reset()
  e.target.title.focus()
}

const deleteGame = async e => {
  const removeId = e.target.dataset.remove

  if (!removeId) {
    return
  } // return early

  const [error] = await to(deleteDoc(doc(db, 'games', removeId)))

  if (error) {
    return log(error)
  }

  log('Game removido do FireStore')
}

const handleSnapshotError = e => log(e)

const unsubscribe = onSnapshot(
  collectionGames,
  renderGamesList,
  handleSnapshotError
)
formAddGame.addEventListener('submit', addGame)
gamesLis.addEventListener('click', deleteGame)
buttonUnsub.addEventListener('click', unsubscribe)

/*
// atualizar um documento no firestore

const docRef = doc(db, 'games', '7molj3lIL7QceBXIFu8Z')
if (false) {
  const updateDoc = { title: 'Viva Piñata', developedBy: 'Microsoft' }
  const merge = { merge: true }
  
  setDoc(docRef, updateDoc, merge)
  .then(() => log('Documento atualizado com sucesso'))
  .catch(log)
}

if (true) {
  const newTitleDoc = { title: 'Grand Turismo ' }
  updateDoc(docRef, newTitleDoc)
    .then(() => log('Documento atualizado com sucesso'))
    .catch(log)
}
*/
```
