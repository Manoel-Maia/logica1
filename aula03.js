//Aula 03
let array01 = ["arroz", "feijao", "batata", "macarrao"];
console.log(array01);

//01
// Crie uma função que adiciona um elemento ao final deum array
console.log("n.1");
const addLast = (array, value) => {
  array.push(value);
  console.log(array);
  return array;
};

addLast(array01, "sardinha");

//02
//crie uma função que remove o primeiro elemento de um array
console.log("n.2");
let remove1st = (array) => {
  array.shift();
  console.log(array);
  return array;
};
remove1st(array01);

//03
//crie uma função que adiciona um elemento no inicio de um array
console.log("n.3");
const add1st = (array, value) => {
  array01.unshift(value);
  console.log(array);
  return array;
};
add1st(array01, "espinafre");

//04
/*crie uma função que remove o ultimo elemento de um array*/
console.log("n.4");
const removeLast = (array) => {
  array.pop();
  console.log(array);
  return array;
};
removeLast(array01);

//05
/*crie uma função que substitui um elemento em uma posição especifica de um array*/
console.log("n.5");
const changeElement = (array, index, value) => {
  array[index] = value;
  console.log(array01);
  return array;
};
changeElement(array01, 1, "suriname");

//06
/*crie uma função que adiciona multiplos elementos ao final de um array*/
//yuri code
//
console.log("n.6");
const addPack = (array, pack) => {
  return array.concat(pack);
};
array01 = addPack(array01, ["maminha", "picanha", "baiacu"]);
console.log(array01);

//07
/*Crie uma função que insere um elemento em uma posição específica de um array.
O indice e o elemento a ser inserido devem ser passados como argumentos.*/
console.log("n.7");
function addMid(array, index, value) {
  array.splice(index, index, value);
}
addMid(array01, 1, "turma-da-monica");
console.log(array01);

//08
/*crie uma função que remove um elemento de uma posição específica de um array.
o indice do elemento a ser removido deve ser passado como argumento.*/
function removeMid(array, start) {
  array.splice(start, start);
}
removeMid(array01, 1);
console.log(array01);

//09
/*crie uma função que move um elemento de uma posição para outra em um array
 utilizando os metodos splice e push. o indice original e o novo indice 
 devem ser passados como argumentos.*/
console.log("n.9");
function changePos(array, from, to) {
  let val1 = array[from];
  let val2 = array[to];
  array.splice(from, from, val2);
  console.log(array);
  array.splice(to, to, val1);
  console.log(array);
}
changePos(array01, 1, 3);
console.log(array01);

//10
/*escreva um programa que pergunte a velocidade de um carro. caso ultrapasse 
80hm/h, exiba uma mensagem dizendo que o usuario foi multado e exiba o valor 
da multa cobrando R$5 por cada km acima da velocidade permitida*/
