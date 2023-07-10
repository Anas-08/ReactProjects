
import { useState } from 'react'
import './App.css'

function App() {
  // console.log("hiii")

const [weight,setWeight] = useState(0)
const [height,setHeight] = useState(0)

const [bmi,setBmi] = useState('')
const [message,setMessage] = useState('')


const calBmi = (e) => {
  e.preventDefault()

  if(weight === 0 || height === 0 ){
    alert("please enter a valid weight and height")
  }

  else{
    let bmi = (weight/(height*height)*703)
    setBmi(bmi.toFixed())
  }


  if(bmi < 25){
    setMessage('you are underweight')
  }
  else if(bmi >= 25 && bmi <= 30){
    setMessage('you are healthy')
  }
  else{
    setMessage('you are overweight')
  }

}

const reload = () => {
  window.location.reload()

}


  return (
    <>
      <div className="app">
      <div className="container">
        <h2 className='center'>BMI Calculator</h2>

        <form action="" onSubmit={calBmi}>
          <div>
            <label htmlFor="weight">Weight (lbs)</label>
            <input type="text" placeholder='Enter Weight' value={weight} onChange={(e)=> setWeight(e.target.value)} />
          </div>
          <div>
            <label htmlFor="height">Height (in)</label>
            <input type="text" placeholder='Enter Height' value={height} 
            onChange={(e)=> setHeight(e.target.value)} />
          </div>

          <div>
            <button className='btn' type='submit' >Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit' >Reload</button>
          </div>

          <div className="center">
            <h3>Your BMI is :{bmi}</h3>
            <p>{message}</p>
          </div>


        </form>
        
      </div>
      </div>
    </>
  )
}

export default App
