<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Listeners em tempo real - Aula 02-11

### Resumo

Em tempo real, os listeners (ou "ouvintes") são recursos importantes do Firebase Firestore que permitem que o aplicativo seja notificado automaticamente sobre mudanças nos dados do Firestore, sem a necessidade de realizar consultas repetidas ao banco de dados. Esses listeners são essenciais para atualizar a interface do usuário em resposta a alterações de dados em tempo real.

No Firebase Firestore, existem basicamente dois tipos principais de listeners:

1. **onSnapshot()**:
   O método `onSnapshot()` é utilizado para registrar um ouvinte que será acionado sempre que houver mudanças em um conjunto de documentos ou em um documento específico. Ele é muito útil para receber atualizações em tempo real sobre consultas e dados.

Exemplo de uso do `onSnapshot()`:

```javascript
const documentRef = db.collection("colecao").doc("ID_DO_DOCUMENTO");

const unsubscribe = documentRef.onSnapshot((snapshot) => {
  if (snapshot.exists()) {
    console.log("Dados atuais do documento:", snapshot.data());
  } else {
    console.log("Este documento não existe.");
  }
});
```

Neste exemplo, o `onSnapshot()` registra um ouvinte para o documento com o ID `"ID_DO_DOCUMENTO"` na coleção `"colecao"`. Sempre que houver mudanças nos dados desse documento, o ouvinte será acionado e o bloco de código dentro dele será executado. O retorno do `onSnapshot()` é uma função que pode ser usada para remover o ouvinte quando não for mais necessário.

2. **get() e then() (consultas únicas)**:
   Além do `onSnapshot()`, você também pode usar a função `get()` para realizar uma consulta única a um documento ou conjunto de documentos no Firestore. Essa função retorna uma Promise que, quando resolvida, fornece os dados obtidos do Firestore.

Exemplo de uso do `get()`:

```javascript
const collectionRef = db.collection("colecao");

collectionRef
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch((error) => {
    console.error("Erro ao obter os documentos:", error);
  });
```

Neste exemplo, estamos usando `get()` para obter todos os documentos da coleção `"colecao"`. O método `get()` retorna uma Promise que, quando resolvida, fornece um `querySnapshot`, que contém os documentos da coleção. Usamos `forEach()` para iterar sobre cada documento e imprimir suas informações.

Os listeners em tempo real são recursos poderosos para criar aplicativos que respondem dinamicamente às mudanças nos dados do Firestore. No entanto, é importante gerenciar cuidadosamente esses listeners para evitar vazamento de memória e consumo excessivo de recursos. Lembre-se de remover os ouvintes quando eles não forem mais necessários, usando a função de retorno do `onSnapshot()` ou a de cancelamento da Promise.

### Código Usado na Aula

```javascript
const unsubscribe = onSnapshot(collectionGames, querySnapshot => {
  const hasPendingWrites = querySnapshot.metadata.hasPendingWrites
  if (!hasPendingWrites) {
    const gamesList = querySnapshot.docs.reduce((acc, doc) => {
      const { title, developedBy, createdAt } = doc.data()
      acc += `<li class="my-4 d-flex flex-column" data-id="${doc.id}">
      <h5>${title}</h5>

      <ul>
        <li>Desenvolvido por ${developedBy}</li>
        <li>Adicionado ao banco em ${createdAt.toDate()}</li>
      </ul>

      <button class="btn btn-danger btn-sm align-self-end m-2" data-remove="${
        doc.id
      }">Remover</button>

    </li>`
      return acc
    }, '')

    gamesLis.innerHTML = gamesList
  }
})

buttonUnsub.addEventListener('click', unsubscribe)
```

###### Cancelando Listener

O código de exemplo que você forneceu demonstra como usar um listener em tempo real com `onSnapshot()` no Firebase Firestore para obter dados de uma coleção chamada `collectionGames` e exibi-los em uma lista HTML dinâmica. Além disso, mostra como cancelar esse listener quando um botão `buttonUnsub` é clicado.

Vamos explicar o código passo a passo:

1. `onSnapshot(collectionGames, querySnapshot => { ... })`:
   Esta parte do código registra o listener usando `onSnapshot()` para a coleção `collectionGames` no Firestore. O `onSnapshot()` é acionado sempre que houver mudanças nos documentos da coleção. O `querySnapshot` é uma captura instantânea dos dados atuais da coleção no momento do acionamento do listener.

2. `const hasPendingWrites = querySnapshot.metadata.hasPendingWrites`:
   A variável `hasPendingWrites` é usada para verificar se existem gravações pendentes (alterações que ainda não foram confirmadas pelo servidor). Isso pode acontecer quando você está editando um documento, mas a alteração ainda não foi totalmente sincronizada com o servidor. Neste caso, o código espera até que não haja gravações pendentes antes de atualizar a lista.

3. `if (!hasPendingWrites) { ... }`:
   Esta verificação garante que as atualizações só ocorram quando não houver gravações pendentes, para evitar exibições incorretas de dados.

4. `const gamesList = querySnapshot.docs.reduce((acc, doc) => { ... })`:
   Este trecho do código percorre os documentos (ou "docs") contidos no `querySnapshot` usando o método `reduce()`. Ele extrai os dados relevantes de cada documento (como título, desenvolvedor e data de criação) e cria uma string HTML para exibição.

5. `gamesLis.innerHTML = gamesList`:
   A variável `gamesList` contém a string HTML gerada pelo loop `reduce()`. Ela é atribuída ao `innerHTML` de algum elemento HTML (não está visível no código fornecido), que provavelmente é uma lista (`<ul>`).

6. `buttonUnsub.addEventListener('click', unsubscribe)`:
   Nesta parte do código, um listener de evento é adicionado ao botão com o id `buttonUnsub`. Quando esse botão é clicado, a função `unsubscribe` é chamada para cancelar o listener do `onSnapshot()`, interrompendo assim as atualizações em tempo real.

Portanto, o código completo é um exemplo de como usar o `onSnapshot()` para obter atualizações em tempo real de uma coleção no Firestore, exibir os dados em uma lista dinâmica e como cancelar o listener quando necessário, utilizando um botão para fazer isso.

**É importante cancelar os listeners quando eles não forem mais necessários para evitar o consumo desnecessário de recursos e possíveis problemas de desempenho.**
