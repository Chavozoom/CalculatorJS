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

  return (
  <table>
    <tr>
            <td colspan="3"><input type="text" value={showResult ? result : formula.join("")}/></td>
            <td><input type="button" value="C" onclick="clr()" /> </td>
    </tr>
        {numbers.map((number) =>
        <Number 
        number =  {number}
        addNumber = {addNumber}
        />
        )}
        {operators.map((operator) =>
        <Operator 
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