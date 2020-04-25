import React, { Component } from 'react'

import ToolBar from '../components/ToolBar/Toolbar'
import SideDrawer from '../components/UI/SideDrawer/SideDrawer'
// import Footer from '../components/Footer/Footer'

export default class Layout extends Component {
    state={
        showSide:false
    }

    handleToggleSide = ()=>{
        this.setState({showSide:!this.state.showSide})
    }
    
    render() {
        return (
            <>
                <ToolBar toggleSide={this.handleToggleSide} />
                <SideDrawer show={this.state.showSide} toggleSide={this.handleToggleSide}/>
                {this.props.children}
            </>
        )
    }
}
