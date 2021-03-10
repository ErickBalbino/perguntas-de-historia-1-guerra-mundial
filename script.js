//Verificar questão 1
function verificarQuestao01() {
    //Variaveis
    var resposta = window.document.getElementsByName('qst1')  // Pegar resposta do usuário
    var resultado = window.document.getElementById('resposta1') // Substituir pelo resultado

    //Verificar as respostas
    if(resposta[0].checked){
        resultado.innerHTML = `A sua resposta está correta!`
        resultado.style.color = '#0f0'
    }else{
        if(resposta[1].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = "#f00"
        }
        if(resposta[2].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[3].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
    }
}

//Verificar questão 2
function verificarQuestao02() {
    var resposta = window.document.getElementsByName('qst2')  //verificar resposta do usuario
    var resultado = window.document.getElementById('resposta2')  //substituir pelo resultado

    if(resposta[0].checked){
        resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
        resultado.style.color = '#f00'
    }else{
        if(resposta[1].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[2].checked){
            resultado.innerHTML = `A sua resposta está correta!`
            resultado.style.color = '#0f0'
        }
        if(resposta[3].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
    }
} 

//Verificar questão 3
function verificarQuestao03(){
    var resposta = window.document.getElementsByName('qst3') //verificar resposta do usuario
    var resultado = window.document.getElementById('resposta3') //substituir pelo resultado

    if(resposta[0].checked){
        resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
        resultado.style.color = '#f00'
    }else{
        if(resposta[1].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[2].checked){
            resultado.innerHTML = `A sua resposta está correta!`
            resultado.style.color = '#0f0 '
        }
        if(resposta[3].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desista.`
            resultado.style.color = '#f00'
        }
    }
}

//Verificar questão 4
function verificarQuestao04(){
    var resposta = window.document.getElementsByName('qst4') //verificar resposta do usuario   
    var resultado = window.document.getElementById('resposta4') //substituir pelo resultado

    if(resposta[0].checked){
        resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
        resultado.style.color = '#f00'
    }else{
        if(resposta[1].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[2].checked){
            resultado.innerHTML = `A sua resposta está correta!`
            resultado.style.color = '#0f0 '
        }
        if(resposta[3].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desista.`
            resultado.style.color = '#f00'
        }
    }
}
//Verificar questão 5
function verificarQuestao05(){ 
    var resposta = window.document.getElementsByName('qst5') //verificar resposta do usuario
    var resultado = window.document.getElementById('resposta5') //substituir pelo resultado

    if(resposta[0].checked){
        resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
        resultado.style.color = '#f00'
    }else{
        if(resposta[1].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[2].checked){
            resultado.innerHTML = `A sua resposta está correta!`
            resultado.style.color = '#0f0 '
        }
        if(resposta[3].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desista.`
            resultado.style.color = '#f00'
        }
    }
}