//Aula 03
let array01 = ["arroz", "feijao", "batata", "macarrao"];
console.log(array01);

//01
// Crie uma função que adiciona um elemento ao final deum array
const addLast = (array, value) => {
  array.push(value);
  console.log(array);
  return array;
};

addLast(array01, "sardinha");

//02
//crie uma função que remove o primeiro elemento de um array
let remove1st = (array) => {
  array.shift();
  console.log(array);
  return array;
};
remove1st(array01);

//03
//crie uma função que adiciona um elemento no inicio de um array
const add1st = (array, value) => {
  array01.unshift(value);
  console.log(array);
  return array;
};
add1st(array01, "espinafre");

//04
/*crie uma função que remove o ultimo elemento de um array*/
const removeLast = (array) => {
  array.pop();
  console.log(array);
  return array;
};
removeLast(array01);

//05
/*crie uma função que substitui um elemento em uma posição especifica de um array*/
const changeElement = (array, index, value) => {
  array[index] = value;
  console.log(array01);
  return array;
};
changeElement(array01, 1, "suriname");

//06
/*crie uma função que adiciona multiplos elementos ao final de um array*/
const addPack = (array, pack) => {
  array = array.concat(pack);
  console.log(array);
};
addPack(array01, ["maminha", "picanha", "baiacu"]);
console.log(array01);

//07
/*Crie uma função que insere um elemento em uma posição específica de um array.
O indice e o elemento a ser inserido devem ser passados como argumentos.*/
/**
 * Esta função não altera as listas inseridas como parâmetros, mas retorna o
 * primeiro array concatenado ao segundo, a partir de qualquer posição desejada.
 *
 * @param {*} array array base que deseja alterar
 * @param {*} index posição no array (a partir de 1)
 * @param {*} value valor (em array) a ser concatenado ao array original
 * @returns retorna a mudança no array original.
 */
function addMid(array, start, end, value) {
  array.splice(start, end, value);
}
console.log("antes da alteração n.7:");
console.log(array01);
array01 = addMid(array01, 1, 3, ["brasil", "argelia", "turma-da-monica"]);
console.log("depois da alteração n.7:");
console.log(array01);

//08
/*crie uma função que remove um elemento de uma posição específica de um array.
o indice do elemento a ser removido deve ser passado como argumento.*/
function removeMid(array, index, numOfElements) {
  if (index == 0) index++;
  if (index > 1) {
    return [].concat(
      array.slice(0, index - 1),
      array.slice(index + numOfElements - 1, array.length - 1)
    );
  }
}
array01 = removeMid(array01, 1, 3);
console.log(array01);

//09
/*crie uma função que move um elemento de uma posição para outra em um array
 utilizando os metodos splice e push. o indice original e o novo indice 
 devem ser passados como argumentos.*/

//10
/*escreva um programa que pergunte a velocidade de um carro. caso ultrapasse 
80hm/h, exiba uma mensagem dizendo que o usuario foi multado e exiba o valor 
da multa cobrando R$5 por cada km acima da velocidade permitida*/
