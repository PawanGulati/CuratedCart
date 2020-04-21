import React from 'react'
import PreviewItem from '../PreviewItem/PreviewItem'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Container, Grid } from '@material-ui/core'
import {addCartItem} from '../../../store/cart/cart.action'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
 
const useStyles = makeStyles(theme => createStyles({
    main_display:{
        height : '90vh', 
        margin : '10px 0',
    },

    title :{
        color : 'black',
        fontFamily:'"Exo 2",sans-serif',
        fontSize :'6vw',
        fontWeight :'600',
        [theme.breakpoints.up('md')]:{
            fontSize : '2.2vw'
        },
        borderBottom : '2px solid #E8E8CF '
    },
       
}))


export default connect()(function Preview({dispatch,items, title}) {
    const classes = useStyles()
    let url = `/shop/${title.toLowerCase()}`;
    return (
        <section className={classes.main_display}>
            <Container style={{height : '100%'}}>
                <div className={classes.title}><Link to={url} style={{textDecoration : 'none',color: 'black'}}>{title}</Link></div>
                <Grid container style={{height : '86%'}} justify="space-between">
                    {
                        //rendering only 4 item at a time for preview of each category 
                        items
                        .filter(( _ , i) =>i < 4)
                        .map(({id , ...rest})  =>{
                            return(
                                <Grid key={id} item xs={6} sm={3} >
                                    <PreviewItem {...rest} addCartItem={()=>dispatch(addCartItem({id,...rest}))}/>
                                </Grid>
                        )})
                    }
                </Grid>    
            </Container>
        </section>
    )
}
)