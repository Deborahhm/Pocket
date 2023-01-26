import {
    onEvent, 
    showElement, 
    setScreen} from './lib/code.org.js';

let carteira = 200; 
const comida = 20; 
const circo = 15; 
const brinquedo = 13; 

// valor da carteira deve ser 200 reais 
// perguntar ao usuario quanto ele quer economizar 
let economia = prompt ("Quanto você gostaria de economizar?");
 


// gerenciar os gastos atraves dos cliques dos tres botoes 

onEvent("comida","click", function(){
   carteira -= comida; 
   console.log(carteira);
});
onEvent("brinquedo","click", function(){
    carteira -= brinquedo;
    console.log(carteira);
})
onEvent("circo","click", function(){
    carteira -= circo; 
    console.log(carteira);
})

// cada gasto deve diminuir o valor inicia da carteira 
// quando o valor da carteira chega menor ou igual ao valor dito pelo usuário a tela ficar vermelha
