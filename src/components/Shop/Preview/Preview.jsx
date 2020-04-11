import React from 'react'
import PreviewItem from '../PreviewItem/PreviewItem'
import Typography from '@material-ui/core/Typography'

export default function Preview({items, title}) {
    return (
        <div>
            <Typography>{title}</Typography>
            {
                //rendering only 4 item at a time of preview of each category 
                items
                .filter(( _ , i) =>i < 4)
                .map(({id , ...rest})  =>(
                    <PreviewItem key={id} {...rest} />
                ))
            }
        </div>
    )
}
