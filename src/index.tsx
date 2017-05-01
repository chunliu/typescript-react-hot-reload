import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

ReactDOM.render(
    <App />,
    document.getElementById("app")
);