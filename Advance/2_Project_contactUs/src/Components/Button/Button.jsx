import styles from './Button.module.css'



export default function Button({text, icon, isOutline, ...rest}) {
  return (
    <>
    <div>
        <button {...rest}  className={isOutline ? styles.btn_second : styles.btn_primary}>
          
          {icon}
          {text}
          </button>
    </div>
    </>

  )
}
