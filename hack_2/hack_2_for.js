/**
 * mediante el loop for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];

for (let i = 1; i <= 5; i++) {
    result.push(i); // Agregamos el valor de i al array result
}

console.log(result); // output: [1, 2, 3, 4, 5]


//export result
module.exports = result;