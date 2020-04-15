import React from 'react'

// import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import Content from '../Content/Content'

const useStyles = makeStyles(theme => createStyles({
    menu_item:{
        height : '100%',
        minWidth:'30%',
        border : '6px solid white',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',       
        backgroundRepeat : 'none',
        position : 'relative',
        background :'white',
        overflow:'hidden',
    },
    backGround : {
        width : '100%',
        height : '100%',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        position : 'relative',
        transition : 'all .3s ease',
        '&:hover':{
            transform  : 'scale(1.1)',
            '&::before' :{
                opacity : '.2'
            }
        },

        '&::before' : {
            height : '100%',
            width : '100%',
            content : '""',
            position : 'absolute',
            backgroundColor : 'black',
            opacity : '.4',
            zIndex : '1',
            transition : 'all .5s ease-in-out',
        },
        
    }

}))

export default function Category({category}) {
    const classes = useStyles()
    return (
        <div className={classes.menu_item}>
            <div className={classes.backGround} style={{backgroundImage:`url(${category.imgURL})`}}></div>
            <Content category={category}/>
        </div>
    )
}
