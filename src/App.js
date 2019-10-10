import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  render() {
   return(
     <div><h1>Cuaca react</h1></div>
   ) 
  }
}

export default App;
