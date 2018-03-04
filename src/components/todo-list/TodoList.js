import React from 'react'

import TodoItem from './todo-item/TodoItem'

class TodoList extends React.Component {

	render() {
		var todos = this.props.todos.map((item) => {
			return <TodoItem
				id={item.id}
				key={item.id}
				item={item.todo}
				isDone={item.isDone}
				onDelete={this.props.onDelete}
				onDone={this.props.onDone} />
		})

		return (
			<ul className="Todo">
				{todos.length > 0 ? todos : <p className="warn">to do list is empty...</p>}
			</ul>
		)
	}

}

export default TodoList