<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Apresentando o optional chaining - Aula 03-24

### Resumo

### Quando Usar Ternário

**Você deve usar ternário quando baseado em uma condição você precisa obter um valor.**

O operador ternário, também conhecido como operador condicional, é uma construção em JavaScript que permite avaliar uma expressão condicional e retornar um valor com base nessa condição. O operador ternário é frequentemente utilizado quando você tem uma escolha simples a ser feita entre dois valores diferentes com base em uma condição.

A sintaxe geral do operador ternário é a seguinte:

```javascript
condicao ? valorSeVerdadeiro : valorSeFalso;
```

Onde:

- `condicao` é a expressão que você deseja avaliar.
- `valorSeVerdadeiro` é o valor retornado se a condição for verdadeira.
- `valorSeFalso` é o valor retornado se a condição for falsa.

Aqui estão alguns exemplos de quando usar o operador ternário em JavaScript:

**Exemplo 1: Verificar se um número é par ou ímpar:**

```javascript
const numero = 10;
const resultado = numero % 2 === 0 ? 'Par' : 'Ímpar';
console.log(resultado); // Saída: 'Par'
```

**Exemplo 2: Verificar se um usuário está logado:**

```javascript
const usuarioLogado = true;
const mensagem = usuarioLogado ? 'Bem-vindo de volta!' : 'Por favor, faça o login.';
console.log(mensagem); // Saída: 'Bem-vindo de volta!'
```

**Exemplo 3: Calculando desconto em um produto:**

```javascript
const precoOriginal = 100;
const desconto = true;
const precoFinal = desconto ? precoOriginal * 0.8 : precoOriginal;
console.log(precoFinal); // Saída: 80 (com desconto) ou 100 (sem desconto)
```

Em geral, o operador ternário é útil quando você precisa tomar uma decisão simples com base em uma condição e atribuir um valor a uma variável ou expressão. No entanto, lembre-se de que o uso excessivo de operadores ternários pode tornar o código menos legível, especialmente quando a lógica se torna mais complexa. Portanto, é importante equilibrar o uso do operador ternário com clareza e simplicidade do código.

### Optional Chaining

Optional chaining é uma funcionalidade introduzida no ECMAScript 2020 (ES11) que permite acessar propriedades aninhadas de objetos ou chamar métodos em uma cadeia de propriedades de forma segura, sem gerar um erro se alguma das propriedades intermediárias for `null` ou `undefined`. Isso ajuda a simplificar o código e evitar a necessidade de verificar manualmente cada nível de propriedade.

A sintaxe do optional chaining é o ponto de interrogação `?.` colocado após a propriedade que você deseja acessar. Se a propriedade à esquerda do `?.` for `null` ou `undefined`, a expressão inteira retornará `undefined`, em vez de lançar um erro.

Aqui estão alguns exemplos para ilustrar o uso do optional chaining:

**Exemplo 1: Acessando propriedades aninhadas:**

```javascript
const objeto = {
  propriedade1: {
    propriedade2: {
      propriedade3: "Valor"
    }
  }
};

// Usando optional chaining para acessar a propriedade3
const valor = objeto?.propriedade1?.propriedade2?.propriedade3;
console.log(valor); // Saída: "Valor"
```

**Exemplo 2: Chamando métodos aninhados:**

```javascript
const objeto = {
  metodo1: () => {
    return {
      metodo2: () => {
        return "Resultado do método 2";
      }
    };
  }
};

// Usando optional chaining para chamar o método2
const resultado = objeto?.metodo1?.()?.metodo2?.();
console.log(resultado); // Saída: "Resultado do método 2"
```

**Exemplo 3: Lidando com propriedades ou métodos que não existem:**

```javascript
const objeto = {};

// Usando optional chaining para acessar uma propriedade inexistente
const valor = objeto?.propriedade?.subpropriedade;
console.log(valor); // Saída: undefined
```

O optional chaining é especialmente útil em situações em que você não tem certeza se todas as propriedades que deseja acessar estão presentes ou têm valores definidos. No entanto, é importante notar que o optional chaining só está disponível em navegadores e ambientes que suportam ECMAScript 2020 ou versões posteriores. Certifique-se de verificar a compatibilidade antes de usá-lo em um ambiente específico.

### Código Usado

Javascript:

```javascript
const loginMessage = (user) => {
  const loginMessageExists = document.querySelector('[data-js="login-message"]')
  loginMessageExists?.remove();// usando o Optional Chaining

  ...
};
```
