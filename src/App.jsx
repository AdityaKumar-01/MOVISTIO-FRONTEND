import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import GenresPage from "./Pages/GenresPage/GenresPage";
import RatingsPage from './Pages/RatingsPage/RatingsPage';
import HistoryPage from './Pages/HistoryPage/HistoryPage';
import AuthForm from './Components/AuthForm/AuthForm.component';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:name" component={MoviesPage} />
        <Route path="/genres/:id/:name" component={GenresPage} />
        <Route path="/auth" component={AuthForm} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/ratings" component={RatingsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
