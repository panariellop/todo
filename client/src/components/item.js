import React, {Fragment} from 'react'
import propTypes from 'prop-types'

class Item extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isCompleted: false,
      editing: false
    }
  }

  moveButtons = {
    display: 'inline-block',
    marginLeft: '20px'
  }

  upDown = {
    fontSize: '17px',
    display: 'inline-block',
    marginLeft: '2px',
    marginRight: '2px',
  }

  todoMessage = {
    display: 'inline-block'
  }

  render(){
    return(
      <div className = 'item-container'>
        <div className = "item-input">
        {this.state.editing?
          <Fragment>
              <input 
              size = "15"
              value = {this.props.value}
                onChange = {(e) => {
                this.props.handleEditTodo(this.props.id, e)
              }}/>
            <button onClick = {() => {
                this.setState({
                  editing: false
                })
              }}>OK</button>
            
          </Fragment>
           :
           <Fragment>
          <p style = {this.todoMessage} 
          onClick = {() => {
              this.setState({
                editing:true
              })
            }}>{this.props.value}</p>
          
          <div style = {this.moveButtons}>
            
          <button onClick = {() => {
            this.props.handleMoveTodo(this.props.id, true)
          }}
          style = {this.upDown}>∧</button>
          <button 
          onClick = {() => {
            this.props.handleMoveTodo(this.props.id, false)
          }}
          style = {this.upDown}>∨</button>
          </div>
          </Fragment>
        }
        </div>


        <span className = "item-delete-btn">
          <button onClick = {()=>{
              this.props.handleDeleteTodo(this.props.id);
            }}>x</button>
        </span>
      </div>
    )
  }
}

Item.propTypes = {
  value: propTypes.string,
  id: propTypes.number
}

export default Item
