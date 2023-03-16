import React from 'react';
// Antigüa sintaxis (Antes de React v.18)
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

const content = document.getElementById('root');
const root = createRoot(content);

// Render
root.render(<App name='App' />);

// Antigüa sintaxis (Antes de React v.18)
//ReactDOM.render(<App />, document.getElementById('root'));
