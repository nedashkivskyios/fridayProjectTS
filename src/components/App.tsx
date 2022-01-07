import React from 'react';
import '../App.css';
import {Navigation} from "./c2-mainComponents/m2-Navigation/Navigation";
import {MainRouter} from "./c2-mainComponents/m1-MainRouter/MainRouter";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainRouter />
    </div>
  );
}

export default App;
