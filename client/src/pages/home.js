import React from 'react';
import Item from '../components/item.js'
import './home.css';
import {Link} from 'react-router-dom'; 

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
    this.handleMoveTodo = this.handleMoveTodo.bind(this)
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
    if(newTodos[0]==="-"){
      return alert("Please edit the most recent todo.")
    }
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

  handleMoveTodo(id, moveUp){
    if(moveUp){
      //create temp
      if(id>0){
        var temp_arr = this.state.todos
        var temp = temp_arr[id-1]
        temp_arr[id-1] = temp_arr[id]
        temp_arr[id] = temp
        this.setState({
          todos: temp_arr
        })
      }
    
    }else{
      //create temp
      if(id<this.state.todos.length - 1){
        var temp_arr = this.state.todos
        var temp = temp_arr[id+1]
        temp_arr[id+1] = temp_arr[id]
        temp_arr[id] = temp
        this.setState({
          todos: temp_arr
        })
      }
      
    }
  }

  async componentDidMount(){
    //Load the todos into the buffer
    var storageTodos = await localStorage.getItem('todos');
    if(!storageTodos){
      storageTodos = "-"
    }
    //parse the string
    storageTodos = storageTodos.split(",")
    this.setState({
      todos: storageTodos
    })
  }

  aboutLinkStyle = {
    textDecoration: 'none',
    textAlign: 'center',
    alignItems: 'center', 
    display: 'flex', 
    width: '3em',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  newButton = {
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  render(){
    return(
      <div className = 'home-container'>
        <h1>Your Todos:</h1> 
        <Link style = {this.aboutLinkStyle} to = "/about">About</Link>
        <div className = 'todo-container'>

          <button onClick = {this.handleCreateTodo}
          style = {this.newButton}>New</button>

          {this.state.todos.map((e, i)=> {
            return(
              <Item key = {i}
              id = {i}
              handleDeleteTodo = {this.handleDeleteTodo}
              handleEditTodo = {this.handleEditTodo}
              handleMoveTodo = {this.handleMoveTodo}
              value = {this.state.todos[i]}/>)
          })}

        </div>
      </div>
    )
  }
}

export default Home
