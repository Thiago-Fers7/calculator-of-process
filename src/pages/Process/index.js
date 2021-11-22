import { useState } from 'react';
import { Container, Results } from './styles';
import { FormContainer, TextArea } from '../../styles/formStyle';

import { mp, mtr, pcpa, rodizio } from '../../scripts/process';

function Process() {
  const [res, setRes] = useState({});
  const [isRes, isSetRes] = useState(false);

  function handleShowResults(results) {
    setRes(results);
    isSetRes(true);
  }

  const [value, setValue] = useState('');
  const [clock, setClock] = useState(1);

  function handleChangeTextArea(e) {
    let { value } = e.target;
    value = value.replace(/\n/g, ' ');
    setValue(value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    let [first, ...rest] = value.split(' ')
    let arrayValue = first.split('\t')
    arrayValue = [...arrayValue, ...rest]
    arrayValue = arrayValue.filter(e => {
      if (!e) return false

      if (!isNaN(+e)) {
        return true;
      }

      return false
    }).map(e => {

      return +e
    });

    const valueToSend = arrayValue.some(el => !isNaN(el)) ? arrayValue : [];

    console.log(valueToSend);

    const results = {
      mp: mp([...valueToSend]).replace('.', ','),
      mtr: mtr([...valueToSend]).replace('.', ','),
      pcpa: pcpa([...valueToSend]).replace('.', ','),
      rodizio: rodizio([...valueToSend], clock || 1).replace('.', ','),
    };

    handleShowResults(results);
  }

  return (
    <Container>
      <header>
        <h1>Processos</h1>
        <h3>PCPA/FIFO - MP - MTR - RODÍZIO</h3>
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
        </FormContainer>

        {isRes && (
          <Results>
            <h3>Resultados</h3>

            <div>
              <p>
                <span>PCPA/FIFO = </span>
                <span><span>{res.pcpa}</span>ms</span>
              </p>

              <p>
                <span>MP = </span>
                <span><span>{res.mp}</span>ms</span>
              </p>

              <p>
                <span>MTR = </span>
                <span><span>{res.mtr}</span>ms</span>
              </p>

              <p>
                <span>RODÍZIO = </span>
                <span><span>{res.rodizio}</span>ms</span>
              </p>
            </div>
          </Results>
        )}
      </main>
    </Container>
  );
}

export { Process };
