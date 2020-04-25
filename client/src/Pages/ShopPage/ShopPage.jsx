import React, { Component } from 'react'

import CollectionPreview from '../../components/Shop/CollectionPreview/CollectionPreview'
import classes from './ShopPage.module.css'

import { Switch, Route, Redirect } from 'react-router'
import CategoryPage from '../CategoryPage/CategoryPage'

import {firestore} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { updateCollections } from '../../store/shop/collection/collection.action'

import withSpinner from '../../hoc/withSpinner/withSpinner'

const CollectionPreviewLoaded = withSpinner(CollectionPreview)
const CategoryPageLoaded = withSpinner(CategoryPage)

const mapDispatchToProps = dispatch =>({
    updateCollections:(normalizedColl) => dispatch(updateCollections(normalizedColl))
})

export default connect(null,mapDispatchToProps)(class ShopPage extends Component {
    state={
        isLoading:true
    }

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

            this.setState({isLoading:false})
        })
    }
    
    render() {
        const {match} = this.props
        return (
            <div className={classes.ShopPage}>
                <Switch>
                    <Route exact path={match.path} render={(props)=><CollectionPreviewLoaded {...props} isLoading={this.state.isLoading} />} />
                    <Route path={`${match.path}/:category`} render={(props)=><CategoryPageLoaded {...props} isLoading={this.state.isLoading} />} />
                    <Redirect component={ShopPage}/>
                </Switch>
            </div>
        )
    }
})
