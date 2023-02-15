<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# A palavra-chave this - Aula 02-03

### Resumo

Em JavaScript, a palavra-chave `this` é uma referência ao objeto atual em que o código está sendo executado. O valor de `this` depende de como e onde a função em que é usada é chamada. A forma como a função é chamada determina o valor de `this`.

Existem quatro maneiras comuns de `this` ser definido em JavaScript:

1. Em um método de objeto, `this` se refere ao próprio objeto. Por exemplo:

```javascript
const objeto = {
  propriedade: 'valor',
  metodo: function() {
    console.log(this.propriedade); // 'valor'
  }
};

objeto.metodo();
```

2. Em uma função normal, o valor de `this` depende de como a função é chamada. Se a função for chamada no contexto global, `this` se refere ao objeto global (no navegador, o objeto `window`). Por exemplo:

```javascript
function funcao() {
  console.log(this === window); // true
}

funcao();
```

3. Quando a função é chamada com o método `call` ou `apply`, `this` é definido explicitamente. Por exemplo:

```javascript
const objeto1 = {
  propriedade: 'valor1'
};

const objeto2 = {
  propriedade: 'valor2'
};

function funcao() {
  console.log(this.propriedade);
}

funcao.call(objeto1); // 'valor1'
funcao.apply(objeto2); // 'valor2'
```

4. Em uma função de construtor, `this` se refere ao objeto que está sendo criado. Por exemplo:

```javascript
function Pessoa(nome) {
  this.nome = nome;
  this.falar = function() {
    console.log('Meu nome é ' + this.nome);
  };
}

const pessoa = new Pessoa('João');
pessoa.falar(); // 'Meu nome é João'
```

Em resumo, a palavra-chave `this` é uma forma de acessar o objeto atual em que o código está sendo executado e seu valor depende de como e onde a função em que é usada é chamada.

##### Shortcut dentro de objetos {}

Em JavaScript, é possível usar as funções de atalho dentro de objetos para criar métodos de objeto de forma mais concisa.

Em uma definição de objeto literal, as funções de atalho podem ser usadas para definir propriedades que são métodos do objeto. Por exemplo, a definição de um objeto `pessoa` com um método `dizerOla` pode ser escrita como:

**Forma errada**

```javascript
const pessoa = {
  nome: 'João',
  dizerOla: () => console.log(`Olá, meu nome é ${this.nome}`)
};
```

No entanto, é importante notar que em uma função de atalho usada dentro de um objeto, a palavra-chave `this` não se refere ao objeto em si, mas ao escopo global ou ao escopo da função externa. Para usar corretamente a palavra-chave `this` em uma função de objeto, é necessário usar a sintaxe de função regular:

**Forma correta**

```javascript
const pessoa = {
  nome: 'João',
  dizerOla () {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};
```

Dessa forma, o método `dizerOla` pode acessar a propriedade `nome` do objeto `pessoa` usando `this.nome`.

Em resumo, as funções de atalho podem ser usadas dentro de objetos para definir métodos de objeto de forma mais concisa. No entanto, é importante notar que a palavra-chave `this` em uma função de atalho dentro de um objeto não se refere ao objeto em si, e deve-se usar a sintaxe de função regular para acessar corretamente as propriedades do objeto.
