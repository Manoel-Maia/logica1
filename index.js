
//Aula 01
let nota1 = 8;
let nota2 = 6;
let nota3 = 5;

let media = (nota1+nota2+nota3)/3;

console.log('Média do aluno: '+media);

//Aula 02 (faltei)
/*
                    //01
console.log('Olá mundo!')

                    //02 & 03
                    //Jeito burro:
const readline = require('readline')
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let global_nome = '';
interface.question('Qual seu nome? ', (nome) =>{
    global_nome = nome;
    const readline2 = require('readline')
    const interface2 = readline2.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    interface2.question(`E qual o salário de ${global_nome}?`, (salario) =>{
        console.log(`${global_nome} ganha ${salario} por mês.`)
        interface2.close();
    })
    console.log(`Olá, ${nome}`)
    interface.close();
    })
console.log('fim do jeito imprático de resolver a questão 3.')


*/
//Aula 03
let array01 = ['arroz','feijao','batata','macarrao']
console.log(array01);

//01
const addLast = (array, value) =>{
    array01.push(value);
    console.log(array);
    return array;
}
array01 = addLast(array01, 'sardinha')

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
    console.log (array01);
    return array;
}
array01 = remove1st(array01);

                    //03
const add1st = (array, value) => {
    array01.unshift(value);
    console.log(array)
    return array;
}
array01 = add1st(array01, 'espinafre')

//04
/*remover ultimo elemento de um array*/

const removeLast = (array) => {
    array.pop();
    console.log(array);
    return array;
}
array01 = removeLast(array01)

//05
/*alterar o valor de um array qualquer dentro da lista*/
const poderiaFazerSemUsarUmaVariavel = (array, index, value) => {
    array[index] = value;
    console.log(array01)
    return array;
}
array01 = poderiaFazerSemUsarUmaVariavel(array01, 1, 'suriname')

//06
/*adicionar multiplos elementos ao final de um array */
const addPack = (array, pack) => {
    array = array.concat(pack);
    console.log(array);
    return array;
}
array01 = addPack(array01, ['maminha','picanha','baiacu'])
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
    let temp1
    let temp2
    if (index == 0) index ++;
    if (index>1){
        temp1 = array.slice(0,index-1);
    }else temp1=[];
    temp2 = array.slice(index-1,array.length)
    array = temp1.concat(value.concat(temp2));
    console.log (array);
    return array;
}
array01 = addMid(array01, 1,['brasil', 'argelia', 'turma-da-monica'])


//08
function removeMid(array, index, numOfElements) {
    if (index == 0) index ++;
    if (index>1){
        return [].concat(array.slice(0, index-1),array.slice(index+numOfElements-1, array.length-1))
    }
}
array01 = removeMid(array01, 1,3)
console.log(array01);