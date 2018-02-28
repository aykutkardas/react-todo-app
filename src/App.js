import React from 'react'

// Libraries
import LocalDB from 'local-db'

// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import TodoItem from './components/todo-item/TodoItem'
import AddItem from './components/add-item/AddItem'

class App extends React.Component {

	constructor(){
		super()
		this.todoTable = new LocalDB('todos')
		this.state = {
			todos: this.todoTable.read()
		}
	}

	render() {
		var todos = this.state.todos.map((item, index) => {
			return <TodoItem id={item.id} item={item.todo} isDone={item.isDone} key={index} onDelete={this.onDelete} onDone={this.onDone} />
		})

		return (
			<div className="App">
				<Header />

				<div className="App-Main">
					<AddItem onAdd={this.onAdd} />
					<ul className="Todo">
						{todos.length > 0 ? todos : <p className="warn">to do list is empty...</p>}
					</ul>
				</div>

				<Footer />
			</div>
		)
	}


	onAdd = (item) => {

		this.todoTable.insert({'todo': item})
		this.setState({
			todos: this.todoTable.read()
		})

	}

	onDone = (id) => {

		var todo = this.todoTable.read({'id': id})
		var isDone = !todo[0].isDone
		this.todoTable.update({'id': id}, {isDone: isDone})
		this.setState({
			todos: this.todoTable.read()
		})
	}

	onDelete = (id) => {

		this.todoTable.delete({'id':id})
		this.setState({
			todos: this.todoTable.read()
		})

	}

  
}

export default App
