import React, { Component } from 'react'

import { connect } from 'react-redux';
import {selectCategoryCollection} from '../../store/shop/collection/collection.selector'
import { Container, Grid } from '@material-ui/core';
import PreviewItem from '../../components/Shop/PreviewItem/PreviewItem'
import {addCartItem} from '../../store/cart/cart.action'
import classes from './CategoryPage.module.css';

const mapStateToProps = (state,{match:{params:{category}}}) =>({
    category:selectCategoryCollection(category)(state)
})

const mapActionToProps = dispatch=>{
    return{
        addCartItem : (item)=>dispatch(addCartItem(item))
    }
}

export default connect(mapStateToProps,mapActionToProps)(class CategoryPage extends Component {
    render() {
        const {category} = this.props
        console.log(this.props);
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
    }
})
