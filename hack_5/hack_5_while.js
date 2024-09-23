/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let i = 7;

while (i >= 1) {
  result.push(i); // Agregamos el valor de 'i' al array 'result'
  i -= 2; // Decrementamos 'i' en 2
}

console.log(result); // output: [7, 5, 3, 1]


//export result
module.exports = result;