import React, { Component } from 'react';

import './TodoItem.css';

class TodoItem extends Component {

    render(){
        return (
            <li className="todo-item">
                <span className="item-name">{this.props.item}</span>
                <span className="item-delete" onClick={this.handleDelete} title="Delete this item.">X</span>
            </li>
        );
    }

    handleDelete = () => {
        this.props.onDelete(this.props.item);
    }

};


export default TodoItem;