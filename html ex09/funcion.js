const inputNumero = document.getElementById("numero");
const btnVerificar = document.getElementById("VerificarPrimo");
const divResultado = document.getElementById("resultado");

btnVerificar.addEventListener("click", (e) => {
  e.preventDefault();

  const numero = parseInt(inputNumero.value);

  if (isNaN(numero) || numero <= 0) {
    divResultado.innerHTML = "Insira um número válido!";
    return;
  }

  const isPrimo = verificarSeEPrimo(numero);

  const divisores = getDivisores(numero);

  divResultado.innerHTML = `O número ${numero} ${
    isPrimo ? "é" : "não é"
  } primo. Seus divisores são: ${divisores.join(", ")}.`;
});

function verificarSeEPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i * i <= numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

function getDivisores(numero) {
  const divisores = [];
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) divisores.push(i);
  }
  return divisores;
}
