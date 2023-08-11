import { useState } from 'react'
import Button from '../Button/Button'
import styles from './ContactForm.module.css'

import { BiMessageDetail
} from "react-icons/Bi"
import { IoMdCall
} from "react-icons/Io"
import { MdOutlineMail
} from "react-icons/Md"


const ContactForm = () => {

    
    const [name, setName] = useState("Anas")
    const [email, setEmail] = useState("Demo@gmail.com")
    const [text, setText] = useState("Hello Hi, Bye")

    const formSubmit = (event)=>{
        event.preventDefault()
        console.log("Haan Meri Jaan")
        // alert("Haan Meri Jaan")
    
           
            // name = event.target[0].value
            // email = event.target[1].value
            // text = event.target[2].value
        
            setName(event.target[0].value)
            setEmail(event.target[1].value)
            setText(event.target[2].value)
    
            console.log(event.target[0].value)
            console.log(event.target[1].value)
            console.log(event.target[2].value)
    }

  return (
    <section className={`${styles.container}`}>

    <div className={styles.contact_content}>

    <div className={styles.contact_form}> 
     <div className={styles.top_btn}>
         <Button text="Via Support Chat" 
         icon={<BiMessageDetail/>}/>

         <Button text="Via Call" 
         icon={<IoMdCall/>}/>

     </div>  

         <Button 
         isOutline={true}
         text="Via Email Form" 
         icon={<MdOutlineMail/>}/>         

         {/* form */}
         <form onSubmit={formSubmit} action="">
             <div className={styles.from_control}>
                 <label htmlFor="name">Name</label>
                 <input type="text" name='name' setName={()=> name}/>

             </div>

             <div className={styles.from_control}>
                 <label htmlFor="email">Email</label>
                 <input type="email" name='email'/>
             </div>

             <div className={styles.from_control}>
                 <label htmlFor="text">Text</label>
                 <textarea name="text" id="text" cols="30" rows="8"></textarea>

             </div>
             
             <div style={{
               display:"flex",
               justifyContent:"end",
               }}>
             <Button text="SUBMIT"/>     
             </div>

             <div>
                 {/* {
                     `${name} + " " + ${email} + " " + ${text}`
                 } */}

                 { name + "  " + email + "  " + text}
             </div>
             
         </form>
         
     </div>


     <div className={styles.contact_image}>
       <img src="../public/images/hero_image.png" alt="Contact" />
     </div>
     
    </div>

 </section>
  )
}

export default ContactForm
