import { Route, Switch } from 'react-router-dom';

import Details from './components/Details';
import Customize from './components/Customize';


function App() {
  return (
    <div>
      <Switch>
          <Route path='/' exact>
            <Details />
          </Route>
          <Route path='/customize' exact>
            <Customize />
          </Route>
        </Switch>
    </div>
  );
}

export default App;