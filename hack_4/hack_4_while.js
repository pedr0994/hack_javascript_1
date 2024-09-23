/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let i = 1;

while (i <= 7) {
  result.push(i);
  i += 2;  // Incrementamos de 2 en 2 para obtener 1, 3, 5, 7
}

console.log(result); // output: [1, 3, 5, 7]


//export result
module.exports = result;