// 1. Leia dois números e exiba a soma entre eles.
function exercicio01() {
    let num1 = Number(prompt("Exercício 1 - Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let soma = num1 + num2;
    alert(`A soma entre ${num1} e ${num2} é: ${soma}`);
}

// 2. Leia dois números e exiba o resultado da subtração do primeiro pelo segundo.
function exercicio02() {
    let num1 = Number(prompt("Exercício 2 - Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let subtracao = num1 - num2;
    alert(`A subtração de ${num1} por ${num2} é: ${subtracao}`);
}

// 3. Leia dois números e exiba o resultado da multiplicação.
function exercicio03() {
    let num1 = Number(prompt("Exercício 3 - Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let multiplicacao = num1 * num2;
    alert(`A multiplicação de ${num1} por ${num2} é: ${multiplicacao}`);
}

// 4. Leia dois números e exiba o resultado da divisão.
function exercicio04() {
    let num1 = Number(prompt("Exercício 4 - Digite o dividendo (primeiro número):"));
    let num2 = Number(prompt("Digite o divisor (segundo número):"));
    if (num2 === 0) {
        alert("Erro: Não é possível dividir por zero!");
    } else {
        let divisao = num1 / num2;
        alert(`A divisão de ${num1} por ${num2} é: ${divisao}`);
    }
}

// 5. Leia duas notas e calcule a média aritmética.
function exercicio05() {
    let nota1 = Number(prompt("Exercício 5 - Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let media = (nota1 + nota2) / 2;
    alert(`A média aritmética é: ${media}`);
}

// 6. Um funcionário recebeu um aumento de 10% no salário. Leia o salário atual e calcule o novo valor.
function exercicio06() {
    let salarioAtual = Number(prompt("Exercício 6 - Digite o salário atual (R$):"));
    let novoSalario = salarioAtual * 1.10; // Multiplicar por 1.10 adiciona 10% automaticamente
    alert(`O novo salário com 10% de aumento é: R$ ${novoSalario.toFixed(2)}`);
}

// 7. Um produto recebeu um desconto de 15%. Leia o preço original e calcule o valor final.
function exercicio07() {
    let precoOriginal = Number(prompt("Exercício 7 - Digite o preço original do produto (R$):"));
    let valorFinal = precoOriginal * 0.85; // Se descontou 15%, o cliente paga 85% do valor
    alert(`O valor final com 15% de desconto é: R$ ${valorFinal.toFixed(2)}`);
}

// 8. Leia a base e a altura de um retângulo e calcule sua área.
function exercicio08() {
    let base = Number(prompt("Exercício 8 - Digite a base do retângulo:"));
    let altura = Number(prompt("Digite a altura do retângulo:"));
    let area = base * altura;
    alert(`A área do retângulo é: ${area}`);
}

// 9. Leia a base e a altura de um triângulo e calcule sua área.
function exercicio09() {
    let base = Number(prompt("Exercício 9 - Digite a base do triângulo:"));
    let altura = Number(prompt("Digite a altura do triângulo:"));
    let area = (base * altura) / 2;
    alert(`A área do triângulo é: ${area}`);
}

// 10. Em uma compra, são informados a quantidade de produtos e o preço unitário. Calcule o valor total da compra.
function exercicio10() {
    let quantidade = Number(prompt("Exercício 10 - Digite a quantidade de produtos:"));
    let precoUnitario = Number(prompt("Digite o preço unitário (R$):"));
    let total = quantidade * precoUnitario;
    alert(`O valor total da compra é: R$ ${total.toFixed(2)}`);
}

// 11. Uma conta de restaurante será dividida igualmente entre várias pessoas. Leia o valor total da conta e a quantidade de pessoas e calcule quanto cada uma deverá pagar.
function exercicio11() {
    let contaTotal = Number(prompt("Exercício 11 - Digite o valor total da conta (R$):"));
    let qtdPessoas = Number(prompt("Digite a quantidade de pessoas:"));
    let valorPorPessoa = contaTotal / qtdPessoas;
    alert(`Cada pessoa deverá pagar: R$ ${valorPorPessoa.toFixed(2)}`);
}

// 12. Leia a distância percorrida por um veículo e a quantidade de litros de combustível consumidos. Calcule o consumo médio.
function exercicio12() {
    let distancia = Number(prompt("Exercício 12 - Digite a distância percorrida (km):"));
    let litros = Number(prompt("Digite os litros de combustível consumidos:"));
    let consumoMedio = distancia / litros;
    alert(`O consumo médio do veículo foi de: ${consumoMedio.toFixed(2)} km/l`);
}

// 13. Leia um valor em reais e a cotação do dólar. Calcule quantos dólares podem ser comprados.
function exercicio13() {
    let reais = Number(prompt("Exercício 13 - Quanto você tem em Reais (R$)?"));
    let cotacaoDolar = Number(prompt("Qual a cotação atual do Dólar (US$)?"));
    let dolares = reais / cotacaoDolar;
    alert(`Com R$ ${reais.toFixed(2)} você pode comprar: US$ ${dolares.toFixed(2)}`);
}

// 14. Leia a idade de uma pessoa em anos e calcule aproximadamente quantos dias ela já viveu.
function exercicio14() {
    let idade = Number(prompt("Exercício 14 - Digite a sua idade em anos:"));
    let dias_vividos = idade * 365; // Desconsiderando anos bissextos para simplificar
    alert(`Você já viveu aproximadamente: ${diasVividos} dias!`);
}

// 15. Um investimento teve rendimento de 8%. Leia o valor investido e calcule o valor final após o rendimento.
function exercicio15() {
    let valorInvestido = Number(prompt("Exercício 15 - Digite o valor investido (R$):"));
    let valorFinal = valorInvestido * 1.08; // Multiplicar por 1.08 adiciona 8% de rendimento
    alert(`O valor final após o rendimento de 8% é: R$ ${valorFinal.toFixed(2)}`);
}