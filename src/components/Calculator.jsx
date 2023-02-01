import React, {useState} from 'react';
import Button from "./Button";
import Operator from "./Operators"

var numbers = (''+Array(10)).split(',').map(function(){return this[0]++;}, [0]).reverse();
const operators = ["*", "/", "-", "+"];

const Calculator = () => {
    const [formula, setFormula] = useState([]);

    const addNumber = (number) =>{
        
    setFormula((prevItems) => {
        return [...prevItems, number];
      });
    }

  return (
    <div >
        <table>
        <tr>
            {console.log(formula)}
            <td colspan="3"><input type="text" value={formula.join("")}/></td>
            <td><input type="button" value="c" onclick="clr()" /> </td>


        {numbers.map((number, i) =>
        <Button 
        number =  {number}
        addNumber = {addNumber}
        />
    )}
    {operators.map((operator) =>
    <Operator 
    addNumber = {addNumber}
    operator = {operator}
    />
    )}
        </tr>
        </table>

    </div>

  );
}

export default Calculator;