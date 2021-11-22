export function pcpa(cpuValues = []) {
  let sum = 0;
  let totalSum = 0;

  for (let i = 0; i < cpuValues.length; i++) {
    if (i > 0) {
      sum = (cpuValues[i] ? (cpuValues[i] + sum) : sum);
    } else {
      sum = cpuValues[i]
    }

    totalSum += sum;
  }

  const result = totalSum / cpuValues.length;

  return result.toFixed(2);
}