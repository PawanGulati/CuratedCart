import React from 'react'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import LocalMallIcon from '@material-ui/icons/LocalMall';

const useStyles = makeStyles(theme => createStyles({
    main_display:{
        height : '98%', 
        display : 'flex',
        alignItems : 'center',
        flexFlow : 'column',
        margin : '10px 0 0 0',
    },
    
    item_image :{
        height : '80%',
        width : '90%',
        backgroundPosition : 'center',
        backgroundSize:'cover',
        border:'3px solid #E8E8CF',
        position : 'relative',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        
        '&:hover':{
            '&::before' :{
                opacity : '.4'
            },
            '& $add_to_cart' :{
                opacity : '1'
            },
        },

        '&::before' : {
            height : '100%',
            width : '100%',
            content : '""',
            position : 'absolute',
            backgroundColor : 'black',
            opacity : '0',
            zIndex : '1',
            transition : 'all .3s ease-in-out',
        },
       
    },
    item_details:{
        height : '20%',
        width : '90%',
        background : '#E8E8CF'
    },
    item_name :{
        fontFamily:'"Exo 2",sans-serif',
        fontSize : '3vw',
        [theme.breakpoints.up('md')]:{
            fontSize : '1.2vw'
        },
        fontWeight : 'bold',
    },
    item_price:{
        display :'flex',
        flexFlow : 'row',
        fontWeight : 'bold',
        justifyContent :'space-between',
        fontSize : '3vw',
        [theme.breakpoints.up('md')]:{
            fontSize : '1.2vw'
        },
    },
    add_to_cart:{
        cursor:'pointer',
        fontSize : '40px',
        [theme.breakpoints.up('md')]:{
            fontSize : '50px'
        },
        zIndex : '2',
        opacity : '0',
        transition : 'all .3s ease-in-out',
        color :'#FFFFFF',
        "&:active":{
            animation : `$popup 4s ${theme.transitions.easing.easeInOut} forwards`
        }
    },
    "@keyframes popup" :{
        "0%":{
            transform : 'scale(1.3)'
        },
        "50%" :{
            transform : 'scale(1.2)'
        },
        "100%":{
            transform: 'scale(1.1)'
        }
    }
    
    
}))

export default function PreviewItem({name,imageURL,price,addCartItem}) {
    const classes=useStyles();
    // let item = {id,name,imageURL,price}
    return (
        <div className={classes.main_display}> 
            <div className={classes.item_image} style={{backgroundImage : `url(${imageURL})`}}>
                 <LocalMallIcon className={classes.add_to_cart} onClick={addCartItem}/>
            </div> 
            <div className={classes.item_details}>
                <Typography className={classes.item_name}>{name}</Typography>                
                <span className={classes.item_price}>₹{price.toLocaleString()}</span>
            </div>
        </div>
    )
}
            
            
            