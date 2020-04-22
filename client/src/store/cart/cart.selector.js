import {createSelector} from 'reselect'

// input selectors
const selectCart = state => state.cart


// output selectors
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems  
)

export const selectDropToggle = createSelector(
    [selectCart],
    cart => cart.drop_hide  
)

export const selectCartItemCount = createSelector(
    [selectCart],
    // cartItems => cartItems.reduce((acc,item)=> acc + item.quantity,0)
    cart => cart.cartItemCount
)

export const selectCartTotalPrice = createSelector(
    [selectCart],
    // cartItems => cartItems.reduce((acc,item)=> acc + (item.quantity * item.price),0)
    cart => cart.cartTotalPrice
)