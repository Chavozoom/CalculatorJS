import React, {useState, useEffect} from 'react';
import Button from "./Button";

var numbers = (''+Array(10)).split(',').map(function(){return this[0]++;}, [0]).reverse();


const Calculator = () => {
    const [formula, setFormula] = useState("");

    const addNumber = (number) =>{
    setFormula((prevItems) => {
        return [...prevItems, number];
      });
    }

  return (
    <div >
        <table>
        <tr>
            <td colspan="3"><input type="text" id="result" value={formula}/></td>
            <td><input type="button" value="c" onclick="clr()" /> </td>


        {numbers.map((number, i) =>
        <Button 
        number =  {number}
        addNumber = {addNumber}
        />
      )}
        </tr>
        </table>
    </div>
  );
}

export default Calculator;