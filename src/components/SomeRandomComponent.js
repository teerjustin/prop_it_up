import React, { Component } from 'react';
    
    
class SomeRandomComponent extends Component {

    render() {
        console.log(this.props)
        return (
        <div> 
            <div> <h1> {this.props.user.lastName}, {this.props.user.firstName} </h1> </div>
            <div> <p> Age:{this.props.user.age} </p></div>
            <div> <p> Hair: {this.props.user.hair} </p></div>
        </div> );
    }
}
    
export default SomeRandomComponent;