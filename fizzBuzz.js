
function fizzBuzz(num) {

    const divide = (divisor, num) => num % divisor === 0; // Devuelve true o false(return implicito)
    
    if (typeof num !== "number") {  // Comprobarmos que el parametro que recibimos en fizzBuzz sea un numero(por usar javascript, no necesario en typescript)
        return "Error: parameter must be a number";
    } else if (num === 0) { // Ponemos el 0 para que no lo tome como multiplo de ambos numeros
        return 0;
    } else if (divide(3, num) && divide(5, num)) {  // Ponemos este primero para que no salte al comprobar el 3 o el 5 por separado
        return "fizzbuzz";
    } else if (divide(3, num)) {
        return "fizz"
    } else if (divide(5, num)) {
        return "buzz"
    }

    return num;
}

function print (num) {  // Funcion para sacar por consola un console.log por numero a traves de un bucle for
    for(let i = 0; i <= num; i++) {
        console.log(`${i}: ${fizzBuzz(i)}`)
    }
}
print(15);



module.exports = fizzBuzz;