import React, { Component } from 'react'

import { connect } from 'react-redux';
import {selectCategoryCollection} from '../../store/shop/collection/collection.selector'
import Typography from '@material-ui/core/Typography';

const mapStateToProps = (state,{match:{params:{category}}}) =>({
    category:selectCategoryCollection(category)(state)
})

export default connect(mapStateToProps)(class CategoryPage extends Component {
    render() {
        console.log(this.props);
        const {category} = this.props
        return (
            <>
                <Typography variant='h4' >{category.title}</Typography> 

                {/* you can map category.items here with Grids > */}
            </>
        )
    }
})
