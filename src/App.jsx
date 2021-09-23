import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import GenresPage from './Pages/GenresPage/GenresPage';

const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" exact component={MoviesPage} />
          <Route path="/genres/:id/:name" component={GenresPage} />
        </Switch>
      </BrowserRouter>
    );
}

export default App
