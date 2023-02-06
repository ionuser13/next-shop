import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import NoHeaderLayout from "@containers/NoHeaderLayout";
import NewPassword from "@pages/NewPassword";
import EmailSent from "@pages/EmailSent";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Login from "@pages/Login";
import Checkout from "@pages/Checkout";
import MyAccountMobile from "@pages/MyAccountMobile";
import Orders from "@pages/Orders";
import PasswordRecovery from "@pages/PasswordRecovery";
import CreateAccount from "@pages/CreateAccount";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import "@styles/global.css";

const App = () => {
  const initialState = useInitialState();
    return (
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/password-recovery"
                element={<PasswordRecovery />}
              />
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
}

export default App