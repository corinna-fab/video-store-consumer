import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

import Navbar from "./components/Navbar";
import Library from "./components/Library";
import Search from "./components/Search";
import Home from "./components/Home";
import Customers from "./components/Customers";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const LIBRARY_URL = "http://localhost:3000/library"
const CUSTOMERS_URL = "http://localhost:3000/customers"


const App = () => {

  const [library, setLibrary] = useState();
  const [customers, setCustomers] = useState();
  const [moviePick, setMoviePick] = useState();

  useEffect(() => {
    axios.get(LIBRARY_URL)
      .then((response) => {
        const apiLibrary = response.data;
        setLibrary(apiLibrary);
      })
      .catch((error) => {
        // Error Handling, huh?
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get(CUSTOMERS_URL)
      .then((response) => {
        const apiCustomers = response.data;
        setCustomers(apiCustomers);
      })
      .catch((error) => {
        // Error Handling, huh?
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <div> 
        <header>
          <Navbar moviePick={moviePick} />
        </header>

        <Switch>
          <Route path="/library">
            <Library library={library} onClick={moviePick}/>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/customers">
            <Customers customers={customers} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
