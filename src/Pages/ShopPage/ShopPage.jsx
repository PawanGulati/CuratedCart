import React, { Component } from 'react'

import Preview from '../../components/Shop/Preview/Preview'
import classes from './ShopPage.module.css'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCollections} from '../../store/shop/collection/collection.selector'


const mapStateToProps = createStructuredSelector({
    collections:selectCollections   
})

export default connect(mapStateToProps)(class ShopPage extends Component {
    render() {
        console.log(this.props);
        
        const {collections} = this.props
        return (
            <div className={classes.ShopPage}>
                <div className={classes.title}>Our Collection</div>
                {
                    collections.map(({id , ...rest}) =>(
                        <Preview key={id} {...rest} />
                    ))
                }
            </div>
        )
    }
})
