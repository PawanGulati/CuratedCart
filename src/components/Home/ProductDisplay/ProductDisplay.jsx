import React from 'react'
import classes from './ProductDisplay.module.css'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CategoryItem from './CategoryItem/CategoryItem'

export default function ProductDisplay(props) {
    const {categories} = props
    return (
        <div className={classes.main_display}>
            <Container maxWidth='md'>
                <Grid container>
                {
                    categories.map(category => (
                        <Grid item xs={12} sm={category.size === 'big' ? 6 : 4}>
                            <CategoryItem category={category}/>
                        </Grid>
                    ))
                }
                </Grid>
            </Container>
        </div>
    )
}
