import React from 'react';

const Input = props => (
  <form onSubmit={props.getWeather}>
    <input type='text' name='city' placeholder='Miasto...' />
    <input type='text' name='country' placeholder='Kraj...'/>
    <button>Spawdź pogodę</button>
  </form>
);

export default Input;
