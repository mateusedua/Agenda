import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { userFound } from './redux/user/userSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));


const result = JSON.parse(localStorage.getItem('user'));

if (result) {
  store.dispatch(userFound(result))
}


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
