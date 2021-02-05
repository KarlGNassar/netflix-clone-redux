import React from 'react'
import './App.css'
import Homescreen from './screens/HomeScreen/HomeScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen/LoginScreen'

function App() {
  const user = null
  
  return (
    <div className="app">

      <Router>
        <Switch>
          {!user ? (
            <LoginScreen />
          ) : (
            <Route exact path='/' >
              <Homescreen />
            </Route>
          )}
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
