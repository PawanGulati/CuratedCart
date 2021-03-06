import React from 'react'
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles(theme=>({
    root:{
        // [theme.breakpoints.down('sm')]:{
            width:'100%',
            height:'100%',
            position:'fixed',
            zIndex:'600',
            left:0,
            top:0,
            backgroundColor:'rgba(0,0,0,0.5)',
            transition : 'all .4s ease-in-out'
        // },
        
        // visibility:'hidden'
    }
}))

export default function BackDrop({show,toggleSide}) {
    const classes = useStyles();
    
    return (
        show ? <div className={classes.root} onClick={()=>toggleSide()}/> : null
    ) 
}
