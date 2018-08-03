

function calc(e){

    let diasTrabalhados = document.getElementById('workedDays').value
    let quantidade = document.getElementById('amount').value
    let objetivo = document.getElementById('goal').value
    let diasRestantes = document.getElementById('daysRemaining').value
    let mediaProdutividade = quantidade/diasTrabalhados
    let projecao = mediaProdutividade*diasRestantes
    let percentualProjecao = projecao/objetivo

    
   
    const calcTrabalho = ()=>{
        if(diasTrabalhados && quantidade >= 1){
            document.getElementById('displayMedia').value = `${Math.floor(mediaProdutividade)} Acionamentos/Dia`
            document.getElementById('displayMeta').value = ` ${Math.floor(projecao)} em ${diasRestantes} Dias - ${percentualProjecao.toFixed(2)}% da Meta` 
        }else{
            document.getElementById('displayMedia').value = `Valores Inválidos`
            alert(`Preencha Dias Trabalhados e Acionamentos com Valores Validos`)
        }
    }

    calcTrabalho()

    const calcValor = ()=>{
        if(mediaProdutividade >= 40 && mediaProdutividade <= 44) {
            document.getElementById('faixaValor').value = `R$ 40,00`

        }else if(mediaProdutividade >= 45 && mediaProdutividade <=49){
            document.getElementById('faixaValor').value = `R$ 80,00`

        }else if(mediaProdutividade >= 50 && mediaProdutividade <= 56){
            document.getElementById('faixaValor').value = `R$ 120,00`

        }else if(mediaProdutividade >= 57){
            document.getElementById('faixaValor').value = `R$ 150,00`
        }else {
            document.getElementById('faixaValor').value = `R$ 00,00`
        }
    }
    calcValor()

    
    
}

function mostrarMenu(e){
    document.getElementById('menu-content').style.display = 'block'
    
}

function esconderMenu(){
    document.getElementById('menu-content').style.display = 'none'
}

function reset(){
    document.getElementById('displayMedia').value = ''
    document.getElementById('displayMeta').value = ''
    document.getElementById('faixaValor').value = ''
    document.getElementById('workedDays').value = ''
    document.getElementById('amount').value = ''
    document.getElementById('goal').value = ''
    document.getElementById('daysRemaining').value = ''
}


/*function resolution(e){
    let altura = window.innerHeight
    let largura = window.innerWidth
    alert(`A altura da janela é ${altura}
    e a Largura é ${largura}`)
}

resolution()*/
