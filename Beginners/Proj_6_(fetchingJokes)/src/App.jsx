import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [joke, setJoke] = useState("Loading")

  const newJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then((res)=> res.json())
    .then((data)=> 
      setJoke(data.value)
    )
  }

  useEffect(()=>{
    newJoke()
  },[])
  
  return (
    <>

   <div className=' text-2xl my-8 text-center'>

    <div className='max-w-xl mx-auto flex flex-col gap-8 justify-center items-center  px-5'>

      <h1 className='text-4xl'>Jokes API</h1>
      <button onClick={() => newJoke()} className='bg-blue-600 px-4 py-2 rounded-sm text-white'>Get Another Joke</button>
      <h2>{joke}</h2>
      
    </div>
    
   </div>
      
    </>

  )
}

export default App
