import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => createStyles({
    root:{
        border:'1px solid red',
        height:'90px',
        width:'120px',
        //Styting krrr
    },
    title:{
        // STYLING KRRRR
    },
    subtitle:{
        // STYLING KRRRR
    }
}))

//        CLOTHES 
//       (SHOP IT)   
// 

export default function Content({category}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>{category.title}</Typography>
            <Typography className={classes.subtitle}>SHOP IT</Typography>
        </div>
    )
}
