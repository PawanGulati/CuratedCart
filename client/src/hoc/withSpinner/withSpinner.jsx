import React from 'react'

import Loader from 'react-loader-spinner'

export default WrappedComponent => ({isLoading, ...props}) => {
    return isLoading ? (
        <Loader
            type="Puff"
            color="#C4C49D"
            height={100}
            width={100}
            timeout={0}
        />        
    ):(
        <WrappedComponent {...props} />
    )
}
