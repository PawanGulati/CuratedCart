import React from 'react'

import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import Content from '../Content/Content'

const useStyles = makeStyles(theme => createStyles({
    menu_item:{
        height:'240px',
        margin:'12px',
        minWidth:'30%',
        border:'1px solid black',
        alignItems:'center',
        justifyContent:'center',         
        display:'flex'
        // Display flex vgrh use kr yha pe 
    }
}))

export default function Category({category}) {
    const classes = useStyles()
    return (
        <div className={classes.menu_item}>
            <Content category={category}/>
        </div>
    )
}
