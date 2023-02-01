import React from 'react';

const Button = (props) => {
  return (
    <div >
         <td><input type="button" value={props.operator}  onClick={() => {props.addNumber(props.operator)}} ></input></td>
    </div>
  );
}

export default Button;