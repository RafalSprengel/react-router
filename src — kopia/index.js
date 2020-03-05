import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { ThemeProvider } from '@material-ui/core/styles'
import App from './components/App';

import theme from './components/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    , document.getElementById('root'));

