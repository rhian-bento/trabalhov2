console.log("EX1")

function inverterString(str) {
    return str.split('').reverse().join('');
}

let entrada = "JavaScript";
let saida = inverterString(entrada);
console.log(saida)

console.log("")
console.log("EX2")


function encontrarMaiorNumero(array) {
    return Math.max(...array);
}
let numeros = [10, 5, 20, 8, 15];
let maiorNumero = encontrarMaiorNumero(numeros);
console.log(maiorNumero); 

console.log("")
console.log("EX3")


function ehPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let numero = 7;
let resultado = ehPrimo(numero) ? "É primo" : "Não é primo";
console.log(resultado);

console.log("")
console.log("EX4")

function fibonacciAteN(n) {
    let sequencia = [0, 1];
    for (let i = 2; i <= n; i++) {
        let proximoNumero = sequencia[i - 1] + sequencia[i - 2];
        if (proximoNumero > n) break;
        sequencia.push(proximoNumero);
    }
    return sequencia;
}

let limite = 10;
let sequenciaFibonacci = fibonacciAteN(limite);
console.log(sequenciaFibonacci);

console.log("")
console.log("EX5")

function contarCaracteres(str) {
    let contador = {};
    for (let char of str) {
        contador[char] = (contador[char] || 0) + 1;
    }
    return contador;
}

let texto = "banana";
let contagem = contarCaracteres(texto);
console.log(contagem); 
