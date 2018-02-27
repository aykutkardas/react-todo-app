import React from 'react';
import ReactDOM from 'react-dom';

// Stylesheets
import './css/index.css';
import './css/animate.css';

// Components
import Header from './components/header/Header';
import App from './App';
import Footer from './components/footer/Footer';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();
