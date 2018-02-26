import React, { Component } from 'react';

// Stylesheets
import '../css/AddItem.css';

class AddItem extends Component {

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input autoFocus="true" className="new-item" type="text" ref="newItem" placeholder="+  New item" />
            </form>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var newItem = this.refs.newItem.value;

        if(newItem.trim() !== "") {
            this.props.onAdd(newItem);
            this.refs.newItem.value = "";
        }
    }

}

export default AddItem;