<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Criando um objeto literal - Aula 01-03

### Resumo

Para criar um objeto literal em JavaScript, você pode usar a notação de chaves `{}`. Dentro dessas chaves, você pode definir as propriedades do objeto, separadas por vírgulas. Cada propriedade é composta por um nome e um valor, separados por dois pontos `:`.

Aqui está um exemplo de como criar um objeto literal:

```javascript
const pessoa = {
  nome: 'João',
  idade: 25,
  email: 'joao@joao.com',
  cidade: 'São Paulo'
};
```

Nesse exemplo, criamos um objeto chamado `pessoa` com quatro propriedades: `nome`, `idade`, `email` e `cidade`. Você pode acessar as propriedades de um objeto usando a notação de ponto `.` ou colchetes `[]`. Por exemplo:

```javascript
console.log(pessoa.nome); // "João"
console.log(pessoa["idade"]); // 25
```
