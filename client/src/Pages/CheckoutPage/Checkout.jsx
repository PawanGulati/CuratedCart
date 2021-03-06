import React from 'react';
import {Redirect} from 'react-router-dom'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container  from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotalPrice, selectCartItemCount } from '../../store/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { Grid, Typography } from '@material-ui/core';
import {selectCurrentUser} from '../../store/user/user.selector'

import CheckoutButton from '../../components/Checkout/CheckoutButton/CheckoutButton';
import { clearItemFromCart, removeItemFromCart, increaseItemInCart } from '../../store/cart/cart.action';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:theme.palette.primary.main,
    color: theme.palette.common.black,
    fontWeight:'bold'
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);


const useStyles = makeStyles(theme=>({
    table: {
        minWidth: 700,
        minHeight:450,
        [theme.breakpoints.down('sm')]:{
          minHeight:400

        }
    },
    root:{
        padding:'2rem',
        top:'56px',
        position:'relative',
        height:'calc(100% - 56px)',

    },
    arrow:{
        fontSize:'1rem',
        margin:'.5rem',
        cursor:'pointer',
        [theme.breakpoints.down('sm')]:{
          fontSize:'1rem'
        }
    },
    arrowDiv:{
      fontWeight : '500',
      fontFamily : '"Exo 2",sans-serif',
      [theme.breakpoints.down('sm')]:{
        // fontSize:'15px'
      }
    },
    payButton:{
        marginTop:"2rem",
        position:'absolute',
        right:0,
    },
    page_title:{
      fontFamily : '"Exo 2",sans-serif',
      marginBottom : '10px',
      fontWeight : 'bold'
    },
    item_title:{
      fontSize : '20px',
      fontWeight : '500',
      fontFamily : '"Exo 2",sans-serif',
      [theme.breakpoints.down('sm')]:{
        fontSize:'15px'
      }
    },
    removeBut:{
      fontWeight:'bold',
      cursor:'pointer',
      fontSize:'1.5rem',  
      [theme.breakpoints.down('sm')]:{
        fontSize:'1rem'  
      }
    }
}));

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartTotalPrice:selectCartTotalPrice,
    cartItemCount:selectCartItemCount,
    currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)) ,
  removeItemFromCart:item => dispatch(removeItemFromCart(item)),
  increaseItemInCart:item => dispatch(increaseItemInCart(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(function CustomizedTables(props) {
  const classes = useStyles();

  const {cartItems,cartTotalPrice,cartItemCount,clearItemFromCart,removeItemFromCart,increaseItemInCart,currentUser} = props
  
  let content = (
    <div className={classes.root}>
    <Container >
        <Typography variant='h5' className={classes.page_title}>My Shopping Bag{` (${cartItemCount} items)`}</Typography>
        <TableContainer component={Paper}>
        <Table size="small" stickyHeader className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Product</StyledTableCell>
                {/*<StyledTableCell align="right">Description</StyledTableCell>*/}
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Price&nbsp;(₹)</StyledTableCell>
                <StyledTableCell align="right">Remove</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {cartItems.map(item => (
                <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="item" className={classes.item_title}>
                    {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="right" className={classes.arrowDiv}>
                      <span className={classes.arrow} onClick={()=>removeItemFromCart(item)}>&#10096;</span>
                      {item.quantity}
                      <span className={classes.arrow} onClick={()=>increaseItemInCart(item)}>&#10097;</span>
                    </StyledTableCell>
                    <StyledTableCell align="right" className={classes.item_title}>{`₹ ${(item.price*item.quantity).toFixed(2)}`}</StyledTableCell>
                    <StyledTableCell align="right" className={classes.removeBut} onClick={()=>clearItemFromCart(item)}>&#10008;</StyledTableCell>
                </StyledTableRow>
            ))}
            <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2} align="right">Subtotal</TableCell>
                <TableCell align="right" style={{fontWeight:'bold'}}>{`₹ ${cartTotalPrice.toFixed(2)}`}</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        <CheckoutButton className={classes.payButton} price={cartTotalPrice}/>
    </Container>  
    </div>
  )

  if(cartItems.length!==0 && currentUser!==null)
  {
    return content 
  }

  else return <Redirect to='/'/>
})



