import React from "react";

import Header from "./Components/Header/Header";
import KeyPad from "./Components/KeyPad/KeyPad";


import "./App.css";


function App() {
  
  return (
    <div
      className="app">
     
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div
            className="app_calculator_navbar_toggle"
          
          >
            <div
              className="app_calculator_navbar_toggle_circle" 
             
            />
          </div>
      
        </div>

        <Header />
        <KeyPad />
      </div>
    </div>
  );
}

export default App;
