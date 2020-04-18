import CATEGORIES from './category.data' 

const initial_state = {
    categories : CATEGORIES 
}

const categoryReducer = (state=initial_state,action) =>{
    switch (action.type) {
        default:
            return state
    }
}

export default categoryReducer
