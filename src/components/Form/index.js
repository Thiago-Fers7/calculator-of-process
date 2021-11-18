import { useState } from 'react';
import { Container, TextArea } from './styles';

import { mp, mtr, pcpa, rodizio } from '../../scripts'

export function Form({ handleShowResults }) {
  const [value, setValue] = useState('');
  const [clock, setClock] = useState(1);

  function handleChangeTextArea(e) {
    let { value } = e.target;
    value = value.replace(/\n/g, ' ');
    setValue(value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const arrayValue = value.split(' ').filter(e => e !== '').map(e => { return +e });

    console.log(arrayValue);

    const results = {
      mp: mp([...arrayValue]).replace('.', ','),
      mtr: mtr([...arrayValue]).replace('.', ','),
      pcpa: pcpa([...arrayValue]).replace('.', ','),
      rodizio: rodizio([...arrayValue], clock || 1).replace('.', ','),
    };

    console.log(results);

    handleShowResults(results);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Informe os valores</legend>

          <TextArea>
            <p>Os valores devem ser separados por espaço (apenas números inteiros)</p>
            <textarea
              value={value}
              onChange={handleChangeTextArea}
              placeholder="Ex: 1 2 3 4 5..."
            />

            <p>Clock (para rodízio)</p>
            <input
              type="number"
              min="1"
              value={clock}
              onChange={(e) => setClock(+e.target.value)}
            />
          </TextArea>

          <button type="submit">Calcular</button>
        </fieldset>
      </form>
    </Container>
  );
}
