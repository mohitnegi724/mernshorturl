import React from 'react';
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import ShortURLForm from './components/ShortURLForm';


function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={ShortURLForm}/>
          <Route exact path="/:shortId"/>
        </BrowserRouter>
    </div>
  );
}

export default App;
