import React, { Component } from 'react';
import classes from './MyNewComponent.module.css';

class PersonComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: parseInt(this.props.age)
        }
    }

    addBirthday = (e) => {
        this.setState({ age: this.state.age + 1})
    }



    render(){
        return(

            <div className={classes.card}>
                <div className={classes.content}>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <button onClick={ this.addBirthday }>Birthday button for {this.props.firstName}{this.props.lastName}</button>
                </div>
            </div>
        );

    }
}

export default PersonComponent;

// class Counter extends Component {
//     state = {
//         count: 10,
//     };

//     handleIncrement = () => {
//         // console.log('Increment Clicked', this);
//         this.setState({ count: this.state.count + 1 })
//     }    
// }

