//inteiros ou decimais

let numero = 100;

numero += 3;
console.log(numero);

numero -= 3;
console.log(numero);

numero ++;
console.log(numero);

numero --;
console.log(numero);

numero *= 3;
console.log(numero);

numero /= 3;
console.log(numero);

numero %= 2;
console.log(numero);

numero = Math.PI;
console.log(numero);

numero = 1/2;
console.log(numero);

numero = Math.floor(numero);
console.log(numero);
numero = 1/2;

numero = Math.ceil(numero);
console.log(numero);

/*

saída:

103
100
101
100
300
100
0
3.141592653589793
0.5
0
1

*/

//boolean

let validacao = 3 === 0;
console.log(validacao);

validacao = 3 === 3;
console.log(validacao);

validacao = !false;
console.log(validacao);

validacao = !true;
console.log(validacao);

/*

saída:

false
true
true
false

*/

//array

let array =[];

array = array.push(3);
console.log(array);


//objeto

let obj = {};

obj.name = "Juliana";
obj.idade = 22;

console.log(obj);

let objContent = Object.values(obj);
console.log(objContent);

objContent = Object.keys(obj);
console.log(objContent);

/*

saída:

{ name: 'Juliana', idade: 22 }
[ 'Juliana', 22 ]
[ 'name', 'idade' ]

*/