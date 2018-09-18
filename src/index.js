import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
/* purgecss start ignore */
import 'tailwindcss/preflight.css';
/* purgecss end ignore */
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

ReactDOM.render(<App />, document.getElementById('root'));
