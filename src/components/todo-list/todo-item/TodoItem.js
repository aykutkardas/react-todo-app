import React from 'react'
import Icon from 'react-icons-kit'
import { bin, checkmark, checkmark2, cancelCircle } from 'react-icons-kit/icomoon/'

class TodoItem extends React.Component {

	constructor(props) {

		super(props)
		this.state = {confirm: false}
		this.openConfirm = this.openConfirm.bind(this)
		this.handleDone = this.handleDone.bind(this)
		this.handleDelete = this.handleDelete.bind(this)

	}

	render(){
		
		return (
			<li className="Todo-item">

				<span className={'Todo-item-name' + (this.props.isDone ? ' isDone' : null)}>{this.props.item}</span>

				<div className={'Todo-delete-confirm ' + (this.state.confirm ? 'isHidden' : 'isShow')}>
					<span className="Todo-item-delete" onClick={this.openConfirm} title="Delete this item."><Icon icon={bin} /></span>
					<span className="Todo-item-done"   onClick={this.handleDone} title="Done this item.">
						<Icon className={this.props.isDone ? 'isDoneCheck' : ''} icon={this.props.isDone ? checkmark : checkmark2} />
					</span>
				</div>

				<div className={'Todo-delete-confirm ' + (this.state.confirm ? 'isShow' : 'isHidden')}>
					<span className="Todo-delete-confirm-yes" title="Delete" onClick={() => { this.handleDelete(true)  }}><Icon icon={bin} /></span>
					<span className="Todo-delete-confirm-no"  title="Cancel" onClick={() => { this.setState({confirm: false}) }}><Icon icon={cancelCircle} /></span>
				</div>

			</li>
		)
	}

	openConfirm() {
		this.setState({confirm: true})
	}

	handleDone() {
		this.props.onDone(this.props.id)
	}

	handleDelete() {
		this.props.onDelete(this.props.id)
	}

}


export default TodoItem