<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Null e undefined - Aula 03-03

### Resumo

##### Undefined

"undefined" é um valor especial em JavaScript que significa que uma variável foi declarada, mas não foi inicializada com um valor. Por exemplo:

```javascript
let emptiness
console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`)
// saída "undefined, NaN, "O valor é undefined"
```

Todas as vezes que não se atribui um valor a uma variável e tenta usar ela o javascript atribuiu automaticamente *undefined* para essa variável.

E quando se tenta usar uma variável em uma expressão numérica o resultado é NaN (Not a Number).

E ao inserir uma variável *undefined* dentro de uma string o javascript converte automaticamente *undefined* para uma string.

##### Null

Quando usar *Null*? 

Quando você quiser indicar proporcionalmente que não existe valor em uma variável, exemplo:

```javascript
let emptiness = null
console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`)
// saída "null, 3, "O valor é null"
```

Toda vez que se executa uma expressão matemática com alguma variável *Null*, o javascript interpreta a variável como 0(zero), é por isso que vemos 3 como resultado da soma de (empitness + 3) no exemplo acima.

Exemplo de uso do *Null*:

Caso você precise limpar os dados de um formulário através de um botão de reset, você pode usar o *Null* para fazer isso.
