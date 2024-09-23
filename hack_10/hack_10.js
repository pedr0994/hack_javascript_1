/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
 */
    let arr = ["foo", "bar", "baz", "qux", "echo", "octo", "cat", "foobar", "quux"];
    let result = [];
    
    // Iterar sobre el array usando un loop for
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 1) { // Verificar si el índice es impar
            result.push(arr[i]); // Anexar el elemento al array result
        }
    }
    
    console.log(result); // output: ["bar", "qux", "octo", "foobar"]


//export result
module.exports = result;