import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalDataContextProvider } from './Helpers/Context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <GlobalDataContextProvider>
    <App />
  </GlobalDataContextProvider>,
);
