import {combineReducers} from 'redux' 
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

// configuring persis store
const persistConfig = {
    key: 'root',
    storage,
    whiteList:['cart']
}
   
const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer
})

export default persistReducer(persistConfig,rootReducer)