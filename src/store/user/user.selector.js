import {createSelector} from 'reselect'

//input selectors
const selectUser = state => state.user

//output selectors
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)