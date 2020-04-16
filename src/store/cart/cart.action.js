import {TOGGLE_DROP, ADD_ITEM} from './cart.types'

export const toggleDrop = () =>({
    type:TOGGLE_DROP
})

export const addCartItem = item =>({
    type: ADD_ITEM,
    item
})