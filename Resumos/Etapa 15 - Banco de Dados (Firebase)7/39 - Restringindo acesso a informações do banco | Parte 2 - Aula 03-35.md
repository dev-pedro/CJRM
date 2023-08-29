<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Restringindo acesso a informações do banco | Parte 1 - Aula 03-34

### Resumo

## Regras de Segurança no Firestore

```firestore-security-rules
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/{documents} {
  
    function isAuthenticated () {
    return request.auth != null;
    }

    function canReadIfOwnPhrase () {
    return request.auth.uid == resource.data.userId;
    }

    function canWriteIfOwnPhrase () {
    return request.auth.uid == request.resource.data.userId;
    }
    
    function canWriteIfOwnDoc () {
    return request.auth.uid == request.resource.data.userId && request.auth.uid == request.resource.id;
    }
    
    function canReadOwnDoc (docId) {
    return request.auth.uid == docId;
    }
    
    match /frases/{frase} {
      allow read: if isAuthenticated() && canReadIfOwnPhrase();
      allow write: if isAuthenticated() && canWriteIfOwnPhrase();
    }
    
    match /users/{docId} {
      allow read : if isAuthenticated() && canReadOwnDoc(docId);
      allow write : if isAuthenticated() && canWriteIfOwnDoc();
    }
  }
}
```

Essa regra de segurança define as permissões de acesso a duas coleções: "frases" e "users" no Firestore. Ela permite que os usuários autenticados realizem leituras e gravações, mas com condições específicas para cada tipo de ação.

Aqui estão as funções e as regras que estão sendo definidas:

1. `isAuthenticated()`:
   
   - Esta função verifica se o usuário está autenticado (tem uma identidade válida).

2. `canReadIfOwnPhrase()`:
   
   - Esta função verifica se o usuário autenticado pode ler uma frase específica.
   - Verifica se o ID do usuário autenticado (`request.auth.uid`) é igual ao campo `userId` no documento `frase` que está sendo lido (`resource.data.userId`).

3. `canWriteIfOwnPhrase()`:
   
   - Esta função verifica se o usuário autenticado pode escrever (criar ou atualizar) uma frase específica.
   - Verifica se o ID do usuário autenticado (`request.auth.uid`) é igual ao campo `userId` no documento `frase` que está sendo gravado (`request.resource.data.userId`).

4. `canWriteIfOwnDoc()`:
   
   - Esta função verifica se o usuário autenticado pode escrever (criar ou atualizar) qualquer documento na coleção `users`.
   - Verifica se o ID do usuário autenticado (`request.auth.uid`) é igual ao campo `userId` no documento que está sendo gravado (`request.resource.data.userId`) e também verifica se o ID do documento é igual ao ID do usuário autenticado (`request.resource.id`).

5. `canReadOwnDoc(docId)`:
   
   - Esta função verifica se o usuário autenticado pode ler um documento específico.
   - Verifica se o ID do usuário autenticado (`request.auth.uid`) é igual ao ID do documento que está sendo lido (`docId`).

Depois de definidas as funções, as regras são aplicadas às coleções:

- Para a coleção "frases":
  
  - Permite leitura (`read`) se o usuário estiver autenticado e puder ler a frase.
  - Permite escrita (`write`) se o usuário estiver autenticado e puder escrever na frase.

- Para a coleção "users":
  
  - Permite leitura (`read`) de um documento específico se o usuário estiver autenticado e for o proprietário do documento.
  - Permite escrita (`write`) se o usuário estiver autenticado e puder escrever no documento (verificando se é proprietário).

Essas regras são aplicadas para garantir que apenas os usuários autenticados possam acessar e modificar os dados, e que as ações estejam restritas aos dados de propriedade do próprio usuário.

## Código Usado Front-End

Javascript:

```javascript
...
const userPhrases = query(collectionPhrases, where("userId", "==", user.uid))

  const unsubscribe = onSnapshot(
    userPhrases,
    (snapshot) => {
      const fragment = document.createDocumentFragment()

      snapshot.docChanges().forEach(({ type, doc }) => {
        ...
    },
    (error) => log("onSnapshot | não foi possivel capturar snapshot", error)
  )
...
```

Aqui estamos usando o Firebase Firestore no front-end para consultar e receber atualizações em tempo real das frases de um usuário específico, com base no ID do usuário. Essa é uma abordagem comum para exibir informações específicas do usuário.

Aqui está uma explicação passo a passo do código que você forneceu:

1. `query(collectionPhrases, where("userId", "==", user.uid))`:
   
   - Essa linha cria uma consulta para a coleção de frases (`collectionPhrases`) onde o campo `userId` é igual ao UID do usuário autenticado (`user.uid`).

2. `onSnapshot(userPhrases, (snapshot) => {...}, (error) => console.log(error))`:
   
   - O método `onSnapshot` é usado para ouvir as mudanças na coleção de frases que correspondem à consulta definida anteriormente.
   - Sempre que ocorrer uma alteração nos documentos que correspondem à consulta, a função de retorno de chamada passada como o primeiro argumento será acionada.
   - Se ocorrer algum erro, a função de retorno de chamada de erro (segundo argumento) será acionada.

3. `(snapshot) => {...}`:
   
   - Esta é a função de retorno de chamada que é acionada sempre que ocorrem mudanças nos documentos da coleção que correspondem à consulta.
   - `snapshot.docChanges().forEach(({ type, doc }) => {...})`: Isso itera sobre as mudanças de documento no snapshot e extrai informações sobre cada mudança, como o tipo de mudança (adicionada, modificada ou removida) e o documento em si (`doc`).

4. No interior do loop `forEach`, você provavelmente está construindo elementos HTML ou realizando outras ações com base nas mudanças nos documentos.

5. `(error) => console.log(error)`: Isso lida com erros que podem ocorrer durante a execução da consulta ou ao ouvir as mudanças.

No geral, o código que você forneceu está configurando um ouvinte em tempo real para as frases de um usuário específico e reage a mudanças nesses documentos, permitindo que você atualize a interface do usuário conforme as mudanças ocorrem no banco de dados. Certifique-se de estar tratando os documentos retornados pelo snapshot de acordo com as necessidades do seu aplicativo.
