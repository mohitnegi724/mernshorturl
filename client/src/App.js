import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import ShortURLForm from './components/ShortURLForm';
import Redirect from './components/Redirect';



function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={ShortURLForm}/>
          <Route path="/:shortId" component={Redirect}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
