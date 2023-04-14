// Algoritmo que calcula preço final de produto conforme a condição de pagamento escolhida pelo cliente

/*Tabela de Formas de Pagamento
1 - A vista;
2 - Pix ou Dinheiro;
3 - Em até 2x;
4 - Em 3x ou mais
*/


const precoDoProduto = 100.0;
const condicaoDePagamento = 4;

if(condicaoDePagamento === 1){
    const desconto = precoDoProduto * 0.1;
    const precoFinalDoProduto = precoDoProduto - desconto;
    console.log(`O preço final do produto é de R$ ${precoFinalDoProduto}!`);
}else if (condicaoDePagamento === 2){
    const desconto = precoDoProduto * 0.15;
    const precoFinalDoProduto = precoDoProduto - desconto;
    console.log(`O preço final do produto é de R$ ${precoFinalDoProduto}!`);
}else if (condicaoDePagamento === 3){
    const precoFinalDoProduto = precoDoProduto;
    console.log(`O preço final do produto é de R$ ${precoFinalDoProduto}!`);
}else{
    const acrescimo = precoDoProduto * 0.1;
    const precoFinalDoProduto = precoDoProduto + acrescimo;
    console.log(`O preço final do produto é de R$ ${precoFinalDoProduto}!`);
}