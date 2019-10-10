import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/pulse/bootstrap.min.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
