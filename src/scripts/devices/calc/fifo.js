function fifo(stopped, traverse) {
  const firstColumn = [stopped, ...traverse];
  firstColumn.pop();
  const secondColumn = [...traverse];

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


export { fifo };