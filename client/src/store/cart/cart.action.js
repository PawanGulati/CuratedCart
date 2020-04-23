import {TOGGLE_DROP, ADD_ITEM,CLEAR_ITEM_FROM_CART} from './cart.types'

export const toggleDrop = () =>({
    type:TOGGLE_DROP
})

export const addCartItem = item =>({
    type: ADD_ITEM,
    item
})

export const clearItemFromCart = item =>({
    type:CLEAR_ITEM_FROM_CART,
    item
})