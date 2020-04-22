if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const stripe = require('stripe')(process.env.SECRET_KEY_STRIPE) 

// parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// cors
app.use(cors())



if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"client/build")))

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,"client/build","index.html"))
    })
}

app.post('/payment',(req,res)=>{
    // we will take token from client, which hav id, info of card, cost n all, from where req is cmg
    const body={
        source: req.body.token.id,
        amount:req.body.amount,
        currency:"inr"
    }

    // console.log(body);
    
    // MAKE CHARGE to stripe and send response to client accordingly
    stripe.charges.create(body,(stripeErr,stripeRes)=>{
        // if making charge to stripe goes wrong
        if(stripeErr) res.status(500).send({error:stripeErr})
        // sending success response after charging to stripe
        else res.status(200).send({success:stripeRes})
    })
})

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`server\'s running @${port}`);
})

