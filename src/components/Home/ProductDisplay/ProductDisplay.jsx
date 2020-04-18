import React from 'react'
import classes from './ProductDisplay.module.css'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CategoryItem from './CategoryItem/CategoryItem'

export default function ProductDisplay(props) {
    const {categories} = props
    return (
        <section className={classes.main_display} id="products">
            <Container style={{height : '100%'}}>
                <Grid container justify="space-between" style={{height : '100%'}} spacing={1} >
                {
                    categories.map(category => {
                        
                        return(
                            <Grid item key={category.id} xs={6} sm={category.size === 'big' ? 6 : 4} >
                                <CategoryItem category={category}/>
                            </Grid>
                    )
                    })
                }
                </Grid>
            </Container>
        </section>
    )
}
