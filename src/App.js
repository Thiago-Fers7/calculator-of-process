import { useState } from 'react';
import { Form } from './components/Form';
import { Container, Results } from './styles';

function App() {
  const [res, setRes] = useState({});
  const [isRes, isSetRes] = useState(false);

  function handleShowResults(results) {
    setRes(results);
    isSetRes(true);
  }

  return (
    <Container>
      <header>
        <h1>Calculadora de Processos</h1>
        <h3>PCPA/FIFO - MP - MTR - RODÍZIO</h3>
      </header>

      <main>
        <Form handleShowResults={handleShowResults} />

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

export { App };
