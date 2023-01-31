import {
    onEvent,
    alertaUsuario,
    getProperty,
    setProperty
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
    cleanValue();  
    document.querySelector("#wallet").innerHTML = carteira;
    document.querySelector("#dinheiro").value = " ";
    document.querySelector("#economias").value = " ";
    document.querySelector("#wallet-button").style.backgroundColor = "#111827";     
})



onEvent("comida","click", () =>{
    let comida = document.querySelector("#food").value;
    carteira = alertaUsuario(comida, carteira, economia);
    document.querySelector("#wallet").innerHTML = carteira;
    cleanValue();  
});


onEvent("brinquedo","click", () => {
    let brinquedo = document.querySelector("#fun").value; 
    carteira = alertaUsuario(brinquedo, carteira, economia);
    document.querySelector("#wallet").innerHTML = carteira;
    cleanValue();  
})


onEvent("saude","click", () => {
    let saude =  document.querySelector("#health").value;
    carteira = alertaUsuario(saude, carteira, economia);
    document.querySelector("#wallet").innerHTML = carteira;
    cleanValue(); 
})

onEvent("go-extrato", "click", () => {
    alert(extrato);
})



const cleanValue = () => {
    document.querySelector("#food").value = " ";
    document.querySelector("#fun").value = " ";
    document.querySelector("#health").value = " ";
}

//terminar essa parte aqui 

const alertaUsuario = (id, carteira, economia) => {
    extrato += "Saldo Atual: " + carteira + " reais. \n";
    if((carteira - id >= 0) && (id != NaN)) {
        carteira -= id;
        extrato += id + " reais debitados na sua conta \n";
        if(carteira <= economia){
            document.querySelector("#wallet-button").style.backgroundColor = "#FA3E4C";
            alert("Você Gastou mais do que queria economizar");
            
        }
    }else if((condicao < 0) &&(id != NaN)){
        alert("Você não tem mais dinheiro");
    }else if(id === NaN){
        alert("Isso não é um número!");
    }
    return carteira;
};

