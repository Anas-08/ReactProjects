import styles from './Navigation.module.css'

export default function Navigation() {
  // console.log(styles)
  return (
  <>
    <div className='containerDiv'>
        <nav className={`${styles.navbar}`}>
            <div className={`${styles.logo}`}>
                <img src="../public/images/icons8-react-72.png" alt="react" />
            </div>

            <ul className={`${styles.list}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
  </>
  )
}

