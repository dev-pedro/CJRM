<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Objetos em arrays - Aula 03-02

### Resumo

         Em JavaScript, um array é uma coleção ordenada de valores que podem ser de qualquer tipo, incluindo objetos. Os objetos podem ser armazenados em um array da mesma forma que outros tipos de dados, como números e strings.

Para adicionar um objeto a um array, você pode simplesmente atribuir o objeto a uma posição do array. Por exemplo:

```javascript
let arrayDeObjetos = [];

let objeto1 = {nome: "João", idade: 25};
let objeto2 = {nome: "Maria", idade: 30};

arrayDeObjetos[0] = objeto1;
arrayDeObjetos[1] = objeto2;

console.log(arrayDeObjetos);
```

Este código cria um array vazio `arrayDeObjetos`, cria dois objetos `objeto1` e `objeto2` e, em seguida, atribui esses objetos às posições 0 e 1 do array. O resultado da impressão do array no console será:

```javascript
[ { nome: 'João', idade: 25 }, { nome: 'Maria', idade: 30 } ]
```

Você também pode adicionar objetos a um array usando o método `push()`. Por exemplo:

```javascript
let arrayDeObjetos = [];

let objeto1 = {nome: "João", idade: 25};
let objeto2 = {nome: "Maria", idade: 30};

arrayDeObjetos.push(objeto1);
arrayDeObjetos.push(objeto2);

console.log(arrayDeObjetos);
```

Este código cria um array vazio `arrayDeObjetos`, cria dois objetos `objeto1` e `objeto2` e, em seguida, adiciona esses objetos ao array usando o método `push()`. O resultado da impressão do array no console será o mesmo que no exemplo anterior.
