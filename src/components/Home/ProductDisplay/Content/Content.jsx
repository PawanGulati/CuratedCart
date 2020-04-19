import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => createStyles({
    root:{
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        position  : 'absolute',
        zIndex : '2',
        border:'2px solid white',
        background : "rgba(0, 0, 0, .5)",
        padding : '0 10px',
        borderRadius : '20px',
    },
    title:{
        textDecoration : 'none',
        fontSize : '3vw',
        [theme.breakpoints.up('md')]:{
            fontSize : '1.5vw',
        },
        fontFamily : "'Exo 2',sans-serif",
        textAlign : "center",
        color : "white",
        cursor : 'pointer',
    },
}))

export default function Content({category}) {
    const classes = useStyles()
    let url = `/shop/${category.title.toLowerCase()}` 
    return (
        <div className={classes.root}>
            <Link to={url} className={classes.title}>{category.title}</Link>
        </div>
    )
}
