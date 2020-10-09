import React from 'react';
import {BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Login from './components/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './css/bootstrap/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">      
        <Nav />
        <Switch>          
          <Route path='/' component={Login} />          
        </Switch>
        <Footer />
      </div>      
    </Router>
    
  );
}

export default App;
