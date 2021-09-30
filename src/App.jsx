import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import GenresPage from './Pages/GenresPage/GenresPage';

const App = () => {
    return (
      <BrowserRouter>
        
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/movies/:name" exact component={MoviesPage} /> */}
          <Route path="/movies/:name" component={MoviesPage} />
          <Route path="/genres/:id/:name" component={GenresPage} />
          {/* <Route path="/test" exact component={LoaderPage} /> */}
        
      </BrowserRouter>
    );
}

export default App
