const altura = parseFloat(prompt("Digite sua altura:"));
const peso = parseFloat(prompt("Digite sua peso:"));
let imc = peso / (altura*altura);

if(imc < 18.5 ){
    console.log( `Seu IMC está Abaixo ${imc}`)
} else if(imc > 25){
console.log(`Seu IMC está com sobrepeso ${imc}`)
} else{
    console.log(`O seu IMC está normal ${imc}`)
}