
import classes from './filterbuttons.module.css'
import styles from '../../styles/containerstyle.module.css';

const filterbuttons = () => {
  return (
    <div className={`${classes.filter} ${styles.container}`}>

      <a href="#">
        <button>Price - Lowest</button>
        </a>
      <a href="#">
        <button>Price - Highest</button>
        </a>
      
     
      </div>
  )
}

export default filterbuttons