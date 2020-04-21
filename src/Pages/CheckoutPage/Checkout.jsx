import React from 'react';

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
import StripeCheckout from 'react-stripe-checkout';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:theme.palette.primary.main,
    color: theme.palette.common.black,
    fontWeight:'bold'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    root:{
        padding:'1rem',
        top:'56px',
        position:'relative',
        height:'calc(100% - 56px)'
    },
    arrow:{
        fontSize:'1.3rem',
        margin:'.5rem'
    },
    payButton:{
        marginTop:"2rem",
        position:'absolute',
        right:0
    }
});

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartTotalPrice:selectCartTotalPrice,
    cartItemCount:selectCartItemCount
})

export default connect(mapStateToProps)(function CustomizedTables({cartItems,cartTotalPrice}) {
  const classes = useStyles();

  console.log(cartItems);
  
  return (
    <Container className={classes.root}>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
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
                    <StyledTableCell component="th" scope="item">
                        {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="right" style={{fontWeight:'bold'}}><span className={classes.arrow}>&#10096;</span>{item.quantity}<span className={classes.arrow}>&#10097;</span></StyledTableCell>
                    <StyledTableCell align="right">{`₹ ${item.price.toFixed(2)}`}</StyledTableCell>
                    <StyledTableCell align="right" style={{fontSize:'1.5rem'}}>&#10008;</StyledTableCell>
                </StyledTableRow>
            ))}
            <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2} align="right">Subtotal</TableCell>
                <TableCell align="right">{`₹ ${cartTotalPrice.toFixed(2)}`}</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        <StripeCheckout className={classes.payButton}/>
    </Container>  
  );
})



