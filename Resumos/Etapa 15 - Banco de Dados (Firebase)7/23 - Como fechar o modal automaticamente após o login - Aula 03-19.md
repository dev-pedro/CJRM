<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Como fechar o modal automaticamente após o login - Aula 03-19

### Resumo

### Código

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems, options);
  });

const elem = document.querySelecto('[data-js="modal"]')
const instance = M.Modal.getInstance(elem);

instance.close();
```

Fechar um modal usando o framework Materialize CSS. Vou explicar o processo com mais detalhes:

1. **DOMContentLoaded Event Listener**:
   
   - O evento `DOMContentLoaded` é um evento JavaScript que é disparado quando o navegador termina de construir o Document Object Model (DOM) da página, ou seja, quando todo o conteúdo HTML foi analisado e estruturado.
   - O código dentro da função associada ao evento `DOMContentLoaded` só será executado após o DOM estar totalmente carregado.

2. **Selecionando e Inicializando Modais**:
   
   - `document.querySelectorAll('.modal')` seleciona todos os elementos da página com a classe "modal". Esses elementos provavelmente representam os modais que você deseja controlar.
   - `M.Modal.init(elems, options)` inicializa os modais selecionados usando o Materialize CSS. `elems` são os elementos modais que você selecionou, e `options` são as opções de configuração do modal (que não foram definidas no código fornecido).

3. **Obtendo Instância do Modal**:
   
   - `M.Modal.getInstance(elem)` é usado para obter uma instância específica de um modal com base em um elemento (neste caso, `elem`).
   - Isso permite que você interaja diretamente com a instância do modal para executar ações como fechar o modal.

4. **Fechando o Modal**:
   
   - Depois de obter a instância do modal usando `M.Modal.getInstance(elem)`, você pode chamar o método `.close()` nessa instância para fechar o modal.
   - Isso fecha o modal e o remove da visualização do usuário.

Resumindo, o código começa inicializando os modais usando o Materialize CSS quando o DOM estiver carregado. Em seguida, ele obtém uma instância específica de um modal (possivelmente com base em um determinado elemento). Por fim, ele fecha essa instância do modal usando o método `.close()`, o que resulta no fechamento do modal na página.

Lembre-se de que, para que esse código funcione corretamente, é necessário ter o Materialize CSS e suas dependências incluídas na página, bem como garantir que a variável `elem` seja definida adequadamente antes de usar o método `M.Modal.getInstance()`.

# Referencia

[Modals - Materialize](https://materializecss.com/modals.html)
