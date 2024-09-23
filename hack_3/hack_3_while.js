/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
let i = 5;

while (i >= 1) {
    result.push(i); // Agregamos el valor de i al array result
    i--; // Decrementamos i en 1
}

console.log(result); // output: [5, 4, 3, 2, 1]


//export result
module.exports = result;