import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const getMode = () =>{
    const initialMode = localStorage.getItem("mode")

    if(initialMode == null){
      if(window.matchMedia("(prefers-color-scheme:dark)").matches){
        return true
      }else{
        return true
      }
    }else{
      return JSON.parse(localStorage.getItem("mode"))
    }

  }
  
  const [dark, setDark] = useState(getMode())
  console.log(dark)

  useEffect(()=>{
    localStorage.setItem("mode", JSON.stringify(dark))
  },[dark])

  return (
    <>
   <div className={ dark ? "app dark_mode" : "app"}>
    <div className='nav'>
      <label className="switch">
        <input type="checkbox"
        checked={dark}
        onChange={() => setDark(!dark)}
         />
        <span className="slider round"></span>
      </label>
    </div>

    <div className="content">
      <h3>{dark ? "Dark Mode" : "Light Mode"}</h3>
      <p>Light and Dark Mode Functionality</p>
    </div>

   </div>
    </>
    
  )
}

export default App
