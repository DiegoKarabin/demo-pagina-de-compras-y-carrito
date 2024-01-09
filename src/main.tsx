import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'src/store.ts';
import App from 'src/App.tsx';
import 'src/styles/index.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
