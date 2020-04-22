import React, { Component } from 'react'

import CollectionPreview from '../../components/Shop/CollectionPreview/CollectionPreview'
import classes from './ShopPage.module.css'

import { Switch, Route } from 'react-router'
import CategoryPage from '../CategoryPage/CategoryPage'


export default class ShopPage extends Component {
    render() {
        const {match} = this.props
        return (
            <div className={classes.ShopPage}>
                <Switch>
                    <Route exact path={match.path} component={CollectionPreview} />
                    <Route path={`${match.path}/:category`} component={CategoryPage}/>
                </Switch>
            </div>
        )
    }
}
