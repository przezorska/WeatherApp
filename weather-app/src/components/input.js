import React from 'react';

const Input = props => (
  <form onSubmit={props.getWeather}>
    <input type='text' name='city' placeholder='City...' />
    <button>Check weather</button>
  </form>
);

export default Input;
