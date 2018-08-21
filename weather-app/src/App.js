import React, { Component } from 'react';
import './App.css';

import Title from './components/title';
import Input from './components/input';
import Weather from './components/weather';

const API_KEY = 'b6907d289e10d714a6e88b30761fae22';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault();
    const userCity = e.target.elements.city.value;
    const userCountry = e.target.elements.country.value;
    const api_call = await fetch(`https://openweathermap.org/data/2.5/weather?q=${userCity},${userCountry}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: '',
    });
  };

  render () {
    return (
      <div>
        <Title />
        <Input getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  };
};

export default App;
