import React from 'react';
import ReactDOM from 'react-dom';
import EmailClient from './components/EmailClient';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<EmailClient />, document.getElementById('root'));
registerServiceWorker();
