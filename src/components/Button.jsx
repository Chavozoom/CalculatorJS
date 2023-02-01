import React, {useState, useEffect} from 'react';



const App = (props) => {

  return (
    <div >
         <td><input type="button" value={props.number}  onClick={() => {props.addNumber(props.number)}} ></input></td>
    </div>
  );
}

export default App;