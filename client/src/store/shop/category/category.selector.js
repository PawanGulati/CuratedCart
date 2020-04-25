import {createSelector} from 'reselect' 

// input selectors
const selectCategory = state => state.category

// output selectors
export const selectCategories = createSelector(
    [selectCategory],
    category => category.categories
)

export const selectCategoriesItemsArr = createSelector(
    [selectCategories],
    categories => categories.reduce((acc,category)=>{
        acc.push(category.title.toLowerCase())
        return acc
    },[])
)

