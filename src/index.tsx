import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Hello } from './components/Hello';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React, Redux" />,
    document.getElementById("app")
);