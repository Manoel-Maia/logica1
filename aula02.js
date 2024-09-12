//Aula 02 (faltei)

//01
/*Escreva um programa que mostre na tela a mensagem "Olá mundo!"*/
console.log("Olá mundo!");

//Fiz a 02 e a 03 juntas
/*02
 *Faça um programa que leia o nome de uma pessoa e dê boas vindas.*/
const readline = require("readline");
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question("Qual é o nome do funcionário? R:", (nome) => {
  console.log(`Checando funcionário ${nome}...`);
  /*03
   *faça um programa que leia o nome do funcionário e seu salário e
   *mostre uma mensagem, como "O funcionario Lucas recebe R$20000,00
   *por mes"*/
  console.log("-----");
  interface.question("Qual o salário do funcionário? R:", (salario) => {
    console.log(`O funcionário ${nome} ganha R$${salario} por mês.`);
    /*04
     *Desenvolva um algoritmo que leia dois números inteiros e mostre
     * o somatório entre eles*/
    console.log("-----");
    interface.question("informe o primeiro número:", (n1) => {
      interface.question("informe o segundo número:", (n2) => {
        console.log("a soma dos dois números é", parseInt(n1) + parseInt(n2));
        /*05
         *faça um programa que leia as duas notas de uma luno em uma
         *matéria e mostre na tela a sua média na disciplina.*/
        interface.question("digite a primeira nota", (n1) => {
          interface.question("digite a segunda nota", (n2) => {
            console.log(
              `a média das notas é ${(parseInt(n1) + parseInt(n2)) / 2}`
            );
            interface.close();
          });
        });
      });
    });
  });
});

/*06
 *façã um programa que leia um número inteiro e mostre seu antecessor
 e seu sucessor*/

/*07
 *faça um algoritmo que leia quanto dinheiro uma pessoa tem na 
  carteira e mostre quantos dólares ela pode comprar. Considere 
  U$1,00 = R$5,60*/

/*08
 *Faça um algoritmo que leia a largura e altura de uma parede e
  mostre a área a ser pintada e quanta tinta será necessária, 
  sabendo que cada litro pinta 2 metros quadrados da parede.*/

/*09
 *Crie um programa que leia o número de dias trabalhados em um 
  mes e mostre o salário final, sabendo que ele trabalha 8 horas 
  por dia e ganha R$25,00 por hora trabalhada.*/

/*10
 *Faça um algoritmo que leia o salário de um funcionário e mostre-o 
 com um aumento de 15%*/
