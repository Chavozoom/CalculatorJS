import React from 'react';

const operators = ["*", "/", "-", "+", "^"];

const Button = (props) => {

  const formula = props.formula;

  const isOperatorBefore = () =>{
    if(!operators.includes(formula[formula.length - 1]) && formula.length !== 0){
      props.addNumber(props.operator)}
    } 

  return (
    <div >
         <td><input className='button' type="button" value={props.operator}  onClick={() => isOperatorBefore() } ></input></td>
    </div>
  );
}

export default Button;