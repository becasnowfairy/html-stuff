function calculate() {
  const numEvaluations = parseInt(
    document.getElementById("numEvaluations").value
  );
  const evaluations = [];

  for (let i = 0; i < numEvaluations; i++) {
    const evaluation = parseFloat(prompt(`Avaliação ${i + 1}: `));
    evaluations.push(evaluation);
  }

  // Calculate média (average)
  let media = 0;
  for (const evaluation of evaluations) {
    media += evaluation;
  }
  media /= numEvaluations;

  // Find mínima and máxima avaliações
  let minAvaliacao = evaluations[0];
  let maxAvaliacao = evaluations[0];
  for (const evaluation of evaluations) {
    if (evaluation < minAvaliacao) {
      minAvaliacao = evaluation;
    }
    if (evaluation > maxAvaliacao) {
      maxAvaliacao = evaluation;
    }
  }

  // Count total de formandos em situação de aprovação (avaliação maior ou igual a 10)
  let approved = 0;
  for (const evaluation of evaluations) {
    if (evaluation >= 10) {
      approved++;
    }
  }

  // Find as três melhores avaliações
  const topEvaluations = evaluations
    .slice()
    .sort((a, b) => b - a)
    .slice(0, 3);

  // Calculate desvio padrão (standard deviation)
  let sum = 0;
  for (const evaluation of evaluations) {
    sum += Math.pow(evaluation - media, 2);
  }
  const desvioPadrao = Math.sqrt(sum / numEvaluations);

  // Display results
  const resultHTML = `
      <p>Média: ${media.toFixed(2)}</p>
      <p>Mínima avaliação: ${minAvaliacao}</p>
      <p>Máxima avaliação: ${maxAvaliacao}</p>
      <p>Total de formandos em situação de aprovação: ${approved}</p>
      <p>As três melhores avaliações: ${topEvaluations.join(", ")}</p>
    `;
  document.getElementById("result").innerHTML = resultHTML;
}
