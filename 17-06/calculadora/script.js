function calc(op){
let numero1 = parseFloat(document.getElementById ("n1").value);
let numero2 = parseFloat(document.getElementById("n2").value);
let resultado;

if(isNaN(numero1) || isNaN(numero2)) {
    document.getElementById("resultado").innerText = 'Digite dois números válidos'
    resultado = 'Digite dos número validos'
}

switch (op) {
    case "+":
    resultado = numero1 + numero2;
    break;
    case "-":
    resultado = numero1 - numero2; 
    break;
    case "*":
        resultado = numero1 * numero2;
    break;
    case "/":
    if(numero2 ===0){
        resultado = 'divisão por zero"'
    }else{
        resultado = numero1 / numero2;
    }
    break;
    default:
        resultado = "operação inválida";
    
}
document.getElementById("resultado").innerText = resultado ;
}

