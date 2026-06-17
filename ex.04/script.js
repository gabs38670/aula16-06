const dolar = 5.10;
let reais = parseFloat(prompt("Digite o valor em R$"))
let resultado = reais /dolar

console.log( `O valor em dolares é: US$ ${resultado.toFixed(2)}`);