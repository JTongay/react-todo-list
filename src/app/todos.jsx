import React, { PropTypes } from 'react'

export default class TodosComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name
    }
  }

  showNewName() {
    // var parent = this._reactInternalInstance._currentElement._owner._instance;
    // console.log("parent:", parent);
    setTimeout(()=>{
      this.setState({
        name: "shit"
      })
    }, 5000)
  }

  render () {
    console.log(this.context);
    return (
      <div>
        <h2>Shit son</h2>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
