import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Main } from "./pages/Main";
import { History } from "./pages/History";
import { Construction } from "./pages/Construction";
import { Models } from "./pages/Models";
import { Characteristics } from "./pages/Characteristics";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/history" component={History} exact />
      <Route path="/construction" component={Construction} exact />
      <Route path="/characteristics" component={Characteristics} exact />
      <Route path="/models" component={Models} exact />

      <Redirect to="/" />
    </Switch>
  );
};
