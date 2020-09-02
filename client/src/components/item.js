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

  render(){
    return(
      <div className = 'item-container'>
        {this.state.editing?
          <Fragment>
              <input value = {this.props.value}
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
          <h3 onClick = {() => {
              this.setState({
                editing:true
              })
            }}>{this.props.value}</h3>
        }


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
