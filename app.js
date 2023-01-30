import {
    onEvent 
} from './lib/code.org.js';

let carteira = 0; 
let extrato = " "; 
const comida = 0; 
const saude = 0; 
const brinquedo = 0; 
let economia = 0;


onEvent("reset", "click", () => {
    carteira = document.querySelector("#dinheiro").value;
    economia = document.querySelector("#economias").value;
    extrato = ""; 
    
})

onEvent("reset", "click", () => {
    document.querySelector("#wallet").innerHTML = carteira;
    document.querySelector("#dinheiro").value = " ";
    document.querySelector("#economias").value = " ";
})



onEvent("comida","click", () =>{
    let comida = document.querySelector("#food").value;
    extrato += "Saldo Atual: " + carteira + " reais. \n"; 
    carteira -= comida; 
    extrato += comida + " reais debitados na sua conta \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    document.querySelector("#food").value = " ";    
});


onEvent("brinquedo","click", () => {
    let brinquedo = document.querySelector("#fun").value;
    extrato += "Saldo Atual: " + carteira + " reais. \n"; 
    carteira -= brinquedo;
    extrato += brinquedo + " reais debitados na sua conta \n"; 
    document.querySelector("#fun").value = " ";
    document.querySelector("#wallet").innerHTML = carteira;
    if(carteira < 0){
        document.querySelector("#wallet-button").style.backgroundCollor = "#FA3E4C";
    }

})


onEvent("saude","click", () => {
    let saude =  document.querySelector("#health").value;
    extrato += "Saldo Atual: " + carteira + " reais. \n";
    carteira -= saude; 
    extrato += brinquedo + " reais debitados na sua conta \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    document.querySelector("#health").value = " ";
    if(carteira < 0){
        document.querySelector("#wallet-button").style.backgroundCollor = "#FA3E4C";
    }
})

onEvent("go-extrato", "click", () => {
    alert(extrato);
})







// cada gasto deve diminuir o valor inicia da carteira 
// quando o valor da carteira chega menor ou igual ao valor dito pelo usuário a tela ficar vermelha
