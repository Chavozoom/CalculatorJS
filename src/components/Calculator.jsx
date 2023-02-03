import React, {useState} from 'react';
import Number from "./Numbers";
import Operator from "./Operators"

var numbers = (''+Array(10)).split(',').map(function(){return this[0]++;}, [0]).reverse();
const operators = ["*", "/", "-", "+"];

const Calculator = () => {
    const [formula, setFormula] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(0);

    const addNumber = (number) =>{
    setShowResult(false);
    setFormula((prevItems) => {
        return [...prevItems, number];
      });
    }

    const calc = (formula) =>{
      setResult(eval(formula.join("")));
      setShowResult(true);
      setFormula([]);
    }

    const clear = () =>{
      setShowResult(false);
      setFormula([]);
    }

  return (
  <div className='container'>
    <div className='result'>
            <input type="text" value={showResult ? result : formula.join("")}/>
            <button className='clear' type="button" value="C" onClick={() => clear()} >C</button>
    </div>
    <div className='numbers'>
        {numbers.map((number, i) =>
        <Number 
        index = {i}
        key = {i}
        number =  {number}
        addNumber = {addNumber}
        />
        )}
      </div>
        {operators.map((operator, i) =>
        <Operator
        key = {i} 
        addNumber = {addNumber}
       operator = {operator}
       formula = {formula}
        />
        )}
    <button className='lastOne' type="button" value="=" onClick={() => calc(formula)} >=</button>
  </div>
  );
}

export default Calculator;