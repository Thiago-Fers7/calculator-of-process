export function mp(cpuValues = []) {
  let sum = 0;
  let totalSum = 0;

  const sortedCpuValues = cpuValues.sort((a, b) => a > b ? 1 : -1);

  for (let i = 0; i < sortedCpuValues.length; i++) {
    sum += sortedCpuValues[i]
    totalSum += sum;
  }

  const result = totalSum / sortedCpuValues.length;

  return result.toFixed(2);
}