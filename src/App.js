import React, { Component } from 'react';

// Stylesheets
import './css/App.css';

// Components
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos: ['Learn to React', 'Learn to React Native'].sort()
    }
  }

  render() {

    var todos = this.state.todos.map((item, index) => {
      return <TodoItem item={item} key={index} onDelete={this.onDelete} />;
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

    var todos = this.state.todos;
    todos.push(item);

    this.setState({
      todos
    });

  }

  onDelete = (item) => {

    var todos = this.state.todos;
    var itemKey = todos.indexOf(item);

    if(itemKey !== -1) todos.splice(itemKey, 1);

    this.setState({
      todos
    });
    
  }

  
}

export default App;
