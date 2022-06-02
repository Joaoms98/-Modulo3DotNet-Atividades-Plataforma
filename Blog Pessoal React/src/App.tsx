import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
          </div>
        </Switch>
    </Router>   
  );
}

export default App;
