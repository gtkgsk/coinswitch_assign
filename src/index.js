import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/index';





ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
    <App />
  </Provider>
  </HashRouter>,
  document.getElementById('root')
);