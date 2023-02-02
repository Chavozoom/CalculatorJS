import React from 'react';

const Button = (props) => {

  return (
    <div >
         <td><input className='num' type="button" value={props.number}  onClick={() => {props.addNumber(props.number)}} ></input></td>
    </div>
  );
}

export default Button;