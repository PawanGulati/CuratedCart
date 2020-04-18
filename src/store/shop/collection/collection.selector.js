import {createSelector} from 'reselect'

// input selectors
const selectCollection = state => state.collection

// output selectors
// here we are fetching collection as object so cant map der in preview or overview so hav to change
export const selectCollections = createSelector(
    [selectCollection],
    collection => Object.values(collection.collections)
)
