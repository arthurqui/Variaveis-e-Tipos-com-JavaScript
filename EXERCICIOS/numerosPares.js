function substPares(array){
    if(!array) return -1;
    if(!array.length) return -1;
    
    for (let i = 0; i < array.length; i++){
        if(array[i]===0){
            console.log("já é 0");
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i]=0;
        } 
    }

    return array;
}

let arr = [1,2,33,44,55,66,73,21];
console.log(substPares(arr));

/*Saída:

Substituindo 2 por 0...
Substituindo 44 por 0...
Substituindo 66 por 0...
[
   1, 0, 33,  0,
  55, 0, 73, 21
]

*/