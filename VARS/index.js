//hoisting

/*numberOne = 1;

console.log(numberOne + 2);

var numberOne;*/
//O Hoisting permite que a variavel seja declarada depois da atribuição de valor, porém somente com var, let precisa ser escrito antes.

var firstName ='Arthur';
var lastName = 'Quintanilha';

if(firstName === 'Arthur'){
    var firstName = 'Arthurr';
    let lastName = 'Quintanilhaa';
}

console.log(firstName, lastName);