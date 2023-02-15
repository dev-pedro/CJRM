<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 02 - Aula 03-01

### Resumo

```javascript
const showChallengeNumber = (number) => {
  console.log(`***** Exercício: ${number} *****`);
};

showChallengeNumber(1);
/*
  01

  - Declare uma constante que recebe o seu nome;
  - Ela deve ter um escopo global.
*/
const myName = "Pedro";
console.log(`Oi eu sou o ${myName}`);
showChallengeNumber(2);
/*
02

- Funções também são blocos de código;
- Crie uma função que ao ser invocada, exibe sua idade no console;
- Dentro da função, declare uma let que armazena a sua idade;
- Exiba sua idade no console, através da invocação da função;
- Do lado de fora da função exiba no console o valor da let que foi declarada  
dentro da função;
- Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
    - Você sabe por que isso aconteceu?
*/
let showMessage = () => {
  let myAge = 44;
  console.log(`Olá, eu sou o ${myName} e tenho ${myAge} anos.`);
};

//console.log(myAge)

showMessage();

showChallengeNumber(3);
/*
03

- Crie um objeto "car" com as seguintes propriedades e métodos:
- name, que recebe o nome do carro;
- brand, que recebe a marca do carro;
- colors, que recebe 3 cores para o carro;
- isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
      - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/
const car = {
  name: "Corolla",
  brand: "Toyota",
  colors: ["Azul", "Prata", "Branco", "Amarelo", "Vermelho"],
  isRunning: false,
  run() {
    this.isRunning = true;
    return `O ${this.name} está em movimento.`;
  },
  stop() {
    this.isRunning = false;
    return `O ${this.name} está parado.`;
  },
  getColorsMessage() {
    const lastColor = this.colors[this.colors.length - 1];
    const colors = this.colors
      .join(", ")
      .replace(`${lastColor}`, `e ${lastColor}`);

    return `O ${this.name} está disponível nas cores ${colors}`;
  },
};
console.log(car);

showChallengeNumber(4);
/*
04

- Faça o carro andar e exiba no console se ele realmente está em movimento.
*/
console.log(car.run());

showChallengeNumber(5);
/*
05

- Faça o carro parar e exiba no console se ele realmente está parado.
*/

console.log(car.stop());

showChallengeNumber(6);
/*
06

  - Exiba, no console, a mensagem com as cores do carro.
*/
console.log(car.getColorsMessage());
showChallengeNumber(7);
/*
  07

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/
console.log(`O carro é um ${car["brand"]} ${car["name"]}`);
```
