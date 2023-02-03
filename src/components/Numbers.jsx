import React from 'react';

const Button = (props) => {

var rowClass = "";
  const index = props.index;
  if(index <= 2){
    rowClass = "first";
  } else if(index <= 5){
    rowClass= "second";
  } else if(index <= 8){
    rowClass = "third";
  }
   else{
    rowClass = "lastOne0";
  }

  return (
    <input className={rowClass} type="button" value={props.number}  onClick={() => {props.addNumber(props.number)}} ></input>
    );
}

export default Button;