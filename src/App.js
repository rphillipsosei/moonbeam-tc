import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import ProdsAndPartners from './pages/ProdsAndPartners/ProdsAndPartners';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Navbar from './Components/Navbar/Navbar';
import Careers from './pages/Careers/Careers'
import Shop from './pages/Shop/Shop'
import About from './pages/About/About';
import Apply from './pages/Apply/Apply';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/products-and-partnerships" exact>
          <ProdsAndPartners/>
        </Route>
        <Route path="/services" exact>
          <Services/>
        </Route>
        <Route path="/shop" exact>
          <Shop/>
        </Route>
        <Route path="/contact-us" exact>
          <Contact/>
        </Route>
         <Route path="/careers" exact>
          <Careers/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/apply" exact>
          <Apply/>
        </Route>
      </Switch>
     
    </main>
   </Router>
  );
}

export default App;
