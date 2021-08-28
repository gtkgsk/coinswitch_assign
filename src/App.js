import { Route, Switch } from 'react-router-dom';

import Details from './components/Details';
import Customize from './components/Customize';


function App() {
  return (
    <div>
      <Switch>
          <Route path='/details'>
            <Details />
          </Route>
          <Route path='/customize'>
            <Customize />
          </Route>
        </Switch>
    </div>
  );
}

export default App;