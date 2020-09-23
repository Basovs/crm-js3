import React from "react"
import { Route, Switch } from "react-router-dom"
import MainLayout from "./components/layouts/MainLayout"
import AdminPage from "./pages/AdminPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import GlobalStyle from "./styles/globalStyles"

function App() {
  return (
    <Switch>
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
  )
}

export default App
