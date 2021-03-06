import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";

import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Navbar from "./Components/Navbar.js";
import Careers from "./pages/Careers/Careers";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Apply from "./pages/Careers/Apply.js";
import Footer from "./Components/Footer.js";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/careers/apply" component={Apply} />
          <Route path="/careers" component={Careers} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
