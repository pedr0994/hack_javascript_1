/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1, 2, 3, 4, 5];
let stringArray = ["foo", "bar", "baz", "qux", "echo"];
let result = [];

// Incluir los dos arrays en uno solo
result = result.concat(numberArray, stringArray);

// Reescribir los items del numberArray
result[0] = "one";     // 1
result[2] = "three";   // 3
result[4] = "five";    // 5

// Modificar los items del stringArray
for (let i = 0; i < stringArray.length; i++) {
    switch (stringArray[i]) {
        case "foo":
            result[numberArray.length + i] = "f00";
            break;
        case "bar":
            result[numberArray.length + i] = "Bar";
            break;
        case "baz":
            result[numberArray.length + i] = "b@z";
            break;
        case "qux":
            result[numberArray.length + i] = "quX";
            break;
        case "echo":
            result[numberArray.length + i] = "3ch0";
            break;
    }
}

// Anexar "h@ck" al inicio, al final y entre los arrays
result.unshift("h@ck"); // Al inicio
result.push("h@ck");    // Al final
result.splice(numberArray.length + 1, 0, "h@ck"); // Entre los arrays

console.log(result); // output: ["h@ck", "one", 2, "three", 4, "five", "h@ck", "f00", "Bar", "b@z", "quX", "3ch0", "h@ck"]


//export result
module.exports = result;