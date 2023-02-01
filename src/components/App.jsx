import React, {useState, useEffect} from 'react';
import Calculator from './Calculator';


const App = () => {
    const [formula, setFormula] = useState([]);

  return (
    <div >
        <Calculator />
    </div>
  );
}

export default App;