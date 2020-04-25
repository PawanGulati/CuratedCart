import COLLECTIONS from './collection.data'
import {updateCollections} from './collection.action'
import { UPDATE_COLLECTIONS } from './collection.types'

const initial_state = {
    collections:null
}

const collectionReducer = (state=initial_state,action)=>{
    switch (action.type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections:{...action.collections}
            }
        default:
            return state
    }
}

export default collectionReducer
