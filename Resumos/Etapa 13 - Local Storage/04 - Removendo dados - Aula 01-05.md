<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Removendo dados - Aula 01-05

### Resumo

### Removendo os dados locais individuais

##### localStorage().removeItem()

Podemos remover um item do localStorage chamando a propriedade "removeItem" do objeto localStorage, passando a chave como argumento. Por exemplo, para remover o item "nome" que armazenamos acima, podemos fazer o seguinte:

```javascript
localStorage.removeItem('nome');
```

O localStorage é uma ferramenta útil para armazenar informações localmente no navegador, como preferências do usuário, dados de formulários e outras informações que devem ser persistentes mesmo depois que o navegador é fechado. No entanto, é importante lembrar que o localStorage só deve ser usado para informações que não são confidenciais ou críticas, pois é vulnerável a ataques de segurança.

### Removendo todos os dados locais

##### localStorage().clear()

O método `clear` do objeto `localStorage` é usado para remover todos os pares de chave-valor armazenados no armazenamento local do navegador. Ele não recebe nenhum argumento e retorna `undefined`.

Aqui está um exemplo simples de como usar o método `clear`:

```javascript
// Armazena um par chave-valor no localStorage
localStorage.setItem('chave', 'valor');

// Remove todos os pares chave-valor do localStorage
localStorage.clear();
```

Depois de executar `localStorage.clear()`, todos os pares chave-valor que foram armazenados no armazenamento local do navegador serão removidos e o `localStorage.length` será igual a 0.

É importante lembrar que o método `clear` irá remover todos os pares chave-valor do `localStorage` do domínio e do protocolo atual. Portanto, se você tiver usado o `localStorage` em diferentes domínios ou protocolos, o método `clear` deve ser executado separadamente em cada um desses contextos.
