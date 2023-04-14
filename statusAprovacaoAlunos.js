// Algoritmo que calcula a média de 03 notas de um aluno e imprime a média e sua classificação

const nota1 = 5.0;
const nota2 = 9.8;
const nota3 = 4.5;
const notas = [nota1, nota2, nota3];

const media = (nota1 + nota2 + nota3)/notas.length;

if(media < 5){
    console,console.log(`A média do aluno(a) é ${media.toFixed(1)} e está Reprovado`);
}else if(media > 7){
    console,console.log(`Parabens!! A média do aluno(a) é ${media.toFixed(1)} e está Aprovado`);
}else{
    console,console.log(`A média do aluno(a) é ${media.toFixed(1)} e está em Recuperação`);
}