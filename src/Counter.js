import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = () => {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 className='count'>Счётчик: {count}</h1>
      <button onClick={handleIncrement} className='plus'>+</button>
      <button onClick={handleDecrement} className='minus'>-</button>
    </div>
  );
};

export default Counter;
