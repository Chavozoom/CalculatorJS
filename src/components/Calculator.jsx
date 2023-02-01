import React, {useState, useEffect} from 'react';
import Button from "./Button";

var numbers = (''+Array(10)).split(',').map(function(){return this[0]++;}, [0]).reverse();


const Calculator = () => {

  return (
    <div >
        <table>
        <tr>
            <td colspan="3"><input type="text" id="result"/></td>
            <td><input type="button" value="c" onclick="clr()" /> </td>


        {numbers.map((number, i) =>
        <Button 
        number =  {number}
        />
      )}
        </tr>
        </table>
    </div>
  );
}

export default Calculator;