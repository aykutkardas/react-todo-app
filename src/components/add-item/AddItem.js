import React, { Component } from 'react';

class AddItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            newItem: '',
            inputEl: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input autoFocus="true" className="new-item" type="text" onChange={this.handleChange} placeholder="+  New item" />
            </form>
        );
    }

    handleChange = (e) => {
        this.setState({
            newItem: e.target.value,
            inputEl: e.target
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let newItem = this.state.newItem;

        if(newItem.trim() !== "") {
            this.props.onAdd(newItem);
            let inputEl = this.state.inputEl;
            inputEl.value = "";
        }
    }

}

export default AddItem;