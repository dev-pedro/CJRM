<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Tratando erros com try/catch - Aula 06-04

### Resumo

O try/catch é uma estrutura de controle do JavaScript que permite lidar com erros e exceções que podem ocorrer durante a execução do código. A ideia é tentar executar um bloco de código dentro do "try" e, caso ocorra algum erro, o bloco de código dentro do "catch" é executado em vez de interromper o programa com uma mensagem de erro.

Aqui está um exemplo simples de como usar o try/catch em JavaScript:

```javascript
try {
  // código que pode gerar um erro
  const resultado = 10 / 0;
  console.log(resultado);
} catch (erro) {
  // código que é executado caso ocorra um erro
  console.log("Ocorreu um erro:", erro);
}
```

Nesse exemplo, o código dentro do "try" tenta dividir o número 10 por zero, o que gera um erro de divisão por zero. Em vez de interromper o programa, o erro é capturado e o código dentro do "catch" é executado. O parâmetro "erro" dentro do "catch" contém informações sobre o erro que ocorreu, que podem ser usadas para depurar o problema.

É importante lembrar que o try/catch deve ser usado com moderação, e apenas para lidar com erros que você espera que possam ocorrer. Tentar capturar todos os erros pode tornar o código mais complexo e difícil de depurar. Além disso, o try/catch tem um impacto na performance do código, então é importante usá-lo apenas quando necessário.

### Código Usado Nesta Aula

```javascript
console.log(oi)
console.log('oi')
```

O código acima pode gerar um erro de referência ("ReferenceError") no primeiro console.log(), uma vez que a variável "oi" não foi definida anteriormente no código.

No segundo console.log(), o valor "oi" é passado como uma string, e portanto, não há erro e o valor "oi" é impresso no console.

Se a variável "oi" foi definida anteriormente no código, então não ocorrerá nenhum erro de referência e o valor de "oi" será impresso no console.

```javascript
try {
  console.log(oi)
} catch (error) {}

console.log('oi')
```

O código acima, o bloco "try" contém uma chamada para console.log() passando a variável "oi" como argumento. Como a variável "oi" não foi definida anteriormente no código, ocorrerá um erro de referência ("ReferenceError").

No entanto, o bloco "catch" está vazio, o que significa que o erro será capturado, mas nenhum código será executado para lidar com o erro. Portanto, o código dentro do bloco "catch" não fará nada em relação ao erro.

Após a execução do bloco "try"/"catch", o código continuará com a próxima linha, que é a chamada para console.log() passando a string "oi" como argumento. Como essa chamada não está dentro do bloco "try"/"catch", ela será executada independentemente do que acontecer no bloco anterior.

Portanto, o resultado da execução do código será um erro de referência ("ReferenceError") impresso no console (capturado pelo bloco "catch"), seguido pela impressão da string "oi" no console.

```javascript
try {
  console.log(oi)
} catch (error) {
    if(error.name === 'ReferenceError' && error.message === 'oi is not defined'){
        const oi = 'const oi criada'
        console.log(oi)
    }
}

console.log('oi')
```

No código acima o bloco "try" contém uma chamada para console.log() passando a variável "oi" como argumento. Como a variável "oi" não foi definida anteriormente no código, ocorrerá um erro de referência ("ReferenceError").

No entanto, o bloco "catch" contém uma verificação para o tipo de erro que ocorreu (um erro de referência) e a mensagem de erro correspondente ("oi is not defined"). Se essa verificação passar, o bloco "catch" criará uma nova variável "oi" usando o operador "const" e atribuirá a ela o valor "const oi criada". Em seguida, o valor dessa nova variável "oi" será impresso no console.

Após a execução do bloco "try"/"catch", o código continuará com a próxima linha, que é a chamada para console.log() passando a string "oi" como argumento. Como essa chamada não está dentro do bloco "try"/"catch", ela será executada independentemente do que acontecer no bloco anterior.

Portanto, o resultado da execução do código será a impressão da string "const oi criada" no console (dentro do bloco "catch"), seguida pela impressão da string "oi" no console.

### Uso excessivo do Try/Catch

O uso excessivo do try/catch pode afetar a performance da aplicação. Isso ocorre porque quando uma exceção é lançada, o mecanismo de execução do JavaScript precisa percorrer a pilha de chamadas de função para encontrar o primeiro bloco catch que pode manipular a exceção. Quanto mais profunda a pilha de chamadas, mais tempo leva para encontrar o bloco catch correspondente.

Além disso, o try/catch também pode ter impacto na otimização do código pelo mecanismo do JavaScript. Quando um bloco try/catch é usado, o mecanismo do JavaScript precisa considerar todos os possíveis caminhos de execução do código, o que pode dificultar a otimização do código.

Por esses motivos, é recomendado usar o try/catch apenas em situações em que você espera que um erro possa ocorrer, e não como um mecanismo geral de tratamento de erros. Em outras palavras, o try/catch deve ser usado com moderação e sempre que possível, deve-se evitar o uso desnecessário do mesmo.
