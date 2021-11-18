export function rodizio(cpuValues = [], clock = 1) {
  let sum = 0;

  let newCpuValues = cpuValues.map((value, index) => {
    return { originalIndex: index, value };
  })

  let countNulls = 0;
  let countLoops = 0;

  const newArray = [];

  while (countNulls < cpuValues.length || countLoops < cpuValues.length) {
    for (let i = 0; i < newCpuValues.length; i++) {
      if (newCpuValues[i].value || newCpuValues[i].value === 0) {
        const elementValue = newCpuValues[i].value;

        if ((elementValue - clock) < 0) {
          const positiveValue = (elementValue - clock) + clock;
          sum += positiveValue;
          newArray.push({ index: newCpuValues[i].originalIndex, value: sum });
          newCpuValues[i].value = null;
          countNulls++;
        } else {
          sum += clock;
          if ((elementValue - clock) === 0) {
            newCpuValues[i].value = null;
            countNulls++;
            newArray.push({ index: newCpuValues[i].originalIndex, value: sum });
          } else {
            newCpuValues[i].value -= clock;
          }
        }
      } else {
        countLoops++;
      }
    }
  }

  newArray.sort((a, b) => a.index > b.index ? 1 : -1);

  const finalValues = newArray.map((e) => {
    return e.value - e.index
  })

  const totalSum = finalValues.reduce((accumulator, e) => e + accumulator, 0);

  const result = totalSum / cpuValues.length;

  return result.toFixed(2);
}

// console.log(rodizio([4, 8, 9]))