import React from 'react'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {addCartItem} from '../../../store/cart/cart.action'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(theme => createStyles({
    main_display:{
        height : '98%', 
        display : 'flex',
        alignItems : 'center',
        flexFlow : 'column',
        margin : '5px 0 0 0',
    },

    item_image :{
        height : '80%',
        width : '90%',
        backgroundPosition : 'center',
        backgroundSize:'cover',
       
    },
    item_details:{
        height : '20%',
        width : '90%',
        background : '#E8E8CF'
    },
    item_title :{
        fontFamily:'"Exo 2",sans-serif',
        fontSize : '3vw',
        [theme.breakpoints.up('md')]:{
            fontSize : '1.2vw'
        },
    },
    item_price:{
        display :'flex',
        flexFlow : 'row',
        justifyContent :'space-between',
        fontSize : '3vw',
        [theme.breakpoints.up('md')]:{
            fontSize : '1.2vw'
        },
    },
    add_to_cart:{
        cursor:'pointer',
        fontSize : 'small',
        [theme.breakpoints.up('md')]:{
            fontSize : 'large'
        },
    }
    
    
}))

export default connect()(function PreviewItem({dispatch,name,imageURL,price}) {
    const classes=useStyles();
    let item = {name,imageURL,price}
    return (
        <div className={classes.main_display}> {/* can take height of 100% */} 
        <div className={classes.item_image} style={{backgroundImage : `url(${imageURL})`}}/> {/* FOR IMAGE  (could be like height of 95%) */}
        <div className={classes.item_details}>
            <Typography className={classes.item_title}>{name}</Typography>                
            <div className={classes.item_price}>
                <span>₹{price}</span>
                <AddShoppingCartIcon className={classes.add_to_cart} onClick={()=>dispatch(addCartItem(item))}/>
            </div>
        </div>
        </div>
    )
})


