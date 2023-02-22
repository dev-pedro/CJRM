<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Modificando estilos CSS (inline) - Aula 02-04

### Resumo

Tanto a propriedade `style` quanto o método `setAttribute()` podem ser usados para atribuir propriedades CSS em JavaScript, mas existem diferenças entre eles.

A propriedade `style` permite que você acesse e modifique as propriedades CSS diretamente em um elemento HTML. Por exemplo, para definir a cor do texto de um elemento `div` para vermelho usando a propriedade `style`, você pode fazer o seguinte:

```javascript
const divElement = document.querySelector('div');
divElement.style.color = 'red';
```

O método `setAttribute()`, por outro lado, pode ser usado para definir qualquer atributo em um elemento HTML, incluindo propriedades CSS. Para definir a cor do texto de um elemento `div` usando o método `setAttribute()`, você pode fazer o seguinte:

```javascript
const divElement = document.querySelector('div');
divElement.setAttribute('style', 'color: red;');
```

Tanto com a propriedade `style`  ou com o método `setAttribute()`, você pode definir qualquer propriedade CSS que quiser, mesmo que ela não esteja definida em um elemento HTML. No entanto, você precisa se certificar de que a sintaxe da propriedade CSS esteja correta ao usar o método `setAttribute()`, caso contrário, a propriedade não será aplicada corretamente.

É preferivel atribuir as propriedades de estilos em um arquivo `CSS` separado e apenas manipulalos através do javascript.
