import React, { Component } from 'react'
import LandingDisplay from '../../components/Home/LandingDisplay/LandingDisplay'
import ProductDisplay from '../../components/Home/ProductDisplay/ProductDisplay'
import FacilityDisplay from '../../components/Home/FacilityDisplay/FacilityDisplay'
import ContactDisplay from '../../components/Home/ContactDisplay/ContactDisplay'

import classes from './HomePage.module.css'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCategories} from '../../store/shop/category/category.selector'


const mapStateToProps = createStructuredSelector({
    categories:selectCategories
})

export default connect(mapStateToProps)(class HomePage extends Component {
    render() {
        const {categories} = this.props
        
        return (
            <div className={classes.HomePage}>
                <LandingDisplay />
                <ProductDisplay categories={categories}/>
                <FacilityDisplay />
                <ContactDisplay />
            </div>
        )
    }
})
