import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => createStyles({
    root:{
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        position  : 'absolute',
        zIndex : '20',
        border:'2px solid white',
        background : "rgba(0, 0, 0, .5)",
        padding : '0 10px',
        borderRadius : '20px',
    },
    title:{
        fontFamily : "'Exo 2',sans-serif",
        fontSize : '90%',
        textAlign : "center",
        color : "white",
        cursor : 'pointer',
    },
}))

export default function Content({category}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>{category.title}</Typography>
        </div>
    )
}
