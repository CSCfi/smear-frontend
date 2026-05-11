import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
