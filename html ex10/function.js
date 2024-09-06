// Função para gerar número real aleatório
function numeroRealAleatorio(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

// Criar array para armazenar temperaturas
let temperaturas = [];

// Gerar temperaturas aleatórias para 10 cidades
for (let i = 0; i < 10; i++) {
  temperaturas.push(numeroRealAleatorio(-5, 8));
}

// Exibir temperaturas
document.getElementById(
  "temperaturas"
).innerHTML = `Temperaturas: ${temperaturas.join(", ")}`;

// i. Calcular média das temperaturas
let soma = 0;
for (let i = 0; i < temperaturas.length; i++) {
  soma += parseFloat(temperaturas[i]);
}
let media = soma / temperaturas.length;
document.getElementById(
  "media"
).innerHTML = `Média das temperaturas: ${media.toFixed(1)}`;

// ii. Calcular amplitude térmica
let max = Math.max(...temperaturas);
let min = Math.min(...temperaturas);
let amplitude = max - min;
document.getElementById(
  "amplitude"
).innerHTML = `Amplitude térmica: ${amplitude.toFixed(1)}`;

// iii. Contar cidades com temperaturas negativas
let cidadesNegativas = 0;
for (let i = 0; i < temperaturas.length; i++) {
  if (temperaturas[i] < 0) {
    cidadesNegativas++;
  }
}
document.getElementById(
  "cidades-negativas"
).innerHTML = `Cidades com temperaturas negativas: ${cidadesNegativas}`;
