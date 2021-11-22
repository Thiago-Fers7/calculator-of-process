function scan(stopped, traverse) {
  const valuesLessThanStopped = [];
  const valuesGreaterThanStopped = [];

  traverse.forEach((trav, index) => {
    if (trav > stopped) {
      valuesLessThanStopped.push(trav);
      return;
    }

    valuesGreaterThanStopped.push(trav);
  })

  valuesLessThanStopped.sort((a, b) => a > b ? 1 : -1)
  valuesGreaterThanStopped.sort((a, b) => a < b ? 1 : -1)

  const secondColumn = [...valuesLessThanStopped, ...valuesGreaterThanStopped]

  valuesGreaterThanStopped.pop();
  const firstColumn = [stopped, ...valuesLessThanStopped, ...valuesGreaterThanStopped];

  const subtractedColumn = [];

  for (let i = 0; i < firstColumn.length; i++) {
    const elementFC = firstColumn[i];
    const elementSC = secondColumn[i];

    const subtracted = elementFC - elementSC;
    const finalSubtracted = subtracted < 0 ? (subtracted * (-1)) : subtracted;

    subtractedColumn.push(finalSubtracted);
  }

  const sum = subtractedColumn.reduce((accumulator, value) => accumulator + value, 0);

  const result = sum / subtractedColumn.length;

  return result.toFixed(2);
}

export { scan };