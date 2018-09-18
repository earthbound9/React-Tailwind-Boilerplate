import React, { Component } from 'react';

import Heading from './components/Heading';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Heading />
      </div>
    );
  }
}

export default App;
