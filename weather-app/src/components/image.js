import React from 'react';
import brokenClouds from './../images/broken_clouds.png';
import fewClouds from './../images/few_clouds.png';
import mist from './../images/mist.png';
import scatteredClouds from './../images/scattered_clouds.png';
import showerRain from './../images/shower_rain.png';
import snow from './../images/snow.png';
import rain from './../images/rain.png';
import thunderstorm from './../images/thunderstorm.png';
import clearSky from './../images/clear_sky.png';

const dupa = (props) => {
  switch(props) {
    case 'broken clouds': 
    return <img src={brokenClouds} alt="broken cloud"/>
    case 'clear sky':
    return <img src={clearSky} alt="clear sky"/>;
    case 'few clouds':
    return <img src={fewClouds} alt="few clouds"/>;
    case 'mist':
    return <img src={mist} alt="mist"/>;
    case 'rain':
    return <img src={rain} alt="rain"/>;
    case 'scattered clouds':
    return <img src={scatteredClouds} alt="scattered clouds"/>;
    case 'shower rain':
    return <img src={showerRain} alt="shower rain"/>;
    case 'snow':
    return <img src={snow} alt="snow"/>;
    case 'thunderstorm':
    return <image src={thunderstorm} alt="thunderstorm"/>;
    default: ;
    break;
  };
};

const Image = (props) => (
  <span>
    {dupa(props.description)}
  </span>
);

export default Image;