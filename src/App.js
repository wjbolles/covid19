import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
       <Navbar/>
       <Switch>
          <Route exact path="/" render={props => <Home {...props} />}/> {/* says if url is homepage (/) then just show the home */}

      </Switch>
    
    </div>
  );
}

export default App;
