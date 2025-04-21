let primeiroNumero = "";
let operadorAtual = "";
let segundoNumero = "";
let List = document.getElementById('List')
const display = document.getElementById("Show");

function numero(num) {
    primeiroNumero += num;
    display.value = primeiroNumero;
}

function operador(op) {
    operadorAtual = op;
    segundoNumero = primeiroNumero;
    primeiroNumero = "";
}



function calcular() {
    let resultado = "";
    const n1 = parseFloat(segundoNumero);
    const n2 = parseFloat(primeiroNumero);

    if (operadorAtual === "+") {
        resultado = n1 + n2;
        
    } else if (operadorAtual === "-") {
        resultado = n1 - n2;
    } else if (operadorAtual === "*") {
        resultado = n1 * n2;
    } else if (operadorAtual === "/") {
        if (n2 === 0) {
            display.value = "Erro: Divisão por zero!";
            return;
        }
        resultado = n1 / n2;}

        let Historic = document.createElement('li');
        Historic.setAttribute('id', 'ListaItem');
        List.appendChild(Historic)
        let calculo = `${segundoNumero} ${operadorAtual} ${primeiroNumero} = ${resultado}`;
        Historic.textContent = calculo;
        display.value = resultado

    }

function limpar() {
    primeiroNumero = "";
    operadorAtual = "";
    segundoNumero = "";
    display.value = "";
}

let ToggleButton = document.getElementById('Toggle')
let rodapeVisual = document.getElementById('HidShow')
let rodapeNow = false
let CalculatorVisual = document.getElementById('Calculator')
let CalculatorNow = true

function ToggleTwo() {
    if (rodapeNow) {

        rodapeVisual.classList.add('hidden');
        ToggleButton.textContent = 'Mostrar Historico'
        rodapeNow = false


        CalculatorVisual.classList.remove('hidden')
        CalculatorNow = true

    } else {

        rodapeVisual.classList.remove('hidden');
        ToggleButton.textContent = 'Esconder Historico'
        rodapeNow = true

        CalculatorVisual.classList.add('hidden')
        CalculatorNow = false

    }
}