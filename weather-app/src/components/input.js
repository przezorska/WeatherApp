import React from 'react';

const Input = props => (
  <form onSubmit={props.getWeather}>
    <input type='text' name='city' placeholder='City...' />
    <input type='text' name='country' placeholder='Country...'/>
    <button>Check weather</button>
  </form>
);

export default Input;
