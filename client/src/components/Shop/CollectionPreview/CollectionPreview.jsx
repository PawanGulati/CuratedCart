import React from 'react'

import Preview from '../Preview/Preview'
import {makeStyles} from '@material-ui/core'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../../store/shop/collection/collection.selector'

const useStyles = makeStyles(theme => ({
    title:{
        fontFamily: "'Dosis',sans-serif",
        fontSize: "4vw",
        textAlign: "center",
        [theme.breakpoints.down('sm')]:{
            fontSize: "8vw",
        }
    }
}))

const mapStateToProps = createStructuredSelector({
    collections:selectCollections   
})

export default connect(mapStateToProps)(function CollectionPreview({collections}) {
    const classes = useStyles()
    return (
        <>
            <div className={classes.title}>Our Collection</div>
            {
                collections.map(({id , ...rest}) =>(
                    <Preview key={id} {...rest} />
                ))
            }
        </>
    )
})
