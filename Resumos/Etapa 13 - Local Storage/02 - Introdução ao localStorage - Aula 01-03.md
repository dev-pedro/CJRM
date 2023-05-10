<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Introdução ao localStorage - Aula 01-03

## Resumo

### Conteúdo Extra Aula

### localStorage

O localStorage é uma forma de armazenamento de dados em pares chave-valor no navegador da web. Ele permite que os desenvolvedores salvem e acessem informações localmente no computador do usuário, mesmo depois que o navegador é fechado ou a página é atualizada.

O localStorage é um objeto global do JavaScript, e pode ser acessado por meio do objeto "window". Ele é semelhante aos cookies, mas tem uma capacidade maior de armazenamento e não é enviado com as solicitações HTTP, o que o torna mais seguro.

Para armazenar um valor no localStorage, basta chamar a propriedade "setItem" do objeto localStorage, passando uma chave e um valor como argumentos. Por exemplo, para armazenar um valor chamado "nome" com o valor "João" no localStorage, podemos fazer o seguinte:

```javascript
localStorage.setItem('nome', 'João');
```

Para acessar um valor armazenado no localStorage, podemos chamar a propriedade "getItem" do objeto localStorage, passando a chave como argumento. Por exemplo, para acessar o valor "João" que armazenamos acima, podemos fazer o seguinte:

```javascript
const nome = localStorage.getItem('nome');
console.log(nome); // Imprime "João"
```

Podemos remover um item do localStorage chamando a propriedade "removeItem" do objeto localStorage, passando a chave como argumento. Por exemplo, para remover o item "nome" que armazenamos acima, podemos fazer o seguinte:

```javascript
localStorage.removeItem('nome');
```

O localStorage é uma ferramenta útil para armazenar informações localmente no navegador, como preferências do usuário, dados de formulários e outras informações que devem ser persistentes mesmo depois que o navegador é fechado. No entanto, é importante lembrar que o localStorage só deve ser usado para informações que não são confidenciais ou críticas, pois é vulnerável a ataques de segurança.

### sessionStored

O sessionStorage é uma forma de armazenamento de dados no navegador da web, assim como o localStorage. A diferença é que o sessionStorage armazena dados apenas enquanto a sessão do navegador está ativa. Isso significa que quando o navegador é fechado, os dados armazenados no sessionStorage são excluídos automaticamente.

O sessionStorage é um objeto global do JavaScript, assim como o localStorage, e pode ser acessado por meio do objeto "window". Para armazenar um valor no sessionStorage, basta chamar a propriedade "setItem" do objeto sessionStorage, passando uma chave e um valor como argumentos. Por exemplo, para armazenar um valor chamado "token" com o valor "12345" no sessionStorage, podemos fazer o seguinte:

```javascript
sessionStorage.setItem('token', '12345');
```

Para acessar um valor armazenado no sessionStorage, podemos chamar a propriedade "getItem" do objeto sessionStorage, passando a chave como argumento. Por exemplo, para acessar o valor "12345" que armazenamos acima, podemos fazer o seguinte:

```javascript
const token = sessionStorage.getItem('token');
console.log(token); // Imprime "12345"
```

Podemos remover um item do sessionStorage chamando a propriedade "removeItem" do objeto sessionStorage, passando a chave como argumento. Por exemplo, para remover o item "token" que armazenamos acima, podemos fazer o seguinte:

```javascript
sessionStorage.removeItem('token');
```

O sessionStorage é útil para armazenar informações temporárias durante a sessão do navegador, como dados de formulários que precisam ser mantidos durante uma navegação específica. Ele é automaticamente excluído quando a sessão do navegador é encerrada, o que pode ser uma vantagem em termos de segurança, pois os dados não permanecem no navegador após o usuário fechar a janela.

### IndexedDB

IndexedDB é um banco de dados NoSQL embutido no navegador da web que permite armazenar grandes quantidades de dados de forma estruturada e acessá-los de forma eficiente. Ele é projetado para trabalhar com dados que precisam ser armazenados localmente no navegador, mesmo quando o usuário está offline. O IndexedDB é compatível com todos os principais navegadores modernos e é acessível por meio de JavaScript.

O IndexedDB é baseado em objetos e usa um modelo de transação para garantir que as operações de leitura e gravação sejam seguras e consistentes. Ele suporta índices para pesquisa rápida e pode ser usado para armazenar dados em várias tabelas, cada uma com sua própria chave primária.

Para usar o IndexedDB, você precisa primeiro abrir um banco de dados. Isso é feito usando o método "open" do objeto "indexedDB". Por exemplo:

```javascript
const request = indexedDB.open('MeuBancoDeDados', 1);
```

Este código cria um novo banco de dados chamado "MeuBancoDeDados" com uma versão inicial de 1. Se o banco de dados já existe, a versão será verificada e atualizada automaticamente.

Em seguida, você precisa definir o esquema de banco de dados e criar objetos de armazenamento. Você pode fazer isso dentro do manipulador "onupgradeneeded" que é chamado quando a versão do banco de dados é atualizada ou quando o banco de dados é criado pela primeira vez. Por exemplo:

```javascript
request.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore('MinhaTabela', { keyPath: 'id' });
  objectStore.createIndex('nome', 'nome', { unique: false });
};
```

Este código define um objeto de armazenamento chamado "MinhaTabela" com uma chave primária chamada "id". Ele também cria um índice de pesquisa na coluna "nome" do objeto de armazenamento.

Depois de ter definido o esquema do banco de dados, você pode usar o método "transaction" do objeto "indexedDB" para iniciar uma transação e executar operações de leitura e gravação no banco de dados. Por exemplo, para adicionar um novo objeto à tabela, podemos fazer o seguinte:

```javascript
const transaction = db.transaction(['MinhaTabela'], 'readwrite');
const objectStore = transaction.objectStore('MinhaTabela');
const request = objectStore.add({ id: 1, nome: 'João', idade: 30 });

request.onsuccess = function(event) {
  console.log('Objeto adicionado com sucesso!');
};

request.onerror = function(event) {
  console.log('Erro ao adicionar objeto:', event.target.error);
};
```

Este código inicia uma transação de leitura/gravação no objeto de armazenamento "MinhaTabela" e adiciona um novo objeto com uma chave primária de 1, um nome de "João" e uma idade de 30. Se a operação for bem-sucedida, o manipulador "onsuccess" é chamado e imprime uma mensagem no console. Se houver um erro, o manipulador "onerror" é chamado e imprime a mensagem de erro.

O IndexedDB é uma ferramenta poderosa para armazenar grandes quantidades de dados localmente no navegador da web. No entanto, pode ser um pouco mais complicado de usar

### Cache API

A Cache API é uma API do navegador que permite armazenar recursos da web, como imagens, arquivos JavaScript e arquivos CSS, em cache localmente. Isso significa que, quando o usuário volta a visitar o mesmo site, esses recursos são carregados mais rapidamente, pois já estão armazenados localmente no cache.

A Cache API é baseada em um modelo de cache em cache que armazena pares de solicitação/resposta em um objeto de cache. A API é acessada por meio do objeto "caches" no JavaScript.

Para armazenar um recurso em cache, primeiro é necessário abrir um cache usando o método "caches.open". Isso retorna uma promessa que resolve com um objeto cache, que pode ser usado para adicionar recursos em cache. Por exemplo:

```javascript
caches.open('cache-v1').then(function(cache) {
  cache.add('/path/to/my/resource');
});
```

Este código abre um cache com o nome "cache-v1" e adiciona o recurso localizado em "/path/to/my/resource" ao cache.

Para recuperar um recurso do cache, podemos usar o método "cache.match". Isso retorna uma promessa que resolve com a resposta armazenada em cache ou undefined se o recurso não estiver armazenado em cache. Por exemplo:

```javascript
caches.match('/path/to/my/resource').then(function(response) {
  if (response) {
    // Recurso encontrado no cache
  } else {
    // Recurso não encontrado no cache
  }
});
```

Este código tenta recuperar o recurso localizado em "/path/to/my/resource" do cache. Se o recurso for encontrado, a variável "response" será definida como a resposta armazenada em cache e o bloco "if" será executado. Se o recurso não estiver em cache, a variável "response" será undefined e o bloco "else" será executado.

Além disso, a Cache API também oferece outros métodos úteis, como "cache.addAll", que adiciona uma lista de recursos em cache em uma única operação, e "cache.put", que adiciona ou atualiza um recurso em cache.

A Cache API é útil para melhorar o desempenho do site e a experiência do usuário, especialmente em redes mais lentas ou com conexões intermitentes. Ele também pode ser usado para armazenar recursos específicos do usuário em cache, como imagens personalizadas ou arquivos offline específicos do usuário.

### Cookies

Cookies são pequenos arquivos de texto que um site pode armazenar no computador ou dispositivo móvel de um usuário quando ele visita o site. Esses arquivos são geralmente usados para lembrar as preferências do usuário, armazenar informações de login ou rastrear o comportamento do usuário em um site.

Os cookies são criados pelo servidor web quando o navegador do usuário envia uma solicitação para o servidor. O servidor pode incluir informações adicionais no cabeçalho da resposta, como um cookie que deve ser armazenado no computador do usuário. O navegador armazena então o cookie e o envia de volta para o servidor em cada solicitação subsequente para o mesmo site.

Os cookies têm algumas propriedades, incluindo o nome do cookie, o valor do cookie, a data de expiração do cookie e o domínio e caminho em que o cookie é válido. O nome e o valor do cookie são usados para armazenar informações específicas do site, como as preferências do usuário ou as informações de login. A data de expiração define por quanto tempo o cookie deve ser armazenado no computador do usuário, enquanto o domínio e o caminho definem em quais páginas do site o cookie é válido.

Os cookies são amplamente utilizados para personalizar a experiência do usuário em um site, lembrando as preferências do usuário e armazenando informações de login. No entanto, também existem preocupações de privacidade associadas ao uso de cookies, pois eles podem ser usados para rastrear o comportamento do usuário em um site. Por esse motivo, muitos navegadores permitem que os usuários gerenciem e excluam cookies, e muitos sites agora incluem avisos de cookies para informar os usuários sobre o uso de cookies em seu site.

## Referencia

[Client-side storage - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)

[Web Storage API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

[Window: localStorage property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
