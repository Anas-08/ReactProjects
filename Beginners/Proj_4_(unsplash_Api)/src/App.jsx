import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [search, setSearch] = useState()
  const [result, setResult] = useState([])

  // 8Ob0UTlQYKXtFU-9eOSPrBRFFrLSYBIy13819lRfXas

  const fetchData = () =>{
    fetch(`https://api.unsplash.com/search/photos?client_id=8Ob0UTlQYKXtFU-9eOSPrBRFFrLSYBIy13819lRfXas&query=${search}&orientation=squarish`)
    .then(res=> res.json())
    .then((data)=>{
      // console.log(data.results)
      setResult(data.results)
    })

  }
  return (
   <div className="app">
      <div className="search">
        <span>Search </span>
        <input className='input' type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />
        <button onClick={()=> fetchData()}>Send</button>
      </div>

      <div className='gallery'>
        {
          result.map((item)=>{
            return <img className='item' key={item.id} src={item.urls.regular} alt={item.alt_description} />

          })
        }
      </div>
   </div>
  )
}

export default App
