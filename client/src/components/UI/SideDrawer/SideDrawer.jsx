import React from 'react'
import {makeStyles} from '@material-ui/core'
import BackDrop from '../BackDrop'


const useStyles = makeStyles(theme=>({
    root:{
        height:'100%',
        position:'fixed',
        top:0,
        left:0,
        zIndex:800,
        backgroundColor:'white',
        maxWidth:'60%',
        width:'300px',
        padding:'20px 20px',
        [theme.breakpoints.up('sm')]:{
            display:'none'
        },
        transition:'transform 0.4s ease-in-out'
    },
    open:{
        transform:'translateX(0)'
    },
    close:{
        transform:'translateX( -300px )'
    }
}))

// show?classes.open:null

export default function SideDrawer({show,toggleSide}) {
    const classes = useStyles()
    return (
        <>
            <BackDrop show={show} toggleSide={toggleSide}/>
            <div className={`${classes.root} ${show?classes.open:classes.close}`} />
        </>
    )
}
