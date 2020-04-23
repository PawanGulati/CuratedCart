import React, { Component } from 'react'

import CollectionPreview from '../../components/Shop/CollectionPreview/CollectionPreview'
import classes from './ShopPage.module.css'

import { Switch, Route } from 'react-router'
import CategoryPage from '../CategoryPage/CategoryPage'

import {firestore} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { updateCollections } from '../../store/shop/collection/collection.action'

const mapDispatchToProps = dispatch =>({
    updateCollections:(normalizedColl) => dispatch(updateCollections(normalizedColl))
})

export default connect(null,mapDispatchToProps)(class ShopPage extends Component {
    unsubscribeFromSnapShot = null;
    
    componentDidMount(){
        const {updateCollections} = this.props

        const collRef = firestore().collection('collections')
        collRef.onSnapshot(async snap =>{
            const modifiedCollections = snap.docs.map(collSnap =>{
                return {
                    id:collSnap.id,
                    ...collSnap.data()
                }
            })
            
            // console.log(modifiedCollections);
            const normalizedCollections = modifiedCollections.reduce((acc,collection)=>{
                acc[collection.title.toLowerCase()] = collection
                return acc
            },{})
            // console.log(normalizedCollections);

            updateCollections(normalizedCollections)
        })
    }
    
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
})
