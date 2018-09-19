import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Links from './components/Links';

class App extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <Navbar />
        <Heading />
        <Links />
      </div>
    );
  }
}

export default App;
