import {UPDATE_COLLECTIONS} from './collection.types'

export const updateCollections = collections =>({
    type:UPDATE_COLLECTIONS,
    collections
})