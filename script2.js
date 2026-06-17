// 16. Utilize uma estrutura de repetição para exibir os números de 1 a 10 no console.
console.log("--- Exercício 16 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 17. Utilize uma estrutura de repetição para exibir os números de 10 a 0 em ordem decrescente no console.
console.log("--- Exercício 17 ---");
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// 18. Utilize uma estrutura de repetição para calcular a soma dos números de 1 a 10 e exiba o resultado.
console.log("--- Exercício 18 ---");
let soma1a10 = 0;
for (let i = 1; i <= 10; i++) {
    soma1a10 += i; // É o mesmo que: soma1a10 = soma1a10 + i
}
console.log("A soma dos números de 1 a 10 é:", soma1a10);

// 19. Utilize uma estrutura de repetição para calcular a soma de todos os números pares entre 0 e 20 e exiba o resultado.
console.log("--- Exercício 19 ---");
let somaPares = 0;
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) { // Se o resto da divisão por 2 for 0, o número é par
        somaPares += i;
    }
}
console.log("A soma dos números pares entre 0 e 20 é:", somaPares);

// 20. Utilize uma estrutura de repetição para exibir apenas os números ímpares entre 0 e 20 no console.
console.log("--- Exercício 20 ---");
for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) { // Se o resto da divisão por 2 for diferente de 0, é ímpar
        console.log(i);
    }
}