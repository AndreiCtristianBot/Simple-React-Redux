import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { App } from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (root) {
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
} else {
    console.log("Nu a mers");
}
