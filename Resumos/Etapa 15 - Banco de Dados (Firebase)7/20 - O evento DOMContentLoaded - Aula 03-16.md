<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O evento DOMContentLoaded - Aula 03-16

### Resumo

O evento `DOMContentLoaded` é um evento JavaScript que é acionado quando o navegador termina de analisar o HTML da página e constrói a estrutura do Document Object Model (DOM). Em outras palavras, ele é disparado quando todo o conteúdo HTML da página foi carregado e está disponível para ser manipulado via JavaScript.

Esse evento é útil quando você deseja executar código JavaScript que interage com elementos da página, mas precisa garantir que esses elementos já tenham sido totalmente carregados antes de fazer isso. Isso é especialmente importante quando o JavaScript é colocado na parte superior do documento, pois ele é executado antes de todo o conteúdo ser carregado.

Usar o evento `DOMContentLoaded` é uma prática recomendada para manipulações do DOM, pois ajuda a evitar problemas de timing, como tentar interagir com elementos que ainda não foram criados. Com o `DOMContentLoaded`, você pode garantir que o código JavaScript seja executado somente quando o DOM estiver pronto para ser manipulado.

Exemplo de uso do evento `DOMContentLoaded`:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // O código aqui será executado quando o DOM estiver totalmente carregado.

    // Por exemplo, você pode acessar e manipular elementos da página:
    var button = document.querySelector('#myButton');
    button.addEventListener('click', function() {
        alert('Botão clicado!');
    });
});
```

No exemplo acima, o evento `DOMContentLoaded` é usado para adicionar um ouvinte de evento a um botão com o ID "myButton". O código dentro da função será executado somente quando o DOM estiver pronto, garantindo que o botão esteja acessível para manipulação.

Lembre-se de que, ao usar o evento `DOMContentLoaded`, você pode colocar o código JavaScript no cabeçalho da página ou antes do fechamento da tag `<body>`, e ele será executado após o DOM estar totalmente carregado.

### Scripts no final do body para não usar DOMContentLoaded ?

Sim, você pode usar a prática de colocar seus scripts no final do `<body>` como uma alternativa ao uso explícito do evento `DOMContentLoaded`. Isso ocorre porque, quando você coloca seus scripts no final do `<body>`, eles serão executados após todo o conteúdo HTML ter sido carregado, incluindo a construção do DOM.

Ao colocar seus scripts no final do `<body>`, você pode evitar a necessidade de usar o `DOMContentLoaded`, pois o próprio posicionamento do script garante que o DOM já tenha sido construído quando o código do script for executado. Isso pode ser especialmente útil para scripts simples que interagem com elementos da página de forma direta e não dependem de manipulações complexas do DOM.

No entanto, é importante notar que, se você tiver código que precisa ser executado assim que o DOM estiver disponível, especialmente em páginas mais complexas com dependências externas (como bibliotecas JavaScript ou plugins), ainda pode ser uma boa prática utilizar o `DOMContentLoaded` ou um mecanismo semelhante, mesmo que seus scripts estejam no final do `<body>`. Isso ajuda a garantir que o código seja executado de maneira confiável em uma variedade de cenários.

Em resumo, colocar seus scripts no final do `<body>` é uma abordagem válida para evitar a necessidade de usar explicitamente o `DOMContentLoaded`, mas considere a complexidade e as dependências do seu código ao decidir qual abordagem é mais adequada para o seu projeto.

### Carregamento de DOM e Carregamento de Recursos

Carregamento de DOM e carregamento de recursos em relação ao desenvolvimento web.

1. **Carregamento de DOM (Document Object Model)**:
   O DOM (Document Object Model) é uma representação hierárquica da estrutura de elementos HTML (e outros tipos de documentos, como XML) em uma página web. O carregamento de DOM refere-se ao processo pelo qual um navegador analisa o código HTML de uma página e cria uma representação interna do documento como uma árvore de objetos que pode ser acessada e manipulada via JavaScript.

O carregamento de DOM é um passo fundamental no processamento de uma página web pelo navegador. Isso permite que os scripts interajam com os elementos da página, manipulem o conteúdo, respondam a eventos e realizem outras ações que afetam a experiência do usuário.

2. **Carregamento de Recursos**:
   O carregamento de recursos refere-se ao processo de busca, obtenção e renderização de todos os elementos que compõem uma página web, além do próprio HTML. Isso inclui imagens, folhas de estilo CSS, arquivos JavaScript, fontes, vídeos e outros elementos multimídia. Quando você acessa uma página da web, o navegador começa a baixar e carregar todos esses recursos para exibir a página corretamente.

O carregamento de recursos é crucial para a experiência do usuário, pois afeta a velocidade e a aparência da página. Uma abordagem eficaz de carregamento de recursos envolve otimizações como o uso de compactação, cache, carregamento assíncrono, carregamento condicional e outras técnicas para garantir que a página seja carregada de maneira rápida e eficiente.

Em resumo, o carregamento de DOM se refere à construção da estrutura de objetos que representa o conteúdo HTML de uma página web, enquanto o carregamento de recursos abrange a obtenção e renderização de todos os elementos, como imagens, scripts, estilos e mídia, necessários para apresentar a página corretamente no navegador. Ambos os processos são fundamentais para a entrega bem-sucedida e a interação eficaz com uma página da web.

# Referencias

[Document: DOMContentLoaded event - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)

[What is JavaScript? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#script_loading_strategies)
