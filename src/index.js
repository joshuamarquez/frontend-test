import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import emailApp from './reducers'
import { getNewEmail } from './actions';
import App from './components/App'

let store = createStore(
  emailApp,
  applyMiddleware(thunkMiddleware),
);

store.dispatch(getNewEmail());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


