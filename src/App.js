import React from 'react'

// Libraries
import axios from 'axios'

// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import AddItem from './components/add-item/AddItem'
import TodoList from './components/todo-list/TodoList'

class App extends React.Component {

	constructor(){
		super()
		this.state = { todos: [] }
		this.apiUrl = 'http://5a9bc184c8b35c0012b44ab0.mockapi.io/todos/'
	}

	componentDidMount() {
		axios.get(this.apiUrl)
			.then((res) => {
				this.setState({ todos: res.data })
			})
	}	

	render() {
		return (
			<div className="App">
				<Header />

				<div className="App-Main">

					<AddItem onAdd={this.onAdd} />
					<TodoList onDone={this.onDone} onDelete={this.onDelete} todos={this.state.todos} />

				</div>

				<Footer />
			</div>
		)
	}


	onAdd = (item) => {
		axios.post(this.apiUrl, item)
			.then((res) => {
				this.setState(
					(prevState) => {
						prevState.todos.push(res.data)
						return { todos: prevState.todos }
					}
				)
			})

	}

	onDone = (id) => {

		let updateData

		for(let i = 0; i < this.state.todos.length; i++) {
			const todo = this.state.todos[i]
			if(todo.id === id) {
				todo.isDone = !todo.isDone
				updateData = {isDone: todo.isDone}
			} 
		}

		axios.put(this.apiUrl + id, updateData)
			.then(()=>{
				this.setState({
					todos: this.state.todos
				})
			})
		
	}

	onDelete = (id) => {
		axios.delete(this.apiUrl + id)
			.then(()=>{
				const index = this.state.todos.map(e => { return e.id }).indexOf(id)
				this.state.todos.splice(index, 1)
				this.setState({
					todos: this.state.todos
				})
			})
	}

  
}

export default App
