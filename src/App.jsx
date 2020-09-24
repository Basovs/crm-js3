import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GlobalStyle from "./styles/globalStyles";
import { Ctx } from "./contexts/Ctx";
import CustomerPage from "./pages/CustomerPage";

function App() {
  const [customerList, setCustomerList] = useState(null);

  return (
    <Ctx.Provider value={{ customerList, setCustomerList }}>
      <Switch>
        <Route path="/customer">
          <MainLayout>
            <GlobalStyle />
            <CustomerPage />
          </MainLayout>
        </Route>
        <Route path="/admin">
          <MainLayout>
            <GlobalStyle />
            <AdminPage />
          </MainLayout>
        </Route>
        <Route path="/register">
          <MainLayout>
            <GlobalStyle />
            <RegisterPage />
          </MainLayout>
        </Route>
        <Route path="/login">
          <MainLayout>
            <GlobalStyle />
            <LoginPage />
          </MainLayout>
        </Route>
        <Route path="/">
          <MainLayout>
            <GlobalStyle />
            <HomePage />
          </MainLayout>
        </Route>
      </Switch>
    </Ctx.Provider>
  );
}

export default App;
