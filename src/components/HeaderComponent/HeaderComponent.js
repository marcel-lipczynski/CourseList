import React, { Component } from 'react';
import './HeaderComponent.css';

class HeaderComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <h1>Course List</h1>
                <button onClick={this.props.showModal}>Add course</button>
            </header>
        );
    }
}

export default HeaderComponent;