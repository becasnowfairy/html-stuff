const numeroInput = document.getElementById('numero');
const btnInterativo = document.getElementById('btn-interativo');
const btnRecursivo = document.getElementById('btn-recursivo');
const resultadoDiv = document.getElementById('resultado');

function calcularInterativo(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}


function calcularRecursivo(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularRecursivo(numero - 1);
    }
}

btnInterativo.addEventListener('click', () => {
    const numero = parseInt(numeroInput.value);
    const resultado = calcularInterativo(numero);
    resultadoDiv.textContent = `Resultado: ${resultado}`;
});

btnRecursivo.addEventListener('click', () => {
    const numero = parseInt(numeroInput.value);
    const resultado = calcularRecursivo(numero);
    resultadoDiv.textContent = `Resultado: ${resultado}`;
});

