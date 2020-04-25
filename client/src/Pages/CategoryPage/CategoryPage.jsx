import React, { Component } from 'react'

import { connect } from 'react-redux';
import {selectCategoryCollection} from '../../store/shop/collection/collection.selector'
import { Container, Grid } from '@material-ui/core';
import PreviewItem from '../../components/Shop/PreviewItem/PreviewItem'
import {addCartItem} from '../../store/cart/cart.action'
import classes from './CategoryPage.module.css';
import { selectCategoriesItemsArr } from '../../store/shop/category/category.selector';
import { Redirect } from 'react-router';

const mapStateToProps = (state,{match:{params:{category}}}) =>({
    category:selectCategoryCollection(category)(state),
    categories:selectCategoriesItemsArr(state)
})

const mapActionToProps = dispatch=>{
    return{
        addCartItem : (item)=>dispatch(addCartItem(item))
    }
}

export default connect(mapStateToProps,mapActionToProps)(class CategoryPage extends Component {    
    render() {
        const {category,categories,match:{params}} = this.props
                
        const categoryExists = categories.find(cat => cat === params.category)
        
        if(categoryExists)        
            return (
                <div className={classes.main_display}>
                    <div className={classes.title}>{category.title}</div> 
                    <Container >
                    <Grid container justify="space-between">
                    {
                        category.items.map(({id , ...rest})  =>{
                            return(
                                <Grid key={id} item xs={6} sm={3} className={classes.item}>
                                    <PreviewItem {...rest} addCartItem={()=>this.props.addCartItem({id,...rest})}/>
                                </Grid>
                        )})
                    }
                    </Grid>
                    </Container>
                </div>
            )
        return <Redirect to='/shop' />            
    }
})
