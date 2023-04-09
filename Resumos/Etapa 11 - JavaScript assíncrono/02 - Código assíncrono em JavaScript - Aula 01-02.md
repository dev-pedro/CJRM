<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Código assíncrono em JavaScript - Aula 01-02

### Resumo

### Código assíncrono

Em JavaScript, código assíncrono é usado para permitir que o código execute sem bloquear a execução de outras partes do programa. Isso é especialmente importante em situações em que o código precisa fazer uma chamada de rede ou executar uma operação que possa demorar um tempo para ser concluída.

Existem várias maneiras de escrever código assíncrono em JavaScript. Uma das mais comuns é usar as Promises. As Promises são objetos que representam um valor que pode não estar disponível ainda, mas que será em algum momento futuro. As Promises têm um estado interno que pode ser "pending" (pendente), "fulfilled" (resolvida) ou "rejected" (rejeitada).

Para criar uma Promise em JavaScript, você pode usar a classe Promise. O construtor da Promise recebe uma função que será executada imediatamente e que deve chamar a função resolve() quando a Promise for resolvida ou reject() quando a Promise for rejeitada. Por exemplo:

```javascript
const promise = new Promise((resolve, reject) => {
  // faça alguma operação assíncrona aqui
  if (operação foi bem sucedida) {
    resolve(resultado);
  } else {
    reject(erro);
  }
});
```

Você também pode encadear Promises usando o método then(). O método then() recebe uma função que será executada quando a Promise for resolvida com sucesso e retorna uma nova Promise. Por exemplo:

```javascript
promise
  .then(resultado => {
    // faça alguma coisa com o resultado aqui
    return novoResultado;
  })
  .then(novoResultado => {
    // faça algo com o novo resultado aqui
  })
  .catch(erro => {
    // faça algo com o erro aqui
  });
```

Outra maneira de escrever código assíncrono em JavaScript é usando a palavra-chave async e a função await. Quando você usa a palavra-chave async em uma função, ela se torna uma função assíncrona e pode usar a palavra-chave await para esperar que uma Promise seja resolvida antes de continuar a execução da função. Por exemplo:

```javascript
async function minhaFuncaoAssincrona() {
  const resultado = await promise;
  // faça algo com o resultado aqui
}
```

O uso da palavra-chave await só é permitido dentro de funções assíncronas. Quando você usa a palavra-chave await para esperar a resolução de uma Promise, a execução da função é suspensa até que a Promise seja resolvida ou rejeitada.

### Código síncrono

Em JavaScript, o código síncrono é aquele que é executado de forma sequencial, ou seja, uma instrução é executada após a outra, em ordem, e a execução é bloqueada até que uma instrução seja concluída antes de seguir para a próxima.

Por exemplo, considere o seguinte código que imprime a mensagem "Hello, World!" no console:

```javascript
console.log("Hello, ");
console.log("World!");
```

Nesse caso, a primeira instrução é executada primeiro, imprimindo "Hello, " no console, e depois a segunda instrução é executada, imprimindo "World!" no console. A execução é sequencial e bloqueada, ou seja, a segunda instrução só é executada depois que a primeira é concluída.

O código síncrono é a forma mais simples de escrever código em JavaScript, mas pode ser problemático em algumas situações, como quando há chamadas de rede ou outras operações que podem demorar um tempo para serem concluídas. Nesses casos, a execução síncrona pode bloquear a execução de outras partes do programa, o que pode tornar o programa menos responsivo e menos eficiente.

Por isso, em alguns casos, pode ser necessário usar código assíncrono em JavaScript, como expliquei na minha resposta anterior.

### Javascript é single thread

O JavaScript é uma linguagem de programação single thread. Isso significa que ele só tem uma thread de execução principal, que é responsável por executar o código sequencialmente, instrução por instrução.

No entanto, isso não significa que todo o ambiente em que o JavaScript é executado é single thread. Por exemplo, em navegadores da web, o JavaScript é executado em um ambiente multi-thread, que inclui a thread principal do navegador (ou a "thread UI") e outras threads, como threads de renderização e de rede.

Mas, dentro do contexto do próprio código JavaScript, a execução é sempre sequencial e bloqueante, ou seja, uma instrução é executada após a outra, e a execução de uma instrução deve ser concluída antes que a próxima instrução possa ser executada.

Para lidar com operações assíncronas, o JavaScript usa callbacks, Promises, async/await e outros mecanismos que permitem que a execução seja interrompida temporariamente enquanto uma operação assíncrona é processada em outra thread ou no background. Mas, mesmo com esses mecanismos, a execução principal do código JavaScript continua sendo single thread e sequencial.

Aqui está uma representação visual de como a execução single thread funciona em JavaScript:

```diff
+-------------------------+
|          Código         |
+-------------------------+
           |
           v
+-------------------------+
|    Pilha de Execução     |
+-------------------------+
           |
           v
+-------------------------+
|     Web API / Timer      |
+-------------------------+
           |
           v
+-------------------------+
|  Callback / Event Queue |
+-------------------------+
           |
           v
+-------------------------+
|      Renderização       |
+-------------------------+

```

Nessa representação, o código JavaScript é executado sequencialmente, instrução por instrução, e cada instrução é colocada na pilha de execução. A pilha de execução é uma estrutura de dados que mantém o controle de qual instrução está sendo executada atualmente e qual instrução deve ser executada em seguida.

Quando uma instrução envolve uma operação assíncrona, como uma chamada de rede ou temporizador, ela é passada para a Web API ou Timer do navegador, que executa a operação em segundo plano e coloca o resultado da operação na Callback / Event Queue.

Quando a pilha de execução fica vazia, o JavaScript verifica a Callback / Event Queue para ver se há callbacks a serem executados. Se houver, o JavaScript coloca o callback na pilha de execução e executa-o. Isso permite que o código assíncrono seja processado, enquanto a execução principal do código JavaScript continua sendo sequencial e bloqueante.

Por fim, a renderização é executada em outra thread separada do código JavaScript, permitindo que a interface do usuário seja atualizada enquanto o código JavaScript continua sendo executado.
