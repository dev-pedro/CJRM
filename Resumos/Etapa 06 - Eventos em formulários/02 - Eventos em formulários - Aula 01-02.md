<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Eventos em formulários - Aula 01-02

### Resumo

Em formulários JavaScript, eventos são ações que ocorrem em um elemento HTML, como um botão ou um campo de entrada de texto.

Formulários servem para capturar informações dos usuários como:

- emails

- senhas

- feedback

- endereços

- dados de validação

- entre outros

Para se capturar esses dados usa-se eventos de submit, que acontece logo após o usuário clicar em um botão de envio por exemplo.

Esses eventos podem ser monitorados e respondidos com código JavaScript para realizar ações específicas. Alguns exemplos de eventos comuns em formulários incluem:

- "click": ocorre quando um elemento é clicado.
- "submit": ocorre quando um formulário é enviado.
- "change": ocorre quando o valor de um elemento é alterado, como um campo de entrada de texto ou um menu suspenso.
- "focus": ocorre quando um elemento recebe o foco, como quando um usuário clica em um campo de entrada de texto.
- "blur": ocorre quando um elemento perde o foco, como quando um usuário clica em outro lugar na página.

Para monitorar eventos em formulários JavaScript, você pode usar o método `addEventListener()` para vincular uma função a um evento em um elemento HTML. Por exemplo, para executar uma função quando um botão é clicado, você pode usar o seguinte código:

```javascript
const meuBotao = document.querySelector('#meu-botao');
meuBotao.addEventListener('click', function() {
  // Código a ser executado quando o botão é clicado
});
```

Este código seleciona o elemento HTML com o ID "meu-botao" e adiciona um ouvinte de evento "click" a ele. Quando o botão é clicado, a função definida dentro do `addEventListener()` é executada.
