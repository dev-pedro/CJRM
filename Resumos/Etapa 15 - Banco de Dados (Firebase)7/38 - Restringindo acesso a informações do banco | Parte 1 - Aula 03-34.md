<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Restringindo acesso a informações do banco | Parte 1 - Aula 03-34

### Resumo

No Firebase Firestore, você pode controlar o acesso aos dados usando regras de segurança. As regras de segurança são definidas no Firebase para determinar quem pode ler e escrever dados no banco. As regras são escritas usando a linguagem de regras de segurança do Firebase, que permite especificar condições e permissões de acesso.

Aqui estão os passos básicos para restringir o acesso a informações do banco no Firebase Firestore:

1. **Acesse o Console do Firebase:**
   Acesse o Console do Firebase (https://console.firebase.google.com/) e escolha seu projeto.

2. **Navegue para a seção Firestore:**
   No painel do projeto, clique na seção "Firestore Database" (ou apenas "Firestore").

3. **Acesse as Regras de Segurança:**
   Na seção Firestore, vá para a guia "Rules" (Regras). Aqui é onde você definirá suas regras de segurança.

4. **Escreva Suas Regras:**
   As regras de segurança são definidas usando a linguagem de regras do Firebase. Elas controlam quem pode ler e escrever em coleções e documentos específicos.
   
   Aqui está um exemplo simples de como você pode definir regras de leitura e escrita apenas para usuários autenticados:
   
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Permite leitura e escrita apenas para usuários autenticados
       match /{document=**} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```
   
   Neste exemplo, a regra permite leitura e escrita em qualquer documento se o usuário estiver autenticado.

5. **Teste Suas Regras:**
   Após escrever suas regras, é importante testá-las para garantir que funcionem conforme o esperado. O Console do Firebase permite testar as regras em um ambiente seguro antes de implantá-las.

6. **Implante Suas Regras:**
   Após testar suas regras, você pode implantá-las para seu projeto em produção.

Lembre-se de que as regras de segurança são uma parte crítica para garantir que apenas os usuários autorizados tenham acesso às informações do banco. Personalize suas regras de acordo com suas necessidades de acesso e segurança.

A documentação oficial do Firebase Firestore tem mais detalhes e exemplos sobre como escrever regras de segurança: https://firebase.google.com/docs/firestore/security/get-started

### Código Usado

Javascript:

```javascript
const addPhrase = async (e, user) => {
  e.preventDefault()
  const phase = sanitize(e.target.phrase.value)
  const title = sanitize(e.target.title.value)

  try {
    log("currentUserId: ", user.uid)

    const docCreate = await addDoc(collectionPhrases, {
      movie_title: sanitize(title),
      message: sanitize(phase),
      userId: sanitize(user.uid),
      isPublic: false,
      addedBy: sanitize(user.displayName)
    })
    log("Documento criado com id:", docCreate.id)
  } catch (error) {
    log("addPhrase | Problema na adicição do document: ", error)
  }
  e.target.reset()
  e.target.title.focus()
}

const userPhrases = query(collectionPhrases, where("userId", "==", user.uid))

  const unsubscribe = onSnapshot(
    userPhrases,
    (snapshot) => {
      ...
    },
    (error) => log(error)
  )
```

O código passo a passo:

1. `const userPhrases = query(collectionPhrases, where("userId", "==", user.uid))`:
   
   - Esta linha cria uma consulta chamada `userPhrases` na coleção `collectionPhrases`.
   - A condição `where("userId", "==", user.uid)` filtra os documentos onde o campo "userId" é igual ao ID do usuário atual, que é armazenado em `user.uid`.

2. `const unsubscribe = onSnapshot(...)`
   
   - O método `onSnapshot` é usado para ouvir as alterações em tempo real nos documentos que correspondem à consulta `userPhrases`.
   - O primeiro argumento é a consulta (`userPhrases`) que você deseja monitorar para alterações.
   - O segundo argumento é uma função que será chamada sempre que houver uma atualização nos documentos que correspondem à consulta.
   - O terceiro argumento é uma função que será chamada se ocorrer algum erro durante a assinatura dos snapshots.

3. `(snapshot) => { ... }`:
   
   - Essa é a função que será chamada sempre que ocorrer uma alteração nos documentos que correspondem à consulta.
   - O parâmetro `snapshot` contém informações sobre os documentos atualizados.

Dentro da função que é passada como segundo argumento para `onSnapshot`, você pode realizar várias ações, como percorrer os documentos atualizados (`snapshot.docs`) e lidar com suas informações.

O `unsubscribe` retornado por `onSnapshot` é uma função que você pode chamar posteriormente para cancelar a assinatura das atualizações em tempo real. Isso é útil quando você não deseja mais ouvir as alterações, por exemplo, quando a tela ou o componente que está usando esses dados é desmontado.

Se ocorrer um erro durante a assinatura da consulta, o callback passado como terceiro argumento será chamado, e você pode usar isso para registrar ou tratar o erro de acordo.

Esse código básico ilustra como configurar um listener para frases do usuário atual usando a consulta e a função `onSnapshot`. Certifique-se de preencher corretamente a variável `collectionPhrases` e o objeto `user` com os valores apropriados.
