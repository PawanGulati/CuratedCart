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
                imgURL:'https://i.ibb.co/1LhTS6f/two-hanged-blue-stonewash-and-blue-jeans-1082528-3.jpg',
                size:'small'
            },{
                id:2,
                title:'Electronics',
                imgURL:'https://i.ibb.co/LrYMw9X/apple-laptop-macbook-computer-191158.jpg',
                size:'small'
            },{
                id:3,
                title:'Footwear',
                imgURL:'https://i.ibb.co/G3pqc89/fashion-shoes-footwear-19090.jpg',
                size:'small'
            },{
                id:4,
                title:'Furniture',
                imgURL:'https://i.ibb.co/xJGYJYM/architecture-beverage-chair-coffee-220749.jpg',
                size:'small'
            },{
                id:5,
                title:'Watch',
                imgURL:'https://i.ibb.co/NTmSMGy/black-leather-strap-silver-chronograph-watch-125779.jpg',
                size:'small'
            },{
                id : 6,
                title : 'Hats',
                imgURL : 'https://i.ibb.co/hRP6k7R/four-brown-straw-hats-display-1078973.jpg',
                size : 'small'
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
