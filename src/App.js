import React from 'react';
import { increment, decrement } from './Counter.js';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import './index.css';

export function App() {
    const state = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count: {state} </h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
};