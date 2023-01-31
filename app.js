import {
    onEvent,
    alertaUsuario,
    getProperty,
    setProperty
} from './lib/code.org.js';

let carteira = 0; 
let extrato = []; 
const comida = 0; 
const saude = 0; 
const brinquedo = 0; 
let economia = 0;

//carrega o valor digitado na carteira e limpa os campos de input de economia e carteira
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


//Quando o botao comida é clicado exucuta 
onEvent("comida","click", () =>{
    //pega o valor do input para reduzir da carteira
    let comida = document.querySelector("#food").value;
    //chama a funcao para atualizar a carteira (ver funcao)
    carteira = AtualizaCarteira(comida, carteira, economia);
    //atualiza o valor da carteira 
    document.querySelector("#wallet").innerHTML = carteira;
    //limpa o valor digitado no input (ver funcao)
    cleanValue();  
});


onEvent("brinquedo","click", () => {
    let brinquedo = document.querySelector("#fun").value; 
    carteira = AtualizaCarteira(brinquedo, carteira, economia);
    document.querySelector("#wallet").innerHTML = carteira;
    cleanValue();  
})


onEvent("saude","click", () => {
    let saude =  document.querySelector("#health").value;
    carteira = AtualizaCarteira(saude, carteira, economia);
    document.querySelector("#wallet").innerHTML = carteira;
    cleanValue(); 
})


//imprime o extrato quando o botao é clicado
onEvent("go-extrato", "click", () => {
    alert(extrato);
})


//limpa o valor digitado no input
const cleanValue = () => {
    document.querySelector("#food").value = " ";
    document.querySelector("#fun").value = " ";
    document.querySelector("#health").value = " ";
}



const AtualizaCarteira = (id, carteira, economia) => {
    extrato.push("Saldo Atual: " + carteira + " reais. \n");
    //Se o valor final for maior que zero, tire o valor da carteira
    if((carteira - id >= 0) && (id != NaN)) {
        carteira -= id;
        extrato.push(id + " reais debitados na sua conta \n");
        //se o valor for menor que o valor que queremos economizar, deixe o botao vermelho
        if(carteira <= economia){
            document.querySelector("#wallet-button").style.backgroundColor = "#FA3E4C";
            alert("Você Gastou mais do que queria economizar");
            
        }
        //Se o valor for menor que zero nao debite nada, pq obviamente voce nao tem dinheiro.
    }else if((condicao < 0) &&(id != NaN)){
        alert("Você não tem mais dinheiro");
    }else if(id === NaN){
        //checa para saber se o usuario nao digitou besteira
        alert("Isso não é um número!");
    }
    return carteira;
};

