import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../css/TodoItem.css';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirm: false
        }
    }

    render(){
        return (
            <li className="todo-item animated rollIn" ref="item">
                <span className={'item-name animated ' + (this.state.confirm ? 'rollOut' : 'rollIn')}>{this.props.item}</span>
                <span className={'item-delete animated ' + (this.state.confirm ? 'rollOut' : 'rollIn')} onClick={this.openConfirm} title="Delete this item.">X</span>
                <div className={'confirm animated ' + (this.state.confirm ? ' isShow' : ' isHidden')}>
                    <span className={'confirm-yes animated ' + (this.state.confirm ? ' rollIn' : ' rollOut')} onClick={() => { this.handleDelete(true) }}>Y</span>
                    <span className={'confirm-no animated ' + (this.state.confirm ? ' rollIn' : ' rollOut')} onClick={() => { this.handleDelete(false) }}>N</span>
                </div>
            </li>
        );
    }

    openConfirm = () =>{
        this.setState({
            confirm: true
        })
    }

    handleDelete = (answer) => {

        if(answer) {
            this.props.onDelete(this.props.item);
        }

        this.setState({
            confirm: false
        })
    }

};


export default TodoItem;