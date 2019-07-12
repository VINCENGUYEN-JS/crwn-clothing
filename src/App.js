import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatPages = ()=>{
  return (
    <h1>HatPages</h1>
  )
}

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={HatPages} />
    </div>
  );
}

export default App;
