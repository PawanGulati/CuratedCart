import React from 'react'
import PreviewItem from '../PreviewItem/PreviewItem'
import Typography from '@material-ui/core/Typography'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Container, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => createStyles({
    main_display:{
        height : '100%', 
        margin : '10px 0',
    },

    title :{
        fontFamily:'"Exo 2",sans-serif',
        fontSize :'5vw',
        fontWeight :'600',
        [theme.breakpoints.up('md')]:{
            fontSize : '2vw'
        },
        borderBottom : '2px solid #E8E8CF '
    },
       
}))


export default function Preview({items, title}) {
    const classes = useStyles()
    return (
        <section className={classes.main_display}>
            <Container style={{height : '100%'}}>
                <Typography className={classes.title}>{title}</Typography>
                <Grid container style={{height : '90%'}} justify="space-between">
                    {
                        //rendering only 4 item at a time for preview of each category 
                        items
                        .filter(( _ , i) =>i < 4)
                        .map(({id , ...rest})  =>{
                            return(
                                <Grid xs={6} sm={3} >
                                    <PreviewItem key={id} {...rest} />
                                </Grid>
                        )})
                    }
                </Grid>    
            </Container>
        </section>
    )
}
