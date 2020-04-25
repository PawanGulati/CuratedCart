import React from 'react'

import classes from './TickMark.module.css'
import gif from '../../../assets/Images/tick-1.gif'
import Backdrop from '../BackDrop'

const toggleSide =()=>{
    window.location.href='/';
}

export default function Gif()
{
    return(
        <>
        <Backdrop show={1} toggleSide={toggleSide}/>
        <div className={classes.Block}>
            <img className={classes.Gif} src={gif} alt="Order Received"/>
            <h3>ORDER PLACED</h3>
        </div>
        </> 
    ) 
}
