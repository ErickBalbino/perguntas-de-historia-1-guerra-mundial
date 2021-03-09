//Verificar questão 1
function verificarQuestao01() {
    //Variaveis
    var resposta = window.document.getElementsByName('alt1')  // Pegar resposta do usuário
    var resultado = window.document.getElementById('resposta1') // Substituir pelo resultado

    //Verificar as respostas
    //if(respostas.unchecked){
       // alert('Insira os dados!')
    //}
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
            resultado.style.color = 'f00'
        }
    }
}

//Verificar questão 2
function verificarQuestao02() {

}