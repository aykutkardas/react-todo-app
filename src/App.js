import React, { Component } from 'react';

// Libraries
import LocalDB from 'local-db'

// Stylesheets
import './css/App.css';

// Components
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';

class App extends Component {

  constructor(){
    super();

    this.todoTable = new LocalDB('todos');

    this.state = {
      todos: this.todoTable.read()
    }
  }

  render() {

    var todos = this.state.todos.map((item, index) => {
      return <TodoItem item={item.todo} key={index} onDelete={this.onDelete} />;
    });

    return (
      <div className="App">
        <AddItem onAdd={this.onAdd} />

        <ul className="Todo">
          {todos.length > 0 ? todos : <p className="warn">to do list is empty...</p>}
        </ul>
        
      </div>
    );
  }


  onAdd = (item) => {

    this.todoTable.insert({"todo": item});

    this.setState({
      todos: this.todoTable.read()
    });

  }

  onDelete = (item) => {

    this.todoTable.delete({"todo":item});

    this.setState({
      todos: this.todoTable.read()
    });
    
  }

  
}

export default App;
