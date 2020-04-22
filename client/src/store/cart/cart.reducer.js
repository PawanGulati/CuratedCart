import {TOGGLE_DROP, ADD_ITEM} from './cart.types'

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

const cartReducer = (state=initial_state,action) =>{
    switch (action.type) {
        case TOGGLE_DROP:
            return {
                ...state,
                drop_hide:!state.drop_hide
            }
        case ADD_ITEM:
            return{
                ...state,
                cartItems : addItemToCart(state.cartItems,action.item),
                cartItemCount: state.cartItemCount + 1,
                cartTotalPrice: state.cartTotalPrice + action.item.price
            }    
        default:
            return state
    }
}

export default cartReducer