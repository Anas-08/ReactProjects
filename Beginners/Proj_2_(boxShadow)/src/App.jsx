import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [horizontal,setHorizontal] = useState(10)
  const [vertical,setVertical] = useState(10)
  const [blur,setBlur] = useState(10)
  const [color,setColor] = useState('black')

  
  return (
   <>
    {/* <h4 className="brown-text center">Box Shadow Generator</h4> */}
    <div className="app">
      <div className="controls">

        <div>
          <label htmlFor="">Horizontal Length</label>
          <input type="range" value={horizontal} min="-200" max="200" onChange={(e)=> setHorizontal(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Vertical Length</label>
          <input type="range" value={vertical} min="-200" max="200" onChange={(e)=> setVertical(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Blur</label>
          <input type="range" value={blur} min="0" max="200" onChange={(e)=> setBlur(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="">Color </label> <br />
          <input type="color" value={blur} onChange={(e)=> setColor(e.target.value)} />
        </div>

      </div>
      <div className="output">
        <div className="box" style={{boxShadow:`${horizontal}px ${vertical}px ${blur}px ${color}`}}></div>

      </div>
    </div>
   </>
  )
}

export default App
