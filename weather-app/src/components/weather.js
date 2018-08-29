import React from 'react';

const Weather = props => (
  <div className='weather__info'>
    { 
      props.city && props.country && <p className='weather__key'>Lokalizacja: 
      <span>{ props.city }, { props.country }</span>
      </p>
    }
    { 
      props.temperature && <p className='weather__key'>Temperatura: 
      <span>{ props.temperature }</span>
      </p>
    }
    { 
      props.humidity && <p className='weather__key'>Wilgotność: 
      <span>{ props.humidity }</span>
      </p>
    }
    { 
      props.description && <p className='weather__key'>Warunki: 
      <span>{ props.description }</span>
      </p>
    }
    { 
      props.error && <p>{ props.error }</p> 
    }
  </div>
);

export default Weather;
