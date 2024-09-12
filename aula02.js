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
