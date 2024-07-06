import React from "react";
let a = 20;
  let b = 10;
function Calculator(){
    function addition(a,b){
    
        let ans = a+b;
        return <p>{ans}</p>;
    }
    function subtruction(a,b){
      let ans = a-b;
      return <p>{ans}</p>
    }
    function multiplication(a,b){
        let ans = a*b;
        return <p>{ ans }</p>
    }
    function division(a,b){
        let ans = a/b;
        return <p>{ans}</p>
    }
    return (
            <div>
                <p>Addition of {a} and {b} is: {addition(a,b)}</p>
                <p>Subtraction of {a} and {b} is: {subtruction(a,b)}</p>
                <p>Multiplication of {a} and {b} is: {multiplication(a,b)}</p>
                <p>Division of {a} and {b} is: {division(a,b)}</p>
            </div>
    );
}




export default Calculator;