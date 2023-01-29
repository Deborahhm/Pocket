import {
    onEvent, 
    showElement, 
    setScreen} from './lib/code.org.js';

let carteira = 0; 
let extrato = " "; 
const comida = 20; 
const circo = 15; 
const brinquedo = 13; 
let economia = 0;


onEvent("reset", "click", () => {
    carteira = document.querySelector("#dinheiro").value;
    economia = document.querySelector("#economia").value;
    extrato = ""; 
    document.querySelector("#wallet").innerHTML = carteira;
})

onEvent("comida","click", () =>{
    extrato += "Saldo Atual: " + carteira + " reais. \n"; 
    carteira -= comida; 
    extrato += comida + " reais debitados na sua conta \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    if(carteira < 0){
        document.querySelector("#wallet-button").style.backgroundCollor = "#FA3E4C";
    }
});
onEvent("brinquedo","click", () => {
    extrato += "Saldo Atual: " + carteira + " reais. \n"; 
    carteira -= brinquedo;
    extrato += brinquedo + " reais debitados na sua conta \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    if(carteira < 0){
        document.querySelector("#wallet-button").style.backgroundCollor = "#FA3E4C";
    }

})
onEvent("circo","click", () => {
    extrato += "Saldo Atual: " + carteira + " reais. \n";
    carteira -= circo; 
    extrato += brinquedo + " reais debitados na sua conta \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    if(carteira < 0){
        document.querySelector("#wallet-button").style.backgroundCollor = "#FA3E4C";
    }
})

onEvent("go-extrato", "click", () => {
    alert(extrato);
})







// cada gasto deve diminuir o valor inicia da carteira 
// quando o valor da carteira chega menor ou igual ao valor dito pelo usuário a tela ficar vermelha
