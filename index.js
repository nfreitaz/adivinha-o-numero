const escolha = Math.floor(Math.random() * 11);
//let tentativaMaxima = 3;
let tentativa = 0;
resultado.innerHTML = '';


function troca(){
    let numero = document.getElementById("number");
    numero.innerHTML = "number";
}

function adivinhaNumero(){
        

        let chute = parseInt(document.getElementById('number').value);
        let input = document.getElementById('number');
        let button = document.getElementById('button')
        tentativa++

        if (chute == escolha) {
            resultado.innerHTML = "Waw!! Você acertou" 
            //tentativa = tentativaMaxima;
            button.style.display = "none";
            input.setAttribute("type", "hidden");
        }
        else if(escolha < chute){
            resultado.innerHTML = "OOh você errou! O número é menor."    
            
        }
        else{
           resultado.innerHTML = "OOh você errou! O número é maior."
           
        }  
    
    if (tentativa >= 3){
        resultado.innerHTML = `Ahh que pena você não conseguiu adivinhar o número correto é  ${escolha}`;
        button.style.display = "none";
        input.setAttribute("type", "hidden");
    }

}

    