import { Link } from 'react-router-dom';

import { Container, Links } from './styles';

export function Home() {
  return (
    <Container>
      <div>
        <h1>Sistemas Operacionais</h1>

        <Links>
          <Link to="/processos">
            <span>
              Processos <br />
              <ul>
                <li>FIFO</li>
                <li>MP</li>
                <li>MTR</li>
                <li>RIDÍZIO</li>
              </ul>
            </span>
          </Link>
          <Link to="/dispositivos">
            <span>
              Dispositivos <br />
              <ul>
                <li>FIFO</li>
                <li>MTB</li>
                <li>SCAN</li>
                <li>C-SCAN</li>
              </ul>
            </span>
          </Link>
        </Links>
      </div>
    </Container>
  )
}