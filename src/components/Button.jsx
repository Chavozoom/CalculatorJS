import React, {useState, useEffect} from 'react';



const App = (props) => {

  return (
    <div >
         <td><input type="button" value={props.number} onclick="dis('1')" ></input></td>
    </div>
  );
}

export default App;