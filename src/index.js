import '../style/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

persist(alt, storage, 'root');

ReactDOM.render(<App />, document.getElementById('root'));
