import {SET_CUR_USER} from './user.types'

export const setCurUser = user =>({
    type:SET_CUR_USER,
    user
})