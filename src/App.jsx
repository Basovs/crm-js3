import React from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CreateUserPage from "./pages/CreateUserPage";

function App() {
  return (
    <Switch>
      <Route path="/create-user">
        <MainLayout>
          <CreateUserPage />
        </MainLayout>
      </Route>
      <Route path="/">
        <MainLayout>
          <HomePage />
        </MainLayout>
      </Route>
    </Switch>
  );
}

export default App;
