import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Process } from './pages/Process';
import { Devices } from './pages/Devices';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/processos" component={Process} />
      <Route path="/dispositivos" component={Devices} />

      <Route path="*">
        <h1>Nada por aqui...</h1>
      </Route>
    </Switch>
  )
}