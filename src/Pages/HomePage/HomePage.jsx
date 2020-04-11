import React, { Component } from 'react'
import LandingDisplay from '../../components/Home/LandingDisplay/LandingDisplay'
import ProductDisplay from '../../components/Home/ProductDisplay/ProductDisplay'
import FacilityDisplay from '../../components/Home/FacilityDisplay/FacilityDisplay'
import ContactDisplay from '../../components/Home/ContactDisplay/ContactDisplay'

import classes from './HomePage.module.css'

export default class HomePage extends Component {
    state = {
        categories : [
            {
                id:1,
                title:'Clothes',
                imgURL:'',
                size:'big'
            },{
                id:2,
                title:'Electronics',
                imgURL:'',
                size:'big'
            },{
                id:3,
                title:'Footwear',
                imgURL:'',
                size:'small'
            },{
                id:4,
                title:'Furniture',
                imgURL:'',
                size:'small'
            },{
                id:5,
                title:'Watch',
                imgURL:'',
                size:'small'
            }
        ]
    }

    render() {
        const {categories} = this.state
        return (
            <div className={classes.HomePage}>
                <LandingDisplay />
                <ProductDisplay categories={categories}/>
                <FacilityDisplay />
                <ContactDisplay />
            </div>
        )
    }
}
