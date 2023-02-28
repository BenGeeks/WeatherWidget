import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store/index';
import GlobalStyles from './assets/Global.styled';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer position="top-center" transition={Zoom} autoClose={2000} hideProgressBar={false} newestOnTop={true} pauseOnHover={true} theme={'colored'} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
