import {
    onEvent,
    redAlert,
    getProperty,
    getPropertyValue,
    setProperty,
    setPropertyValue
} from './lib/code.org.js';

let carteira = 0; 
let extrato = [];
let valor = 0; 
let economia = 0;

//carrega o valor digitado na carteira e limpa os campos de input de economia e carteira
onEvent("reset", "click", () => {
    carteira = getPropertyValue("dinheiro");
    economia = getPropertyValue("economias");
    console.log(carteira);
    console.log(economia);
    extrato = []; 
    cleanValue();  
    setProperty("wallet", carteira);
    setPropertyValue("dinheiro", "");
    setPropertyValue("economias","");
    document.querySelector("#wallet-button").style.backgroundColor = "#111827";     
    
})


//Quando o botao valor é clicado exucuta 
onEvent("comida","click", () =>{
    let valor = getPropertyValue("food");
    carteira = atualizaCarteira(valor, carteira, economia);
    atualizaExtrato("valor", valor);
    setProperty("wallet", carteira);
    cleanValue();  
});


onEvent("brinquedo","click", () => {
    let valor = getPropertyValue("fun"); 
    carteira = atualizaCarteira(valor, carteira, economia);
    atualizaExtrato("brinquedo", valor);
    setProperty("wallet", carteira);
    cleanValue();  
})


onEvent("saude","click", () => {
    let valor = getPropertyValue("health"); 
    carteira = atualizaCarteira(valor, carteira, economia);
    atualizaExtrato("valor", valor);
    setProperty("wallet", carteira);
    cleanValue(); 
})


//imprime o extrato quando o botao é clicado

onEvent("go-extrato", "click", () => {
    if (Object.values(extrato).every((el) => el.valor == 0)) {
      alert("Você não gastou nada...");
    } else {
      let resultado = "";
      extrato.forEach((lancamento) => {
        resultado += `
        <b>Item: ${lancamento.tipo}</b>
        Valor: R$ ${lancamento.valor}
        Data: ${lancamento.dia}
        `;
      });
      alert(resultado);
    }
  });
  
const atualizaExtrato = (id, valorId) => {
    extrato.push({
      tipo: id,
      valor: valorId,
      dia: new Date().toLocaleDateString(),
    });
  };

//limpa o valor digitado no input
const cleanValue = () => {
    setPropertyValue("food","");
    setPropertyValue("fun","");
    setPropertyValue("health","");
}



const atualizaCarteira = (id, carteira, economia) => {
    if((carteira - id >= 0) && (id != NaN)) {
        carteira -= id;
        if(carteira <= economia){        
            redAlert("wallet-button", "#FA3E4C"); 
        }
    }else if((condicao < 0) &&(id != NaN)){
        alert("Você não tem mais dinheiro");
    }else if(id === NaN){
        alert("Isso não é um número!");
    }
    return carteira;
};

