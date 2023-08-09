<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Práticas para evitar ataques Cross-site Scripting (XSS) no front-end - Aula 03-10

### Resumo

Para evitar ataques Cross-site Scripting (XSS) no front-end, você deve adotar práticas de desenvolvimento seguro. O XSS é uma vulnerabilidade comum que permite que atacantes injetem scripts maliciosos em páginas web e comprometam a segurança do usuário final. Aqui estão algumas práticas recomendadas para prevenir XSS no front-end:

1. Sanitize Input:
   Sempre sanitize (limpar) as entradas do usuário antes de exibi-las na página. Use bibliotecas e funções de sanitização para remover qualquer código malicioso, como tags de script, de campos de entrada, comentários e outros elementos suscetíveis a XSS.

2. Escape Output:
   Sempre escape (codifique) os dados antes de inseri-los em HTML, CSS ou JavaScript. Isso significa que você deve converter caracteres especiais (por exemplo, <, >, ", ') em suas entidades HTML correspondentes (&lt;, &gt;, &quot;, &apos;) para evitar que eles sejam interpretados como código.

3. Use CSP (Content Security Policy):
   Defina uma política de segurança de conteúdo (CSP) apropriada em seu cabeçalho HTTP para restringir quais recursos externos podem ser carregados na página e quais scripts podem ser executados. Isso ajuda a mitigar o risco de execução de scripts não confiáveis.

4. HTTP Only e Secure Cookies:
   Configure seus cookies para serem HTTP Only e Secure. O atributo HTTP Only impede que cookies sejam acessados por meio de scripts do lado do cliente, enquanto o atributo Secure garante que os cookies só são transmitidos por meio de conexões HTTPS seguras.

5. Evite o uso de "eval":
   Evite a função "eval()" e métodos similares que interpretam texto como código JavaScript. O uso de "eval()" pode tornar seu aplicativo vulnerável a ataques de injeção, incluindo XSS.

6. Use Bibliotecas Seguras:
   Ao utilizar bibliotecas e frameworks, escolha as que são conhecidas por tratar adequadamente a segurança, como Angular, React ou Vue.js. Essas bibliotecas têm recursos de segurança integrados que podem ajudar a proteger seu aplicativo contra vulnerabilidades, como XSS.

7. Filtre e Valide Dados:
   Certifique-se de filtrar e validar todos os dados do lado do cliente e do lado do servidor. Não confie apenas nos mecanismos de filtragem do cliente, pois eles podem ser facilmente contornados.

8. Mantenha o Software Atualizado:
   Certifique-se de estar usando as versões mais recentes de bibliotecas, frameworks e dependências. Mantenha-se atualizado sobre as últimas correções de segurança e aplique-as regularmente.

9. Conscientização e Treinamento:
   Forneça treinamento adequado aos desenvolvedores sobre práticas seguras de codificação e conscientize-os sobre as ameaças de segurança, incluindo o XSS.

10. Realize Testes de Segurança:
    Realize testes de segurança regularmente em seu aplicativo para identificar possíveis vulnerabilidades de XSS e outras ameaças de segurança. Utilize ferramentas de teste automatizadas e faça revisões de código entre os membros da equipe.

Seguindo essas práticas, você estará em uma posição mais segura para mitigar os riscos de ataques de Cross-site Scripting no front-end do seu aplicativo web. Lembre-se de que a segurança é um processo contínuo e deve ser incorporada desde o início do desenvolvimento.

### Quando não usar innerHtml ou qualquer outra feature parecida

**Quando não se deve usar innerHtml ou qualquer outra feature que parceie string para HTML quando essa string não está no seu controle.**

É importante evitar o uso de recursos como `innerHTML` em determinados cenários para garantir a segurança do seu aplicativo e prevenir vulnerabilidades de segurança, como ataques de Cross-site Scripting (XSS). Aqui estão alguns casos em que é recomendado evitar o uso de `innerHTML` ou recursos similares:

1. Inserção de conteúdo não confiável:
   Não use `innerHTML` para inserir diretamente conteúdo não confiável fornecido pelos usuários. Isso pode levar a ataques de XSS, pois o conteúdo não filtrado é interpretado como código HTML ou JavaScript pelo navegador. Sempre que precisar incluir conteúdo fornecido pelo usuário, utilize métodos de sanitização e escape adequados para garantir que nenhum código malicioso seja executado.

2. Inclusão de scripts externos:
   Evite utilizar `innerHTML` para inserir scripts externos dinamicamente, pois isso pode abrir brechas para ataques de injetar códigos maliciosos no seu aplicativo. É preferível carregar scripts externos usando outros métodos, como a criação de elementos `<script>` dinamicamente ou incluindo-os diretamente no documento HTML.

3. Manipulação de grandes blocos de conteúdo:
   O uso excessivo de `innerHTML` para manipular grandes blocos de conteúdo pode levar a problemas de desempenho e eficiência, pois a renderização de grandes partes do DOM pode ser mais lenta em comparação com a manipulação direta dos elementos do DOM.

4. Perda de manipulação de eventos:
   Quando você utiliza `innerHTML` para substituir ou modificar elementos no DOM, os manipuladores de eventos associados a esses elementos podem ser perdidos. Isso pode causar comportamentos inesperados ou problemas de interatividade no seu aplicativo.

5. Estruturação complexa de templates:
   Se o seu objetivo é criar templates HTML complexos, é melhor usar bibliotecas de templates como Mustache, Handlebars, ou frameworks de componentes como React, Angular ou Vue.js. Essas ferramentas fornecem recursos mais seguros e eficientes para a manipulação do DOM e a criação de templates dinâmicos.

6. Estilo e layout de páginas:
   Evite usar `innerHTML` para alterar estilos ou layouts de páginas de forma dinâmica. O ideal é utilizar classes CSS e manipulação de estilos diretamente nos elementos do DOM para garantir um controle mais seguro e consistente sobre o estilo da página.

Em resumo, sempre que você estiver manipulando o conteúdo do DOM dinamicamente, é importante pensar em segurança e eficiência. Use métodos seguros para filtrar e escapar dados, evite inserir conteúdo não confiável diretamente no DOM e considere utilizar bibliotecas e frameworks adequados para lidar com a manipulação dinâmica do conteúdo da página.

É uma prática de segurança sólida evitar o uso de recursos como `innerHTML` ou qualquer outra função que permita a inserção direta de strings não confiáveis como HTML quando você não tem controle total sobre essas strings.

A razão para isso é que, ao permitir a inserção direta de strings não confiáveis no HTML usando `innerHTML` ou funções semelhantes, você está criando uma brecha potencial para ataques de Cross-site Scripting (XSS). Um ataque XSS ocorre quando um invasor injeta código malicioso, geralmente em forma de script, em uma página da web, que é então executado no navegador do usuário final.

Ao não ter controle sobre a origem do conteúdo que está sendo inserido, você não pode garantir que ele está livre de scripts maliciosos ou outros conteúdos perigosos. Portanto, é fundamental usar métodos seguros de sanitização e escape para garantir que qualquer conteúdo inserido no HTML seja tratado adequadamente e não seja interpretado como código.

Em vez de usar `innerHTML`, é recomendado criar elementos do DOM de forma programática e definir seu conteúdo usando o texto ou outros atributos seguros. Além disso, ao renderizar conteúdo fornecido pelos usuários ou obtido de fontes externas, sempre aplique medidas de sanitização para remover qualquer código malicioso.

Lembre-se de que a segurança é uma preocupação constante no desenvolvimento web, e evitar práticas inseguras como a inserção direta de strings não confiáveis no HTML é uma parte importante do processo de proteção contra vulnerabilidades, como o XSS.

# Código Usados Nessa Aula

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
    gamesLis.textContent = ''
    const games = querySnapshot.docs.map(doc => {
      const [id, { title, developedBy, createdAt }] = [doc.id, doc.data()]
      const date = createdAt.toDate()

      const liGame = document.createElement('li')
      liGame.setAttribute('data-id', id)
      liGame.setAttribute('class', 'my-4 d-flex flex-column')

      const h5 = document.createElement('h5')
      h5.textContent = title

      const ul = document.createElement('ul')

      const liDevelopedBy = document.createElement('li')
      liDevelopedBy.textContent = `Desenvolvido por ${developedBy}`

      if(createdAt){
        const liDate = document.createElement('li')
        liDate.textContent = `Adicionado ao banco em ${getFormatedDate(date)}`
        ul.append(liDate)
      }

      const button = document.createElement('button')
      button.textContent = 'Remover'
      button.setAttribute('data-remove', id)
      button.setAttribute('class', 'btn btn-danger btn-sm align-self-end m-2')

      ul.append(liDevelopedBy)
      liGame.append(h5, ul, button)

      return liGame

    })

    games.forEach(game => gamesLis.append(game))
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

### Usando text-content ao invés de innerhtml

Usar `textContent` em vez de `innerHTML` é uma prática mais segura para adicionar conteúdo de texto a elementos do DOM. A principal diferença entre esses dois métodos é que o `textContent` insere apenas o conteúdo de texto puro, enquanto o `innerHTML` insere conteúdo HTML, incluindo tags e elementos.

Ao utilizar o `textContent`, você evita a interpretação de qualquer código HTML ou scripts maliciosos, tornando a manipulação do conteúdo mais segura em relação a ataques de XSS. No entanto, é importante observar que, ao usar `textContent`, você não poderá incluir formatação ou marcação HTML diretamente no conteúdo.

Por exemplo, considerando o seguinte código HTML:

```html
<div id="container"></div>
```

Usando `textContent`:

```javascript
const container = document.getElementById('container');
container.textContent = '<p>Texto de exemplo</p>';
```

Isso renderizaria o texto exato '<p>Texto de exemplo</p>' dentro do elemento `container`, sem interpretar como código HTML.

Se você quiser adicionar conteúdo de texto e também deseja manter a formatação ou marcação HTML, é possível criar elementos do DOM de forma programática e adicionar conteúdo usando outros métodos seguros, como `appendChild`, ou usar bibliotecas de manipulação do DOM mais avançadas, como React, Vue.js ou Angular.

Lembrando sempre que, ao manipular o conteúdo do DOM dinamicamente, é importante aplicar práticas de segurança adequadas, como a sanitização de entrada do usuário e o escape de conteúdo, para evitar vulnerabilidades de segurança, como o XSS.
