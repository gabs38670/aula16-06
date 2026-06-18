const nota1 = 8;
const nota2 = 8;
const nota3 = 8;
const nome = 'gabriel'
let media = (nota1 + nota2 + nota3) /3;
console.log(media);
if(media > 7) {
    console.log(`Aluno ${nome} tem as notas ${nota1}, ${nota2}, ${nota3} somando da a média de ${media} aprovado.`)
}else{
    console.log(`Aluno ${nome} tem as notas ${nota1}, ${nota2}, ${nota3} somando da a média de ${media} reprovado.`)
}