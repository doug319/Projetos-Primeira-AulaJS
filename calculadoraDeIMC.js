// Algoritmo que calcula o IMC de uma pessoa adulta

const peso = 68 // em kg
const altura = 1.62 // em metros
const imc = peso / Math.pow(altura,2);

if(imc < 18.5){
    console.log(`O IMC é de ${imc.toFixed(1)} e está Abaixo do Peso`);
}else if(imc >= 18.5 && imc < 25) {
    console.log(`O IMC é de ${imc.toFixed(1)} e está Peso Normal`);
}else if(imc >= 25 && imc < 30) {
    console.log(`O IMC é de ${imc.toFixed(1)} e está Acima do Peso`);
}else if(imc >= 30 && imc < 40) {
    console.log(`O IMC é de ${imc.toFixed(1)} e está Obeso`);
}else{
    console.log(`O IMC é de ${imc.toFixed(1)} e está com Obesidade Grave`);
}