import React from 'react';
import Item from '../components/item.js'
import './home.css'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
    this.handleEditTodo = this.handleEditTodo.bind(this)
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
    this.handleCreateTodo = this.handleCreateTodo.bind(this)
    this.handleSaveTodos = this.handleSaveTodos.bind(this)
  }

  async handleSaveTodos(){
    await localStorage.setItem('todos', this.state.todos)
  }

  handleDeleteTodo(id){
    var newTodos = this.state.todos
    newTodos.splice(id, 1);
    this.setState({
      todos: newTodos
    })
    this.handleSaveTodos()
  }

  handleCreateTodo(){
    const newTodos = this.state.todos;
    newTodos.unshift("-");
    this.setState({
      todos: newTodos
    })
    this.handleSaveTodos()
  }

  handleEditTodo(id, e){
    var newTodos = this.state.todos;
    newTodos[id] = e.target.value;
    this.setState({
      todos: newTodos
    })
    this.handleSaveTodos()
  }

  async componentDidMount(){
    //Load the todos into the buffer
    var storageTodos = await localStorage.getItem('todos');
    //parse the string
    storageTodos = storageTodos.split(",")
    this.setState({
      todos: storageTodos
    })
  }

  render(){
    return(
      <div className = 'home-container'>
        <h1>Your Todos:</h1>
        <div className = 'todo-container'>

          <button onClick = {this.handleCreateTodo}>New</button>

          {this.state.todos.map((e, i)=> {
            return(
              <Item key = {i}
              id = {i}
              handleDeleteTodo = {this.handleDeleteTodo}
              handleEditTodo = {this.handleEditTodo}
              value = {this.state.todos[i]}/>)
          })}

        </div>
      </div>
    )
  }
}

export default Home
