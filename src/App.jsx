import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import GenresPage from "./Pages/GenresPage/GenresPage";
import LoginForm from './Components/LoginForm/LoginForm.component';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:name" component={MoviesPage} />
        <Route path="/genres/:id/:name" component={GenresPage} />
        <Route path="/auth" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
