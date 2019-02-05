import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './components/root';

const nodes = (
    <BrowserRouter>
        <Root />
    </BrowserRouter>
);

ReactDOM.render(nodes, document.getElementById('root'));
