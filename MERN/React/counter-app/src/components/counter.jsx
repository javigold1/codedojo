import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        // console.log('Increment Clicked', this);
        this.setState({ count: this.state.count + 1 })
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={ tag }>{ tag }</li>)}</ul>;
    }


    render() {
        return (<div>
            <span className="">{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary">Increment</button>
            {/* {this.state.tags.length === 0 && 'Please create a new tag!'} */}
            {this.renderTags() }
        </div>);
    }

    formatCount() {
        return (this.state.count)
    }

}
 
export default Counter;