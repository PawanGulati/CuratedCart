import React, { Component } from 'react'

import Preview from '../../components/Shop/Preview/Preview'
import Typography from '@material-ui/core/Typography'
import classes from './ShopPage.module.css'

export default class ShopPage extends Component {

    state={
        collection:[
            {
                id:6,
                title:'Clothes',
                items:[
                    {
                        id:7,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:7,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:7,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:7,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:7,
                        name:'',
                        imageURL:'',
                        price:10
                    },
                ]
            },            {
                id:8,
                title:'Electronics',
                items:[
                    {
                        id:9,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:10,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:11,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:12,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:13,
                        name:'',
                        imageURL:'',
                        price:10
                    },
                ]
            },            {
                id:14,
                title:'Footwear',
                items:[
                    {
                        id:15,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:16,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:17,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:18,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:19,
                        name:'',
                        imageURL:'',
                        price:10
                    },
                ]
            },            {
                id:20,
                title:'Furniture',
                items:[
                    {
                        id:21,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:22,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:23,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:24,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:25,
                        name:'',
                        imageURL:'',
                        price:10
                    },
                ]
            },            {
                id:26,
                title:'Watch',
                items:[
                    {
                        id:27,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:28,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:29,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:30,
                        name:'',
                        imageURL:'',
                        price:10
                    },{
                        id:31,
                        name:'',
                        imageURL:'',
                        price:10
                    },
                ]
            },
        ]
    }

    render() {
        const {collection} = this.state
        return (
            <div className={classes.ShopPage}>
                <Typography>Our Collections</Typography>
                {
                    collection.map(({id , ...rest}) =>(
                        <Preview key={id} {...rest} />
                    ))
                }
            </div>
        )
    }
}
