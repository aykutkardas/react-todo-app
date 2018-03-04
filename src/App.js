import React from 'react'

// Libraries
import axios from 'axios'

// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import TodoItem from './components/todo-item/TodoItem'
import AddItem from './components/add-item/AddItem'

class App extends React.Component {

	constructor(){
		super()
		this.state = {
			todos: []
		}

		this.apiUrl = 'http://5a9bc184c8b35c0012b44ab0.mockapi.io/todos/'
	}

	componentDidMount() {
		axios.get(this.apiUrl)
			.then((res) => {
				this.setState({ todos: res.data })
			})
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

		const index = this.state.todos.map(e=>{ return e.id }).indexOf(id)

		
		axios.delete(this.apiUrl + id)
			.then(()=>{
				this.state.todos.splice(index, 1)
				this.setState({
					todos: this.state.todos
				})
			})

	}

  
}

export default App
