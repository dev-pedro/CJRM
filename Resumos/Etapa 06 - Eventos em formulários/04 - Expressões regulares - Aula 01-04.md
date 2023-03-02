<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Expressões regulares - Aula 01-04

### Resumo

As expressões regulares são úteis em formulários para validar e manipular dados inseridos pelos usuários. Aqui estão alguns exemplos de como as expressões regulares podem ser usadas em formulários:

[Regular expressions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

****

1. Validando endereços de e-mail usando uma expressão regular:

```javascript
const meuFormulario = document.querySelector('#meu-formulario');
const meuCampoEmail = document.querySelector('#meu-campo-email');

meuFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(meuCampoEmail.value)) {
    alert('Endereço de e-mail inválido!');
  }
});
```

Neste exemplo, o código adiciona um ouvinte de evento "submit" ao formulário HTML com o ID "meu-formulario". Quando o formulário é enviado, a função de callback é executada e recebe um objeto de evento como um parâmetro. O método `preventDefault()` é chamado para evitar que o formulário seja enviado. Em seguida, uma expressão regular é definida para validar endereços de e-mail. A expressão regular verifica se o endereço de e-mail contém um caractere "@" e um ponto ".". Em seguida, o valor do campo de entrada de texto com o ID "meu-campo-email" é validado usando o método `test()` da expressão regular. Se o valor do campo de entrada de texto não corresponder à expressão regular, uma mensagem de alerta é exibida.

2. Substituindo caracteres inválidos em um campo de entrada de texto usando uma expressão regular:

```javascript
const meuFormulario = document.querySelector('#meu-formulario');
const meuCampoTexto = document.querySelector('#meu-campo-texto');

meuFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  const regexTexto = /[^\w\s]/gi;

  meuCampoTexto.value = meuCampoTexto.value.replace(regexTexto, '');
});
```

Neste exemplo, o código adiciona um ouvinte de evento "submit" ao formulário HTML com o ID "meu-formulario". Quando o formulário é enviado, a função de callback é executada e recebe um objeto de evento como um parâmetro. O método `preventDefault()` é chamado para evitar que o formulário seja enviado. Em seguida, uma expressão regular é definida para substituir todos os caracteres que não são letras, números ou espaços em branco. A expressão regular usa a flag "gi" para substituir todos os caracteres inválidos no campo de entrada de texto, mesmo que eles apareçam várias vezes. Em seguida, o método `replace()` é usado para substituir os caracteres inválidos pelo valor vazio (''). O resultado é armazenado de volta no campo de entrada de texto usando a propriedade "value".

3. Validando senhas com requisitos mínimos usando uma expressão regular:

```javascript
const meuFormulario = document.querySelector('#meu-formulario');
const meuCampoSenha = document.querySelector('#meu-campo-senha');

meuFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!regexSenha.test(meuCampoSenha.value)) {
    alert('A senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.');
  }
});
```

Neste exemplo, o código adiciona um ouvinte de evento "submit" ao formulário HTML com o ID "meu-formulario". Quando o formulário é enviado, a função de callback é executada e recebe um objeto de evento como um parâmetro. O método `preventDefault()` é chamado para evitar que o formulário seja enviado. Em seguida, uma expressão regular é definida para validar senhas com requisitos mínimos. A expressão regular verifica se a senha contém pelo menos uma letra maiúscula, uma letra minúscula e um número, além de ter pelo menos 8 caracteres. O valor do campo de entrada de texto com o ID "meu-campo-senha" é validado usando o método `test()` da expressão regular. Se o valor do campo de entrada de texto não corresponder à expressão regular, uma mensagem de alerta é exibida.

#### O caracter ponto "."

O ponto (.) é um metacaractere especial em expressões regulares que corresponde a qualquer caractere único, exceto nova linha (\n). Isso significa que, se um ponto estiver presente em uma expressão regular, ele corresponderá a qualquer caractere único, seja uma letra, um número, um espaço em branco ou um caractere especial.

Por exemplo, a expressão regular "c.t" corresponderá a qualquer sequência de caracteres que comece com "c", termine com "t" e tenha um caractere qualquer no meio. Isso significa que a expressão regular irá corresponder a strings como "cat", "cut", "c&t", "c@t", entre outras.

No entanto, é importante observar que o ponto não corresponde a caracteres de nova linha (\n). Se você precisar corresponder a qualquer caractere, incluindo nova linha, você pode usar o metacaractere "dotall" (.) com a flag "s", que irá corresponder a qualquer caractere, incluindo nova linha. Por exemplo, a expressão regular "/.*/s" corresponderá a qualquer sequência de caracteres, incluindo nova linha.

#### Limitar a quantidade de caracteres nas expressões regulares

Para limitar a quantidade de caracteres em uma expressão regular, você pode usar as chaves ({}) para especificar um número mínimo e máximo de ocorrências de um padrão.

Por exemplo, a expressão regular "/^\d{3}$/" corresponderá a qualquer sequência de exatamente três dígitos, como "123", "456" e "789". Nesse caso, as chaves {3} especificam que o padrão anterior (dígitos) deve ocorrer exatamente três vezes.

Da mesma forma, a expressão regular "/^\w{5,10}$/" corresponderá a qualquer sequência de caracteres alfanuméricos que tenha entre 5 e 10 caracteres, incluindo letras maiúsculas e minúsculas, números e o caractere underscore (_). Nesse caso, as chaves {5,10} especificam que o padrão anterior (caracteres alfanuméricos) deve ocorrer entre 5 e 10 vezes.

Além disso, você também pode usar o metacaractere "+", que corresponde a uma ou mais ocorrências do padrão anterior, e o metacaractere "*", que corresponde a zero ou mais ocorrências do padrão anterior. Por exemplo, a expressão regular "/^[a-z]+[0-9]*$/" corresponderá a qualquer sequência de letras minúsculas seguidas por zero ou mais dígitos. Nesse caso, o metacaractere "+" especifica que deve haver pelo menos uma letra minúscula, enquanto o metacaractere "*" indica que pode haver zero ou mais dígitos após a letra minúscula.

Aqui está um exemplo de código em JavaScript que usa expressões regulares para validar a entrada do usuário e limitar a quantidade de caracteres em um campo de texto:

```html
<form>
  <label for="username">Nome de usuário:</label>
  <input type="text" id="username" name="username" required pattern="[a-zA-Z0-9_]{5,15}">
  <small>O nome de usuário deve ter entre 5 e 15 caracteres alfanuméricos.</small>
  <br><br>
  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" required>
  <br><br>
  <input type="submit" value="Enviar">
</form>
```

Nesse exemplo, o campo de texto "username" é validado com a expressão regular "/[a-zA-Z0-9_]{5,15}/". Isso significa que o campo deve conter entre 5 e 15 caracteres alfanuméricos (letras maiúsculas e minúsculas, números e o caractere underscore). Além disso, o campo é obrigatório (required).

O campo de texto "email" também é obrigatório e é validado com uma expressão regular interna do navegador que verifica se o valor inserido é um endereço de e-mail válido.

Quando o usuário clica no botão "Enviar", o formulário é submetido e os dados são enviados para o servidor para processamento posterior. Se algum dos campos não estiver em conformidade com as regras de validação, uma mensagem de erro será exibida.
