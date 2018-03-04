import React from 'react'

class AddItem extends React.Component {

	constructor(props){
		super(props)
		this.state = {newItem: ''}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	render() {
		const newItem = this.state.newItem
		return (
			<form onSubmit={this.handleSubmit}>
				<input autoFocus="true" className="new-item" type="text" value={newItem} onChange={this.handleChange} placeholder="+  New item" />
			</form>
		)
	}

	handleChange(e) {
		this.setState({newItem: e.target.value})
	} 

	handleSubmit(e) {
		
		e.preventDefault()

		let newItem = this.state.newItem

		if(newItem.trim() !== '') {
			this.props.onAdd({todo: newItem})
			this.setState({newItem: ''})
		}
	}
        
}

export default AddItem