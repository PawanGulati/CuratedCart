import React, { Component } from 'react'

import ToolBar from '../components/ToolBar/Toolbar'
import Footer from '../components/Footer/Footer'

export default class Layout extends Component {
    render() {
        return (
            <>
                <ToolBar />
                {this.props.children}
                <Footer />
            </>
        )
    }
}
