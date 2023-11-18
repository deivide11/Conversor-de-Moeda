function converter() {
    var valor = document.getElementById('valor').value;

    var qntMoeda = document.getElementById('qntMoeda').value;

    var valorReal = valor * qntMoeda;

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = "O valor em real é: R$ " + valorReal.toFixed(2);

    document.getElementById('valor').value = '';
    document.getElementById('qntMoeda').value = '';
}

function placeholder(){
    var moedaSelecionada = document.getElementById('moeda').value;
    var inputValor = document.getElementById('valor');
    var inputQnt = document.getElementById('qntMoeda');

    switch(moedaSelecionada){
        case 'euro':
            inputValor.placeholder = 'Digite o valor do Euro';
            inputQnt.placeholder = 'Digite a quantidade do Euro';
            break;
        
        case 'dolar':
            inputValor.placeholder ='Digite o valor do Dólar';
            inputQnt.placeholder = 'Digite a quantidade do Dólar';

            break;

        case 'libra':
            inputValor.placeholder ='Digite o valor da Libra';
            inputQnt.placeholder = 'Digite a quantidade da Libra';

            break;

        default:
            inputValor.placeholder = 'Digite o valor';
            inputQnt.placeholder = 'Digite a quantidade';

    }
}