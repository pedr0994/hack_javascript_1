/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

for (let i = 1; i <= 7; i += 2) {
    result.push(i); // Agregamos el valor de i al array result
}

console.log(result); // output: [1, 3, 5, 7]


//export result
module.exports = result;