import React, {useState} from 'react';
import Number from "./Numbers";
import Operator from "./Operators"

var numbers = (''+Array(10)).split(',').map(function(){return this[0]++;}, [0]).reverse();
const operators = ["*", "/", "-", "+", "^"];

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
  <table className='container'>
    <tr>
            <td colspan="3"><input type="text" value={showResult ? result : formula.join("")}/></td>
            <button className='clear' type="button" value="C" onClick={() => clear()} >Clear</button>
    </tr>
    <div className='numbers'>
        {numbers.map((number, i) =>
        <Number 
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
    <button type="button" value="=" onClick={() => calc(formula)} >=</button>
  </table>
  );
}

export default Calculator;