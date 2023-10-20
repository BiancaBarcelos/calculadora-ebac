var numero = document.getElementById('resultado');

numero.addEventListener('keyup', function(event){
    if(!event.code.includes('Numpad')){
        this.value = ''
    }else{
        if(event.code.includes('Enter')){
            calcular();
        }
    }
});

function insert (num) {
    numero.value = numero.value + num;
}

function limpar() {
    numero.value = "";
}

function calcular() {
    var resultado = numero.value;
    if(resultado.includes(',')){
        var resultadoArray = resultado.split(',')
        var resultadoFracao = ''
        for(i = 0; i<resultadoArray.length; i++){
            if(i < resultadoArray.length -1){
                resultadoFracao += `${resultadoArray[i]}.`
            }else{
                resultadoFracao += `${resultadoArray[i]}`
            }
        }
        numero.value = eval(resultadoFracao);5
    }else{
        if (resultado) {
            numero.value = eval(resultado);
        }
    }
}