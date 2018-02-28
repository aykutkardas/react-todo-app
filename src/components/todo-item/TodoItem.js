import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { bin, checkmark, checkmark2, cancelCircle } from 'react-icons-kit/icomoon/';

class TodoItem extends Component {

    constructor(props) {

        super(props);
        this.state = {
            confirm: false
        };

    }

    render(){
        return (
            <li className="Todo-item animated rollIn" ref="item">

                <span className={'Todo-item-name animated ' + (this.props.isDone ? ' isDone' : null)}>{this.props.item}</span>
                
                <div className = {'Todo-delete-confirm animated ' + (this.state.confirm ? 'isHidden' : 'isShow')}>
                    <span className={'Todo-item-delete animated ' + (this.state.confirm ? 'rollOut' : 'rollIn')} onClick={this.openConfirm} title="Delete this item."><Icon icon={bin} /></span>
                    <span className={'Todo-item-done   animated ' + (this.state.confirm ? 'rollOut' : 'rollIn')} onClick={this.handleDone} title="Done this item.">
                        <Icon className={this.props.isDone ? "isDoneCheck" : null} icon={this.props.isDone ? checkmark : checkmark2} />
                    </span>
                </div>

                <div className={'Todo-delete-confirm animated ' + (this.state.confirm ? ' isShow' : ' isHidden')}>
                    <span className={'Todo-delete-confirm-yes animated ' + (this.state.confirm ? ' rollIn' : ' rollOut')} onClick={() => { this.handleDelete(true)  }}><Icon icon={bin} /></span>
                    <span className={'Todo-delete-confirm-no  animated ' + (this.state.confirm ? ' rollIn' : ' rollOut')} onClick={() => { this.handleDelete(false) }}><Icon icon={cancelCircle} /></span>
                </div>

            </li>
        );
    }

    openConfirm = () =>{
        this.setState({
            confirm: true
        });
    }

    handleDone = () => {
        this.props.onDone(this.props.id);
    }

    handleDelete = (answer) => {

        if(answer)
            this.props.onDelete(this.props.id);

        this.setState({
            confirm: false
        });
    }

};


export default TodoItem;