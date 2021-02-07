import React, { useEffect } from 'react'
import './App.css'
import Homescreen from './screens/HomeScreen/HomeScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import { auth } from './firebase'

function App() {
  const user = null

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        
      } else{ 

      }
    })

    return unsubscribe
  }, [])
  
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
