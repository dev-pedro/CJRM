<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Adicionando métodos - Aula 01-04

### Resumo

Além de propriedades, objetos em JavaScript também podem ter métodos. Os métodos são funções que são associadas a um objeto. Você pode adicionar um método a um objeto definindo uma função como valor de uma propriedade.

Aqui está um exemplo de como adicionar um método a um objeto:

```javascript
const pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
  apresentacao: function() {
    console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
  }
};
```

Nesse exemplo, adicionamos um método `apresentacao` ao objeto `pessoa`. Você pode invocar esse método usando a notação de ponto:

```javascript
pessoa.apresentacao();
// Saída: Olá, eu sou João e tenho 25 anos.
```

A palavra-chave `this` dentro do método se refere ao próprio objeto. Portanto, `this.nome` se refere à propriedade `nome` do objeto `pessoa`.
