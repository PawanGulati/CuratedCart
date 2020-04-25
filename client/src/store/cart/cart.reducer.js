import {TOGGLE_DROP,HIDE_DROP,ADD_ITEM,CLEAR_ITEM_FROM_CART,REMOVE_ITEM_FROM_CART, INCREASE_ITEM_IN_CART} from './cart.types'

const initial_state = {
    drop_hide:false,
    cartItems:[], 
    cartItemCount:0,
    cartTotalPrice:0
}

const addItemToCart = (cartItems,cartItem) =>{
    const itemExists = cartItems.find(item => item.id === cartItem.id)

    if(itemExists){
        return cartItems.map(item =>
            (item.id === cartItem.id)
            ?{...item,quantity:item.quantity+1}
            :item
        )
    }
    return [...cartItems,{...cartItem,quantity:1}]
}

const clearItemFromCart = (cartItems,cartItem) =>{
    return cartItems.filter(item => item.id !== cartItem.id)
}

const removeItemFromCart = (cartItems,cartItem) =>{
    if(cartItem.quantity === 1) return cartItems.filter(item => item.id !== cartItem.id)
    return cartItems.map(item =>{
        if(item.id === cartItem.id){
            return {...item,quantity:item.quantity-1}
        }return item
    })
}

const increaseItemInCart = (cartItems,cartItem) =>{
    return cartItems.map(item =>{
        if(item.id === cartItem.id){
            return {...item,quantity:item.quantity+1}
        }return item
    })
}

const cartReducer = (state=initial_state,action) =>{
    switch (action.type) {
        case TOGGLE_DROP:
            return {
                ...state,
                drop_hide:!state.drop_hide
            }
        case HIDE_DROP:
            return {
                ...state,
                drop_hide : false
            }
        case ADD_ITEM:
            return{
                ...state,
                cartItems : addItemToCart(state.cartItems,action.item),
                cartItemCount: state.cartItemCount + 1,
                cartTotalPrice: state.cartTotalPrice + action.item.price
            }    
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems,action.item),
                cartItemCount: state.cartItemCount - action.item.quantity,
                cartTotalPrice: state.cartTotalPrice - (action.item.price*action.item.quantity)
            }
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.item),
                cartItemCount: state.cartItemCount - 1,
                cartTotalPrice: state.cartTotalPrice - action.item.price
            }
        case INCREASE_ITEM_IN_CART:
            return {
                ...state,
                cartItems: increaseItemInCart(state.cartItems,action.item),
                cartItemCount: state.cartItemCount + 1,
                cartTotalPrice: state.cartTotalPrice + action.item.price
            }    
        default:
            return state
    }
}

export default cartReducer