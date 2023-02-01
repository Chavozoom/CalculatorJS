import React, {useState, useEffect} from 'react';


const number = Math.random();

const App = () => {
  return (
    <div >
      <h1>{number}</h1>
    </div>
  );
}

export default App;