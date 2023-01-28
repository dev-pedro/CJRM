<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Métodos comuns de strings - Aula 02-04

### Resumo

##### .lastIndexOff()

Esse método retorna a posição da ultima ocorrência do carácter que é passado como argumento exemplo:

```javascript
const email = 'laracroft@email.com'
const lastIndexA = email.indexOff('a')
console.log(lastIndexA)//será exibido no consle 3
```

Isso acontece porque a ultima letra 'a' está na posição 3 da string.

##### .slice()

Esse método vai fatiar a string e retornar o pedaço recortado, exemplo:

```javascript
const email = 'laracroft@email.com'
const emailSlice = email.slice(0 , 9)//é passado dois argumentos
console.log(emailSlice)//será exibido no consle 'laracroft' (sem aspas)
```

O primeiro argumento do método slice é o index a partir de onde começa a cortar a string, o segundo argumento indica o carácter final para cortar a string.

*observação: será cortada a string do carácter do ultimo argumento para trás, portanto o segundo argumento não será considerado no retorno da função.*

Para se obter uma parte do meio da string deve se mudar os argumentos do método 'slice', exemplo:

```javascript
const email = 'laracroft@email.com'
const emailSlice = email.slice(4 , 9)//é passado dois argumentos
console.log(emailSlice)//será exibido no consle 'croft' (sem aspas)
```

Nota: Quando usar slice ?

    -- Quando desejar obter uma parte de uma string.

##### .replace()

Esse método vai substituir um ou mais caracteres de uma string por outros, exemplo:

```javascript
const email = 'laracroft@email.com'
const emailReplace = email.replace('laracroft' , 'chun-li')//é passado dois argumentos
console.log(emailReplace)//será exibido no consle 'chun-li@email.com'

```
