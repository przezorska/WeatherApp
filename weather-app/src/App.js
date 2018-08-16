import React, { Component } from 'react';
import './App.css';

import Title from './components/title';
import Input from './components/input';
import Weather from './components/weather';

const API_KEY = '47c4ce54b774d3697a6be484e51ba143';

class App extends Component {
  render () {
    return (
      <div>
        <Title />
        <Input />
        <Weather />
      </div>
    );
  }
};

export default App;
