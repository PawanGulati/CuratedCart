import React from 'react'
import Container from '@material-ui/core/Container'
import { Grid, Typography } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => createStyles({
    ContactDisplay_main_display:{
        height : '100%', 
        marginBottom : '56px',
        background : '#E8E8CF',
        padding :'2rem',
        [theme.breakpoints.up('sm')]:{
            height : '50%'
        },
        display : 'flex',
        alignItems : 'center'
    },

    left_part:{
        height : '95%',
        width : '95%',
        border : '1px solid black',
        display : 'flex',
        fontFamily : '"Exo 2",sans-serif',
        flexFlow : 'column',
        fontSize : '1.2vw',
        fontWeight :'bold',
        [theme.breakpoints.down('sm')]:{
            fontSize : '5vw'
        },
    },

    right_part:{
        fontFamily : '"Exo 2",sans-serif',
        fontSize : '1.4vw',
        fontWeight : 'bold',
        height : '100%',
        width : '95%',
        // border : '1px solid black',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background : 'white',
        padding : '0 2rem 1rem 2rem',
        [theme.breakpoints.down('sm')]:{
            fontSize : '4vw'
        },
    },
    
    // connect_with_us:{
    //     width : '90%',
    //     height : '90%',
    // },
 
    part_1:{
        display: 'flex',
        justifyContent : 'space-between',
        [theme.breakpoints.down('sm')]:{
            flexFlow : 'column',
        },
    },
}))


export default function ContactDisplay() {
    let classes = useStyles();
    return (
        <div className={classes.ContactDisplay_main_display}>
            <Container style={{height : '100%'}}>
                <Grid container style={{height : '100%'}}>
                    <Grid sm={8}>
                        <div className={classes.left_part}>
                            <Grid xs={12}>
                                <div className={classes.part_1}>
                                    <Grid md={2.4}>About Us</Grid>
                                    <Grid md={2.4}>Contact Us</Grid>
                                    <Grid md={2.4}>Sell With Us</Grid>
                                    <Grid md={2.4}>Shipping & Return Policy</Grid>
                                    <Grid md={2.4}>FAQs</Grid>
                                </div>
                            </Grid>
                            <Grid xs={12}>
                                <span>Address</span>
                                <span style={{textAlign : 'start'}}>Knowhere,  2nd Floor Solanki Multistorey,Guna 473001, Madhya Pradesh India</span>
                            </Grid>
                            <Grid xs={12}>
                                Phones       07542-265873, 9174762509
                            </Grid>
                            <Grid xs={12}>
                                E-Mail        curated@cart.org
                            </Grid>
                        </div>
                    </Grid>
                    
                    <Grid sm={4}>
                        <div className={classes.right_part}>
                            <div className={classes.connect_with_us}>
                                <p>
                                    Receive all our news & updates
                                </p>
                                <form className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="Full Name"
                                    name="userName"
                                    autoComplete="off"
                                />
                                
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email1"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="off"
                                    autoFocus
                                />
                                
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                >
                                Subscribe Now
                            </Button>
                        </form>

                            </div>
                        </div>
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    )
}
