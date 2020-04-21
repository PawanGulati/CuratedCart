import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => createStyles({
    ContactDisplay_main_display:{
        height : '36vh', 
        background : '#E8E8CF',
        padding :'2rem',
        [theme.breakpoints.down('sm')]:{
            height : '110vh'
        },
        display : 'flex',
        alignItems : 'center',
        flexFlow : 'column'
    },

    left_part:{
        width : '95%',
        [theme.breakpoints.down('sm')]:{
            width : '100%'
        },
    },

    middle_part:{
        height : '100%',
        width : '95%',
        [theme.breakpoints.down('sm')]:{
            width : '100%'
        },
        display :'flex',
        flexFlow:'column',
        justifyContent :'space-between'
    },

    right_part:{
        width : '95%',
        border : '2px solid #c4c49d',
        display : 'flex',
        flexFlow : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        background : 'white',
        padding : '0 2rem 1rem 2rem',
        [theme.breakpoints.down('sm')]:{
            width : '100%'
        },
    },

    text_style:{
        fontSize : '1.4vw',
        fontFamily : '"Exo 2",sans-serif',
        fontWeight : 'bold',
        margin : '10px 0 10px 0',
        [theme.breakpoints.down('sm')]:{
            fontSize : '5vw'
        },
    },

    footer :{
        height :'10vh',
        padding : '1rem',
        background :'#525252', 
        display : 'flex',
        alignItems : 'center',
        flexFlow : 'column',
        color : 'white',
        [theme.breakpoints.down('sm')]:{
            height : '16vh'
        },
    },

    icon:{
        height: '40px',
        width : '40px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin : '5px 0 0 10px',   
    },

    instagram : {
        backgroundImage: "url('https://i.ibb.co/cyRTYRC/instagram-1.png')",   
    },
    facebook : {
        backgroundImage: "url('https://i.ibb.co/L575L0w/facebook.png')",   
    },
    twitter : {
        backgroundImage: "url('https://i.ibb.co/KhxcmSw/twitter-1.png')",   
    },
    google_plus : {
        backgroundImage: "url('https://i.ibb.co/JBKhTLH/icons8-google-plus-96.png')",
    },
 
}))


export default function ContactDisplay() {
    let classes = useStyles();
    return (
        <>
        <section className={classes.ContactDisplay_main_display}>
            <Container style={{height : '100%'}}>
                <Grid container style={{height : '100%'}}>
                    
                    <Grid item sm={3}>
                        <div className={classes.left_part}>
                            <Typography className={classes.text_style}>About Us</Typography>
                            <Typography className={classes.text_style}>Contact Us</Typography>
                            <Typography className={classes.text_style}>Sell With Us</Typography>
                            <Typography className={classes.text_style}>Shipping & Return Policy</Typography>
                            <Typography className={classes.text_style}>FAQs</Typography>
                        </div>
                    </Grid>
                    
                    <Grid item sm={5}>
                        <div className={classes.middle_part}> 
                            <div style={{height :'50%'}}>
                                <Typography className={classes.text_style}>Knowhere,  2nd Floor Solanki Complex,Guna 473001, Madhya Pradesh India</Typography>
                            </div>
                            <div style={{height :'50%'}}> 
                                <Typography className={classes.text_style}>07542-265873, 9174762509</Typography>
                                <Typography className={classes.text_style}>curated@cart.org</Typography>
                            </div>
                        </div>
                    </Grid>
                    
                    <Grid item sm={4}>
                        <div className={classes.right_part}>
                            <Typography className={classes.text_style}>Receive all our news & updates</Typography>
                            <form  noValidate>
                                
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email1"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="off"
                                />
                                
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    >
                                    Subscribe Now
                                </Button>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
        <section className={classes.footer}>
            <Container style={{height : '100%'}}>
                <Grid container style={{height : '100%'}}>
                    <Grid item sm={9} style={{display : 'flex',flexFlow:'row',alignItems:'center'}}>
                        <Typography>STAY IN THE LOOP?</Typography>
                        <Typography className={[classes.twitter,classes.icon].join(' ')} />
                        <Typography className={[classes.google_plus,classes.icon].join(' ')}/>
                        <Typography className={[classes.instagram,classes.icon].join(' ')}/>
                        <Typography className={[classes.facebook,classes.icon].join(' ')}/>
                    </Grid>
                    <Grid item sm={3} style={{display : 'flex',alignItems:'center'}} alignItems='center'>
                        <Typography >©Curated Cart 2020</Typography>
                    </Grid>
                </Grid>
            </Container>
        </section>
        </>
    )
}
