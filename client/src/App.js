import React from 'react';
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import ShortURLForm from './components/ShortURLForm';
import OpenLink from './components/OpenLink';



function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={ShortURLForm}/>
          <Route exact path="/:shortId" component={OpenLink}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
