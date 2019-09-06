import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Index from "./components/layouts/Index";
import { Provider } from './context';
import './App.css';
function App() {
  return (
    <Provider>
      <Router>
        <>
          <Navbar />
          <div className = "container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </>
      </Router> 
    </Provider>
  );
}

export default App;
