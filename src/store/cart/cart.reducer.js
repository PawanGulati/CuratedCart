import {TOGGLE_DROP} from './cart.types'

const initial_state = {
    drop_hide:false,
    cartItems:[]
}

const cartReducer = (state=initial_state,action) =>{
    switch (action.type) {
        case TOGGLE_DROP:
            return {
                ...state,
                drop_hide:!state.drop_hide
            }
        default:
            return state
    }
}

export default cartReducer