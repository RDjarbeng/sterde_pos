import React from 'react';
import {BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Login from './components/Login';
import Nav from './components/Nav';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import SignUp  from './components/SignUp';
import Home  from './components/Home';
import './css/bootstrap/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">      
        <Nav />
        <Switch>          
          <Route path='/' exact component={Login} />          
          <Route path='/login' exact component={Login} />          
          <Route path='/signup' exact component={SignUp} />          
          <Route path='/home' exact component={Home} />          
          <Route path='/'  component={PageNotFound } />          
        </Switch>
        <Footer />
      </div>      
    </Router>
    
  );
}

export default App;
