import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./components/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Profile } from './components/Profile';
import { EditData } from './components/EditData';
import { Clothing } from './components/Clothing';
import { Provider } from 'react-redux';
import { store } from './components/store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Edit' element={<EditData />} />
        <Route path='/Clothing' element={<Clothing />} />

      </Routes>
      </ Provider >
    </BrowserRouter>

  </React.StrictMode>
);


reportWebVitals();
