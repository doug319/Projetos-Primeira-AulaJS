// Programa que calcula o valor gasto de combustível em uma viagem

const precoDaGasolina = 5.35; // Real/Litro
const precoDoEtanol = 4.18; // Real/Litro
const ConsumoVeiculo = 10; // KM/Litro
const distanciaDaViagem = 150; // em KM
const tipoDeCombustivel = `Gasolina`;

if(tipoDeCombustivel === `Etanol`){
let gastoCombustivelPorViagem = (distanciaDaViagem/ConsumoVeiculo)*precoDoEtanol
console.log(`O gasto de combustível para esta viagem será de R$ ${gastoCombustivelPorViagem.toFixed(2)}`);

}else{
let gastoCombustivelPorViagem = (distanciaDaViagem/ConsumoVeiculo)*precoDaGasolina
console.log(`O gasto de combustível para esta viagem será de R$ ${gastoCombustivelPorViagem.toFixed(2)}`);

}


