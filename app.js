import {
    onEvent,
    getProperty,
    getPropertyValue,
    setProperty,
    setPropertyValue
} from './lib/code.org.js';

let carteira = 0; 
let extrato = " "; 
const comida = 0; 
const saude = 0; 
const brinquedo = 0; 
let economia = 0;

//carrega o valor digitado na carteira e limpa os campos de input de economia e carteira
onEvent("reset", "click", () => {
    carteira = getPropertyValue("dinheiro");
    economia = getPropertyValue("economias");
    console.log(carteira);
    console.log(economia);
    extrato = ""; 
    cleanValue();  
    setProperty("wallet", carteira);
    setPropertyValue("dinheiro", "");
    setPropertyValue("economias","");
    document.querySelector("#wallet-button").style.backgroundColor = "#111827";     
    
})


//Quando o botao comida é clicado exucuta 
onEvent("comida","click", () =>{
    //pega o valor do input para reduzir da carteira
    let comida = getPropertyValue("food");
    //chama a funcao para atualizar a carteira (ver funcao)
    carteira = atualizaCarteira(comida, carteira, economia);
    //atualiza o valor da carteira 
    setProperty("wallet", carteira);
    //limpa o valor digitado no input (ver funcao)
    cleanValue();  
});


onEvent("brinquedo","click", () => {
    let brinquedo = getPropertyValue("fun"); 
    carteira = atualizaCarteira(brinquedo, carteira, economia);
    setProperty("wallet", carteira);
    cleanValue();  
})


onEvent("saude","click", () => {
    let saude = getPropertyValue("health"); 
    carteira = atualizaCarteira(saude, carteira, economia);
    setProperty("wallet", carteira);
    cleanValue(); 
})


//imprime o extrato quando o botao é clicado
onEvent("go-extrato", "click", () => {
    alert(extrato);
})


//limpa o valor digitado no input
const cleanValue = () => {
    setPropertyValue("food","");
    setPropertyValue("fun","");
    setPropertyValue("health","");
}



const atualizaCarteira = (id, carteira, economia) => {
    extrato += "Saldo Atual: " + carteira + " reais. \n";
    //Se o valor final for maior que zero, tire o valor da carteira
    if((carteira - id >= 0) && (id != NaN)) {
        carteira -= id;
        extrato += id + " reais debitados na sua conta \n";
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

