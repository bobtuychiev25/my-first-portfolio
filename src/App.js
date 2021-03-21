import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Navvv from "./Pages/Navbar";
import { BrowserRouter, Switch,  Route, Link } from "react-router-dom";

function App() {

    return (

    <BrowserRouter>
            <Navvv/>
               <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/education">
                      <Education />
                  </Route>
                  <Route path="/contact">
                      <Contact />
                  </Route>
              </Switch>
      </BrowserRouter>
        
        
      );

}export default App;
