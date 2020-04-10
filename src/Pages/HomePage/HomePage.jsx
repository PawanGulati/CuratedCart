import React, { Component } from 'react'
import LandingDisplay from '../../components/Home/LandingDisplay/LandingDisplay'
import ProductDisplay from '../../components/Home/ProductDisplay/ProductDisplay'
import FacilityDisplay from '../../components/Home/FacilityDisplay/FacilityDisplay'
import ContactDisplay from '../../components/Home/ContactDisplay/ContactDisplay'

import classes from './HomePage.module.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className={classes.HomePage}>
                <LandingDisplay />
                <ProductDisplay />
                <FacilityDisplay />
                <ContactDisplay />
            </div>
        )
    }
}
