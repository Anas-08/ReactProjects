
import { useState } from 'react'
import './App.css'

function App() {

  // state
  const [horizontal, setHorizontal] = useState(10)
  const [vertical, setVertical] = useState(10)
  const [blur, setBlur] = useState(10)
  const [color, setColor] = useState('gray')
  
  return (
   <>
    <div className="app">

    <div className="controls">
      <div className="range-field">
        <label>Horizontal Length</label>
        <input type="range" min="-200" max="200" value={horizontal} onChange={(e)=> setHorizontal(e.target.value)}/>
        <span>{horizontal}</span>
      </div>

      <div className="range-field">
        <label>Vertical Length</label>
        <input type="range" min="-200" max="200" value={vertical} onChange={(e) => setVertical(e.target.value)} />
        <span>{vertical}</span>
      </div>

      <div className="range-field">
        <label>Blur</label>
        <input type="range" min="0" max="200" value={blur} onChange={(e)=> setBlur(e.target.value)}/>
        <span>{blur}</span>
        <br />
      </div>

      <div className="range-field">
        <label>Color </label>
        <br />
        <input type="color" value={color} onChange={(e)=> setColor(e.target.value)}/>
      </div>
    </div>
    
    <div className="output">
      <div className="box" style={{boxShadow:`${horizontal}px ${vertical}px ${blur}px ${color}`}}>
      <p>Box-Shadow: {horizontal}px {vertical}px {blur}px {color}</p>
      </div>
    </div>

  </div>
   </>
  )
}

export default App
