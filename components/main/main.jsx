import React from 'react'
import classes from './main.module.css'
import Topnav from '../topnav/topnav'
import Banner from '../banner/banner'
import Filter from '../filterbuttons/filterbuttons'
import Nftcard from '../nftcard/nftcard'
import Nftgrid from '../nftgrid/nftgrid'
import Comingsoon from '../comingsoon/Comingsoon'
import styles from '../../styles/containerstyle.module.css';

const main = (props) => {
  return (
    <div className={`${classes.main} ${styles.container}`} style={{display: `${props.display}`}}>
       <Topnav  address={props.address}/>
       <Banner />
       <h2 className={classes.container}>Explore New Listings</h2>
       <Filter />
     <Nftgrid />
     <Comingsoon /> 

     <div className={classes.blackscreen}></div>

        
        </div>
  )
}

export default main