/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];
let i = 1;

while (i <= 5) {
    result.push(i); // Agregamos el valor de i al array result
    i++; // Incrementamos i en 1
}

console.log(result); // output: [1, 2, 3, 4, 5]


//export result
module.exports = result;