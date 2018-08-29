import React, { Component } from 'react';
import './App.css';

import Title from './components/title';
import Input from './components/input';
import Weather from './components/weather';

const API_KEY = '47c4ce54b774d3697a6be484e51ba143';

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
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity},${userCountry}&appid=${API_KEY}&units=metric&lang=pl`);
    const data = await api_call.json();
    if (userCity && userCountry) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Proszę wprowadzić nazwę miasta i kraju.',
      });
    };
  };

  render () {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-5 title-container'>
                  <Title />
                </div>
                <div className='col-sm-7 form-container'>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
