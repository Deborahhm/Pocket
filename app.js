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
    document.querySelector("#food").value = " ";  
    document.querySelector("#fun").value = " ";  
    document.querySelector("#health").value = " ";  
    document.querySelector("#wallet").innerHTML = carteira;
    document.querySelector("#dinheiro").value = " ";
    document.querySelector("#economias").value = " ";
    document.querySelector("#wallet-button").style.backgroundColor = "#111827";     
})





onEvent("comida","click", () =>{
    let comida = document.querySelector("#food").value;
    extrato += "Saldo Atual: " + carteira + " reais. \n"; 
    let condicao = carteira - comida;
    if(condicao > 0){
        carteira -= comida; 
        extrato += comida + " reais debitados na sua conta \n"; 
        document.querySelector("#wallet").innerHTML = carteira;
        document.querySelector("#food").value = " ";    
        if(carteira <= economia){
            document.querySelector("#wallet-button").style.backgroundColor = "#FA3E4C";
            alert("Você Gastou mais do que queria economizar");
        }
    }else{
        alert("Você não tem mais dinheiro"); 
    }
});


onEvent("brinquedo","click", () => {
    let brinquedo = document.querySelector("#fun").value;
    extrato += "Saldo Atual: " + carteira + " reais. \n"; 
    let condicao = carteira - brinquedo;
   if(condicao > 0){
        carteira -= brinquedo;
        extrato += brinquedo + " reais debitados na sua conta \n"; 
        document.querySelector("#fun").value = " ";
        document.querySelector("#wallet").innerHTML = carteira;
        if(carteira <= economia){
            alert("Você Gastou mais do que queria economizar");
            document.querySelector("#wallet-button").style.backgroundColor = "#FA3E4C";
        }
   }else{
        alert("Você não tem mais dinheiro"); 
    }
})


onEvent("saude","click", () => {
    let saude =  document.querySelector("#health").value;
    extrato += "Saldo Atual: " + carteira + " reais. \n";
    let condicao = carteira - saude;
    if(condicao > 0){
    carteira -= saude; 
    extrato += brinquedo + " reais debitados na sua conta \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    document.querySelector("#health").value = " ";
    if(carteira <= economia){
        document.querySelector("#wallet-button").style.backgroundColor = "#FA3E4C";
        alert("Você Gastou mais do que queria economizar");
    }
    }else{
        alert("Você não tem mais dinheiro");         
    }
})

onEvent("go-extrato", "click", () => {
    alert(extrato);
})







// cada gasto deve diminuir o valor inicia da carteira 
// quando o valor da carteira chega menor ou igual ao valor dito pelo usuário a tela ficar vermelha
