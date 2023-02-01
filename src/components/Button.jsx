import React from 'react';



const Button = (props) => {

  return (
    <div >
         <td><input type="button" value={props.number}  onClick={() => {props.addNumber(props.number)}} ></input></td>
    </div>
  );
}

export default Button;