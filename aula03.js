//Aula 03
let array01 = ["arroz", "feijao", "batata", "macarrao"];
console.log(array01);

//01
const addLast = (array, value) => {
  array01.push(value);
  console.log(array);
  return array;
};
array01 = addLast(array01, "sardinha");

//02
/*
    perdoe-me pai, pois eu pequei e fiz uma gambiarra maldita
    let remove1st = () => {
    let tempArray = array01.reverse();
    tempArray.pop()
    array01 = tempArray.reverse();
    console.log(array01);
}
remove1st()
*/

//agora fiz direito:
let remove1st = (array) => {
  array.shift();
  console.log(array01);
  return array;
};
array01 = remove1st(array01);

//03
const add1st = (array, value) => {
  array01.unshift(value);
  console.log(array);
  return array;
};
array01 = add1st(array01, "espinafre");

//04
/*remover ultimo elemento de um array*/

const removeLast = (array) => {
  array.pop();
  console.log(array);
  return array;
};
array01 = removeLast(array01);

//05
/*alterar o valor de um array qualquer dentro da lista*/
const poderiaFazerSemUsarUmaVariavel = (array, index, value) => {
  array[index] = value;
  console.log(array01);
  return array;
};
array01 = poderiaFazerSemUsarUmaVariavel(array01, 1, "suriname");

//06
/*adicionar multiplos elementos ao final de um array */
const addPack = (array, pack) => {
  array = array.concat(pack);
  console.log(array);
  return array;
};
array01 = addPack(array01, ["maminha", "picanha", "baiacu"]);
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
function addMid(array, index, value) {
  let temp1;
  let temp2;
  if (index == 0) index++;
  if (index > 1) {
    temp1 = array.slice(0, index - 1);
  } else temp1 = [];
  temp2 = array.slice(index - 1, array.length);
  array = temp1.concat(value.concat(temp2));
  console.log(array);
  return array;
}
array01 = addMid(array01, 1, ["brasil", "argelia", "turma-da-monica"]);

//08
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
