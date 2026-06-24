let btn = document.getElementById("btn");
let resultado=document.getElementById("resultado");

btn.addEventListener('click', function(){

let nome = document.getElementById("nome").value
let idade = document.getElementById("idade").value
let cidade = document.getElementById("cidade").value
let profissao = document.getElementById("profissao").value

resultado.innerText = `Nome: ${nome} \nIdade: ${idade} \nCidade ${cidade} \nProfissão : ${profissao}`

})



