import React from 'react'

export default function PreviewItem({name,imageURL,price}) {
    return (
        <div> {/* can take height of 350px  */}
            <div /> {/* FOR IMAGE  (could be like height of 95%) */}
            <div>
                {/* NAME              $PRICE (could be like height of 5%) */}
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}
