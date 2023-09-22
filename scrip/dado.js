let numSorteio;
let numSorteio2;
let ponto;
let primeiraRodada = true;

document.getElementById("sorteio").onclick = function(){funcaoSorteio()}

function funcaoSorteio(){
    
    numSorteio = Math.floor(Math.random() * 6 + 1);
    
    if(numSorteio === 1){
        document.getElementById("face").src = "imagens/face1.png"
    }
    else if(numSorteio === 2){
        document.getElementById("face").src = "imagens/face2.png"
    }
    else if(numSorteio === 3){
        document.getElementById("face").src = "imagens/face3.png"
    }
    else if(numSorteio === 4){
        document.getElementById("face").src = "imagens/face4.png"
    }
    else if(numSorteio === 5){
        document.getElementById("face").src = "imagens/face5.png"
    }
    else if(numSorteio === 6){
        document.getElementById("face").src = "imagens/face6.png"
    }

    funcaoSorteio2();
}

function funcaoSorteio2(){
    
    numSorteio2 = Math.floor(Math.random() * 6 + 1);
    
    if(numSorteio2 === 1){
        document.getElementById("face2").src = "imagens/face1.png"
    }
    else if(numSorteio2 === 2){
        document.getElementById("face2").src = "imagens/face2.png"
    }
    else if(numSorteio2 === 3){
        document.getElementById("face2").src = "imagens/face3.png"
    }
    else if(numSorteio2 === 4){
        document.getElementById("face2").src = "imagens/face4.png"
    }
    else if(numSorteio2 === 5){
        document.getElementById("face2").src = "imagens/face5.png"
    }
    else if(numSorteio2 === 6){
        document.getElementById("face2").src = "imagens/face6.png"
    }

    rodadas();

}


function rodadas(){

    total = numSorteio + numSorteio2;

    if(primeiraRodada){

        document.getElementById("soma").innerHTML = "Soma: " + total;

        if(total === 7 || total === 11){

            setTimeout(function() {
              alert("Você ganhou o jogo!");
            }, 1000);

        }
        else if(total === 2 || total === 3 || total === 12){
            setTimeout(function() {
              alert("Você perdeu o jogo!");
            }, 1000);
        }
        else{

            ponto = total;
            document.getElementById("ponto").innerHTML = "Ponto: " + ponto;

        }

        primeiraRodada = false;

    }else{

        document.getElementById("soma").innerHTML = "Soma: " + total;

        if(total === ponto){
            setTimeout(function() {
              alert("Você ganhou o jogo!");
            }, 1000);
        }
        else if(total === 7){
            setTimeout(function() {
              alert("Você perdeu o jogo!");
            }, 1000);
        }


    }

}