import React from 'react';
// import './styles/rsuite-default.css';
import './styles/main.scss'
import { Switch } from 'react-router'
import SignIn from './pages/SignIn';
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return ( 
    <Switch>
      <PublicRoute path="/signin">
        <SignIn/>
      </PublicRoute>
      <PrivateRoute path="/">
        <Home/>
      </PrivateRoute>
    </Switch>
    )
}

export default App;
