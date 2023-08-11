
import Navigation from './Components/Navigation/Navigation.jsx'
import ContactHeader from './Components/ContactHeader/ContactHeader.jsx'
import './App.css'
import ContactForm from './Components/ContactForm/ContactForm.jsx'

function App() {
  return (
  <>

  <div className="container">
    <Navigation/>
   <main className='main_container'>
    <ContactHeader/>
    <ContactForm/>
   </main>
  </div>
  </>
  )
}

export default App
