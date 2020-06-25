import React from 'react';
import ReactDOM from 'react-dom';

// Router
import App from './src/routes/App';
import Home from './src/layouts/Home';

// Styles
import './src/styles/main.scss';


ReactDOM.render(<Home />, document.getElementById('app'));
