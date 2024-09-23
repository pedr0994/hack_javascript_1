/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = [];

// 1) anexar al array result los items [bar, baz, qux]
result.push(arr[1], arr[2], arr[3]);

// 2) los 2 primeros items reescribir el caracter "a" por @
result[0] = result[0].replace(/a/g, '@'); // "bar" -> "b@r"
result[1] = result[1].replace(/a/g, '@'); // "baz" -> "b@z"

// 3) modificar el último item "quz" a mayúscula
result[2] = result[2].toUpperCase(); // "qux" -> "QUX"

console.log(result); // output: ["b@r", "b@z", "QUX"]


//export result
module.exports = result;