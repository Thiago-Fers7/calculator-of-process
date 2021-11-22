import { useState } from 'react';
import { Container, Results } from './styles';
import { FormContainer, TextArea } from '../../styles/formStyle';

import { cscan, fifo, mtb, scan } from '../../scripts/devices';

function Devices() {
  const [res, setRes] = useState({});
  const [isRes, isSetRes] = useState(false);

  function handleShowResults(results) {
    setRes(results);
    isSetRes(true);
  }

  const [value, setValue] = useState('');
  const [stopped, setStopped] = useState(1);

  function handleChangeTextArea(e) {
    let { value } = e.target;
    value = value.replace(/\n/g, ' ');
    setValue(value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const arrayValue = value.split(' ').filter(e => e !== '').map(e => { return +e });

    const results = {
      cscan: cscan(stopped, [...arrayValue]).replace('.', ','),
      fifo: fifo(stopped, [...arrayValue]).replace('.', ','),
      mtb: mtb(stopped, [...arrayValue]).replace('.', ','),
      scan: scan(stopped || 0, [...arrayValue]).replace('.', ','),
    };

    console.log(arrayValue);

    handleShowResults(results);
  }

  return (
    <Container>
      <header>
        <h1>Dispositivos</h1>
        <h3>FIFO - MTB - SCAN - C-SCAN</h3>
      </header>

      <main>
        <FormContainer>
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

                <p>Parado na posição: </p>
                <input
                  type="number"
                  min="1"
                  value={stopped}
                  onChange={(e) => setStopped(+e.target.value)}
                />
              </TextArea>

              <button type="submit">Calcular</button>
            </fieldset>
          </form>
        </FormContainer>

        {isRes && (
          <Results>
            <h3>Resultados</h3>

            <div>
              <p>
                <span>FIFO = </span>
                <span><span>{res.fifo}</span>ms</span>
              </p>

              <p>
                <span>MTB = </span>
                <span><span>{res.mtb}</span>ms</span>
              </p>

              <p>
                <span>SCAN = </span>
                <span><span>{res.scan}</span>ms</span>
              </p>

              <p>
                <span>C-SCAN = </span>
                <span><span>{res.cscan}</span>ms</span>
              </p>
            </div>
          </Results>
        )}
      </main>
    </Container>
  );
}

export { Devices };
