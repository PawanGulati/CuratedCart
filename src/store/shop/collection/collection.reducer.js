import COLLECTIONS from './collection.data'

const initial_state = {
    collections:COLLECTIONS
}

const collectionReducer = (state=initial_state,action)=>{
    switch (action.type) {
        default:
            return state
    }
}

export default collectionReducer
