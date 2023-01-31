<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Arrays - Aula 03-02

### Resumo

##### Por que utilizar arrays?

Para armazenar uma lista de valores que geralmente tem relação entre si.

# 

Para declarar um array depois do sinal de igual '=' de atribuição á variável deve abrir e fechar colchetes [ ], está é uma anotação de um array.

Arrays podem conter diversos tipos de valores no mesmo array como números, strings, objetos, o itens contidos dentro de um array são separados por ',' exemplo:

```javascript
const heros = ['Batman', 'Spider-Man', 'Iron-Man']
consolo.log(heros) // ['Batman', 'Spider-Man', 'Iron-Man']
```

Para atribuir um novo valor(sobrescrever) um item dentro de um array usa-se a marcação [ ] passando a posição do item como argumento dentro do colchetes que será alterado exemplo:

```javascript
const heros = ['Batman', 'Spider-Man', 'Iron-Man']
heros[0] = 'SuperMan'
consolo.log(heros) // ['SuperMan', 'Spider-Man', 'Iron-Man']
```

##### .join()

O método join() junta todos os valores de um array separados por ',' exemplo:

```javascript
const heros = ['Batman', 'Spider-Man', 'Iron-Man']
const joinHeros = heros.join()
consolo.log(joinHeros) // Batman,Spider-Man,Iron-Man
```

O método join() pode receber um argumento como separador substituindo a ',' padrão exemplo:

```javascript
const heros = ['Batman', 'Spider-Man', 'Iron-Man']
const joinHeros = heros.join('|')
consolo.log(joinHeros) // Batman|Spider-Man|Iron-Man
```

##### .indexOff()

O indexOff() que retorna o valor da primeira ocorrência encontrada que foi passado como argumento, toda vez que o argumento passado não é encontrado o método indexOff() retorna -1, exemplo:

```javascript
const ages = [31, 25, 39, 40]
const age39 = ages.indexOf(39)
console.log(age39)// 2 Índice encontrado na posição

const age48 = ages.indexOf(48)
console.log(age48)// -1 - índice não encontrado
```

##### .concat()

O método concat() pode receber como argumento um array e concatená-lo com outro array retornando um novo array, exemplo:

```javascript
let heros = ['Batman', 'Spider-Man', 'Iron-Man']
const moreHeros = heros.concat(['CatWoman', 'Thor'])
console.log(moreHeros) //['Batman', 'Spider-Man', 'Iron-Man', 'CatWoman', 'Thor']
```

Esse método não modifica o array original.

##### .push()

O método push() pode empurrar, adicionar para o final do array outro item, exemplo:

```javascript
let heros = ['Batman', 'Spider-Man', 'Iron-Man']
const pushHeros = heros.push('Cyclop', 'Hulk')
console.log(pushHeros)// ['Batman', 'Spider-Man', 'Iron-Man', 'Cyclop', 'Hulk']
```

O push() é um método que altera o valor original de uma variável, esse processi de alterar os arrays são chamados de mutação de valores.

##### .pop()

o método pop() remove o ultimo item de um array e retorna esse item removido, exemplo:

```javascript
let heros = ['Hulk', 'Batman', 'SuperMan', 'Spider-Man']
const lastHero = heros.pop()
console.log(lastHero)// Spider-Man
```
