
import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('')
  const calculateResult = () => {

    try{
      const operators = ['+','-','*','/','%']
      let operator = null;

      for(let i = 0; i < input.length; i++){
        if(operators.includes(input[i])){
          operator = input[i];
          break;

        }
      }
      if(!operator){
        setInput(parseFloat(input).toString())
        return;

      }
      
      const [operand1, operand2] = input.split(operator).map(parseFloat)
      let result;

      switch(operator){
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = operand1 / operand2;
          break;
        case '%':
          result = operand1 % operand2;
          break;
        default :
          result = 'Invalid Operator'
          break

      }

      setInput(result.toString())

    }catch(error){
      setInput('Error')

    }
    
  }

  const handleButtonClick = (value) => {
    // console.log(value)
    if(value === 'C'){
      setInput('')
    }else if(value === '<'){
      setInput(input.slice(0,-1))
    }else if(value === '='){
      // calculateResult(input)
 
      try{
        setInput(eval(input).toString())
      }catch{
        setInput('Error')
      }
    }
    else{
      setInput((prevValue)=> prevValue + value )
    }
  }


  return (
   <>
      <div className="container">
          <div className="calc">
            <div className='text-content'>
              <h1 className='calc-input'>
               <span> {input}</span>
              </h1>

              <div className='calc-btn'>
                  <div className='b-One'>
                    <button onClick={()=> handleButtonClick('C')}>C</button>
                    <button onClick={()=> handleButtonClick('<')}>&lt;</button>
                    <button onClick={()=> handleButtonClick('%')}>%</button>
                    <button onClick={()=> handleButtonClick('%')}>/</button>
                  </div>
                  <div className='b-Two'>
                    <button onClick={()=> handleButtonClick('7')}>7</button>
                    <button onClick={()=> handleButtonClick('8')}>8</button>
                    <button onClick={()=> handleButtonClick('9')}>9</button>
                    <button onClick={()=> handleButtonClick('*')}>*</button>
                  </div>
                  <div className='b-Three'>
                    <button onClick={()=> handleButtonClick('4')}>4</button>
                    <button onClick={()=> handleButtonClick('5')}>5</button>
                    <button onClick={()=> handleButtonClick('6')}>6</button>
                    <button onClick={()=> handleButtonClick('-')}>-</button>
                  </div>
                  <div className='b-Four'>
                    <button onClick={()=> handleButtonClick('1')}>1</button>
                    <button onClick={()=> handleButtonClick('2')}>2</button>
                    <button onClick={()=> handleButtonClick('3')}>3</button>
                    <button onClick={()=> handleButtonClick('+')}>+</button>
                  </div>
                  <div className='b-Five'>
                    <button onClick={()=> handleButtonClick('0')}>0</button>
                    <button onClick={()=> handleButtonClick('00')}>00</button>
                    <button onClick={()=> handleButtonClick('.')}>.</button>
                    <button onClick={()=> handleButtonClick('=')}>=</button>
                  </div>
              </div>

            </div>
          </div>
      </div>
   </>
  )
}

export default App
