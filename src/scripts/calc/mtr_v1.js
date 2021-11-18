export function mtr(cpuValues = [2, 8, 5, 4, 3, 5, 1, 7]) {
  let sum = cpuValues.length;

  const [, secondMinus] = cpuValues.sort((a, b) => a > b ? 1 : -1);

  console.log({ secondMinus })

  const isPenultimateIsOne = cpuValues[cpuValues.length - 2] === 1;
  const last = cpuValues[cpuValues.length - 1] !== secondMinus;

  let subtractedValues = cpuValues.map((value, index, array) => {
    if (!array[index + 2] && last) {
      if (isPenultimateIsOne) {
        return { originalIndex: index, value: value - 1 };
      }
      return { originalIndex: index, value: value };
    }
    return { originalIndex: index, value: value - 1 };
  })

  let totalSum = [];

  const sortedCpuValues = [...subtractedValues].sort((a, b) => a.value < b.value ? 1 : -1);

  sortedCpuValues.reverse();

  sortedCpuValues.forEach(({ value, originalIndex }, i) => {
    if (value === 0) {
      console.log({ sum })
      sum += originalIndex + 1;
      console.log(originalIndex + 1, sum);
      totalSum.push({ originalIndex, value: originalIndex + 1 })
    } else {
      sum += value;
      totalSum.push({ originalIndex, value: sum });
    }
  })

  totalSum.sort((a, b) => a.originalIndex > b.originalIndex ? 1 : -1);
  console.log(totalSum);

  const resCalc = totalSum.map(({ value, originalIndex }, i) => {
    return value - originalIndex;
  });

  const calcSum = resCalc.reduce((accumulator, calc) => accumulator + calc, 0)

  const result = calcSum / resCalc.length;

  return result.toFixed(2);
}