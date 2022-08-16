import { useState,useEffect } from 'react'
import classes from  './connectwallet.module.css'

const Connectwallet = (props) => {

  const [addr , setAdd]= useState(props.address)

  useEffect(()=>{
    waladdress()
  },[props.address])

   const waladdress=()=>{
    const leng=props.address.length;
    const fullstr = String(props.address)
    const wadd= fullstr.substring(0,5)+"..."+fullstr.substring(leng-5,leng)
    setAdd(wadd);
   }

  
    return (
   <button  id="wallet" className={classes.connect__wallet}  onClick={props.connect}>
    {props.address? addr: "Connect Wallet"}
   </button> )
    
 

  



  
 
}

export default Connectwallet