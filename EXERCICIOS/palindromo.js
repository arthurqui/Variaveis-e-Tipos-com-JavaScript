//verificar se a ordem de caracters da palavra ou frase é igual nos dois sentidos
let frase ="ovo";

function verificaPalindromo(string){
    if (!string) return "vazio";

    return string.split("").reverse().join("") === string;
}

if (verificaPalindromo(frase) === true){
    console.log("É palindromo");
} else {console.log("Não é palindromo");}