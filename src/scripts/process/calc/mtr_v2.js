export function mtr(CLOCKS = []) {
  const executed = [];

  let sum = 0;

  const initialArray = [];
  initialArray.length = CLOCKS.length;

  const forSorted = [...CLOCKS];
  const [, secondMinus] = forSorted.sort((a, b) => a > b ? 1 : -1);

  let aux = false;

  for (let i = 0; i < initialArray.length; i++) {
    const element = CLOCKS[i];

    sum++;

    if (element === 1) {
      executed.push({ originalIndex: i, executedIn: sum })
    }

    if (
      CLOCKS[CLOCKS.length - 2] === 1
      && CLOCKS[CLOCKS.length - 1] !== secondMinus
      && i === (initialArray.length - 2)
    ) {
      aux = true;
      break;
    }
  }

  const subtractedClockValues = CLOCKS.map((clock, index) => {
    if (aux && CLOCKS.length - 1 === index) {
      return {
        originalIndex: index,
        clock: clock,
      };
    }

    return {
      originalIndex: index,
      clock: clock - 1,
    };
  });

  subtractedClockValues.sort((a, b) => a.clock < b.clock ? 1 : -1).reverse();

  subtractedClockValues.forEach(({ clock, originalIndex }) => {
    if (clock !== 0) {
      sum += clock;
      executed.push({ originalIndex, executedIn: sum });
    }
  });

  executed.sort((a, b) => a.originalIndex > b.originalIndex ? 1 : -1);

  const resCalc = executed.map(({ executedIn, originalIndex }) => {
    return executedIn - originalIndex;
  });

  const calcSum = resCalc.reduce((accumulator, calc) => accumulator + calc, 0)

  const result = calcSum / resCalc.length;

  return result.toFixed(2);
}