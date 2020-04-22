import {createSelector} from 'reselect' 

// input selectors
const selectCategory = state => state.category

// output selectors
export const selectCategories = createSelector(
    [selectCategory],
    category => category.categories
)


