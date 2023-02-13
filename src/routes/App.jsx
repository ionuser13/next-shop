import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import NewPassword from '@templates/NewPassword';
import EmailSent from '@templates/EmailSent';
import Home from '@templates/Home';
import NotFound from '@templates/NotFound';
import Login from '@templates/Login';
import Checkout from '@templates/Checkout';
import MyAccountMobile from '@templates/MyAccountMobile';
import Orders from '@templates/Orders';
import PasswordRecovery from '@templates/PasswordRecovery';
import CreateAccount from '@templates/CreateAccount';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/password-recovery" element={<PasswordRecovery />} />
            <Route exact path="/email-sent" element={<EmailSent />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/account" element={<MyAccountMobile />} />
            <Route exact path="/register" element={<CreateAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
