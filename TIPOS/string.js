//string
let nome = "João";
let sobrenome = "Pedro";

let concatenado = nome.concat(sobrenome);
console.log(concatenado);

let largura = concatenado.length;
console.log(largura);

//objeto

let objeto = new String("Frase exemplo");
let tipo = typeof objeto;

console.log(objeto);
console.log(tipo);

/*Saída:

JoãoPedro
10
[String: 'Frase exemplo']
object

*/

concatenado = nome + " " + sobrenome;

console.log(concatenado);

/*Saída:

João Pedro

*/

concatenado = `${nome} ${sobrenome}`;

console.log(concatenado);

/*Saída:

João Pedro

*/

let frase = "Uma frase qualquer";

console.log(frase);

let splitNormal = frase.split("");
console.log(splitNormal);

let splitEspaco = frase.split(" ");
console.log(splitEspaco);

let contem = frase.includes("Uma");
console.log(contem);

let comeca = frase.startsWith("U");
console.log(comeca);

let termina = frase.startsWith("r");
console.log(termina);

let troca = frase.replace("Uma","Outra");
console.log(troca);

/*Saída:

Uma frase qualquer
[
  'U', 'm', 'a', ' ', 'f',
  'r', 'a', 's', 'e', ' ',
  'q', 'u', 'a', 'l', 'q',
  'u', 'e', 'r'
]
[ 'Uma', 'frase', 'qualquer' ]
true
true
false
Outra frase qualquer

*/