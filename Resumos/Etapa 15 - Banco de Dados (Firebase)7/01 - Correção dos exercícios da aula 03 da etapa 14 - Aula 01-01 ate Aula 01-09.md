<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 03 da etapa 14 - Aula 01-01 ate Aula 01-09

### Resumo

### Métodos `call`e `applay`

Os métodos `call()` e `apply()` são métodos disponíveis em todas as funções em JavaScript. Eles permitem que você invoque uma função definindo explicitamente o valor do `this` e passando argumentos para a função.

A principal diferença entre `call()` e `apply()` está na forma como você passa os argumentos para a função:

- O método `call()` recebe uma lista separada por vírgulas de argumentos passados para a função. A primeira argumento é o valor que será atribuído ao `this` dentro da função, e os argumentos subsequentes são passados diretamente para a função como argumentos individuais.

- O método `apply()` recebe dois argumentos: o primeiro é o valor que será atribuído ao `this` dentro da função, e o segundo é um array ou um objeto semelhante a um array que contém os argumentos passados para a função.

Aqui estão alguns exemplos que ilustram o uso desses métodos:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet.call(null, 'John');
greet.apply(null, ['Mary']);
```

No exemplo acima, a função `greet()` é chamada usando `call()` e `apply()` para definir o valor do `this` como `null` e passar o argumento `'John'` usando `call()` e o argumento `'Mary'` usando `apply()`.

Outro exemplo que mostra a diferença na forma de passar os argumentos:

```javascript
function sum(a, b) {
  console.log(a + b);
}

sum.call(null, 2, 3);
sum.apply(null, [4, 5]);

```

Nesse caso, a função `sum()` é chamada usando `call()` e `apply()` para definir o valor do `this` como `null` e passar os argumentos `2` e `3` usando `call()`, e os argumentos `4` e `5` usando `apply()`.

Em resumo, os métodos `call()` e `apply()` permitem que você chame uma função explicitamente definindo o valor do `this` e passando argumentos de forma flexível. A escolha entre eles depende de como você deseja passar os argumentos para a função.

Um exemplo que usa o método `call()` para chamar uma função e passar um objeto como argumento:

```javascript
function greet(person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const person = {
  name: 'John',
  age: 30
};

greet.call(null, person);
```

Nesse exemplo, a função `greet()` recebe um objeto `person` como argumento e imprime uma saudação com o nome e a idade da pessoa. Usando `call()`, podemos chamar a função `greet()` e passar o objeto `person` como argumento.

O primeiro argumento de `call()` é `null` porque não precisamos definir um valor específico para o `this` neste exemplo. No entanto, se a função `greet()` fizer referência ao `this` dentro de seu corpo, você pode substituir `null` pelo valor desejado.

Ao chamar `greet.call(null, person)`, o objeto `person` é passado como argumento para a função `greet()`, permitindo que ela acesse as propriedades `name` e `age` do objeto e imprima-as no console.

Espero que este exemplo tenha sido útil para entender como usar `call()` para passar um objeto como argumento para uma função.

****

### Códigos Usados Nos Exercícios

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"> -->
  <!-- <link href="./style.css" rel="stylesheet"> -->
  <title>Exercício 38</title>
</head>
<body>
  <!-- <div class="container">
    <table data-js="table" class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Jogo do Ano</th>
          <th scope="col">Desenvolvedora</th>
          <th scope="col">Data da premiação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>The Last of Us Part II</td>
          <td>Naughty Dog</td>
          <td>10 de dezembro de 2020</td>
        </tr>
        
        <tr>
          <th scope="row">2</th>
          <td>Sekiro: Shadows Die Twice</td>
          <td>FromSoftware</td>
          <td>12 de dezembro de 2019</td>
        </tr>
        
        <tr>
          <th scope="row">3</th>
          <td>God of War</td>
          <td>SIE Santa Monica Studio</td>
          <td>6 de dezembro de 2018</td>
        </tr>
        
        <tr>
          <th scope="row">4</th>
          <td>The Legend of Zelda: Breath of the Wild</td>
          <td>Nintendo Entertainment Planning & Development</td>
          <td>7 de dezembro de 2017</td>
        </tr>
        
        <tr>
          <th scope="row">5</th>
          <td>Overwatch</td>
          <td>Blizzard Entertainment</td>
          <td>1 de dezembro de 2016</td>
        </tr>
      </tbody>
    </table>

    <a data-js="export-table-btn" role="button" class="btn btn-info">Exportar para CSV</a>
  </div> -->

  <!-- <div class="container">
    <div class="row justify-content-center">
      <img class="col-sm-6 col-md-5 col-lg-4 col-lg-3 col-xl-3 col-xxl-3" src="./src/img/logo.svg" alt="Logo ">
    </div>

    <div class="row justify-content-center mb-4 mt-4">
      <div class="col-sm-3 col-lg-2">
        <select data-js="currency-one" class="form-select"></select>
      </div>

      <div class="col-sm-3 col-lg-2">
        <select data-js="currency-two" class="form-select"></select>
      </div>
    </div>

    <div class="row justify-content-center align-items-center mb-4 mt-4">
      <div class="col-sm-3 col-md-2">
        <input data-js="currency-one-times" type="number" class="form-control form-control-lg" value="1">
      </div>
      
      <div class="col-sm-3 col-md-2">
        <p data-js="converted-value" class="converted-value fs-1 text-center mb-0"></p>
      </div>

      <p data-js="conversion-precision" class="conversion-precision text-center m-4"></p>
    </div>
  </div> -->

  <script src="./app.js"></script>
</body>
</html>

```

CSS:

```css
body {
  background-color: #F9FAFC;
}

.container {
  padding-top: 7.5rem;
}

.converted-value {
  color: #452B4E;
}

.conversion-precision {
  color: #452B4E;
}
```

Javascript:

```javascript

```
