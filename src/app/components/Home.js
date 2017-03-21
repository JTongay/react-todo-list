import React, { PropTypes } from 'react'

export default class HomeComponent extends React.Component {
  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    }
    this.onMakeOlder = this.onMakeOlder.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    setTimeout(()=>{
      this.setState({
        status: 1
      })
    },2000)
    console.log("Constructor")
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillRecieveProps", nextProps)
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate", nextProps, nextState)
    // if(nextState.status === 1){
    //   return false
    // }
    return true
  }

  componentWillUpdate(nextProps, nextState){
    console.log("componentWillUpdate", nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState)
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
  }


  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    })
  }

  onChangeLink (){
    this.props.changeLink(this.state.homeLink)
  }

  onHandleChange(e){
    this.setState({
      homeLink: e.target.value
    })
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <p>In a new component!</p>
        <p>Your name is {this.props.name}, your age is {this.state.age}</p>
        <p>Status: {this.state.status}</p>
        <hr />
        <button onClick={this.onMakeOlder} className="btn btn-primary">Make me older</button>
        <hr />
        <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
        <hr />
        <input type="text" value={this.state.homeLink} onChange={this.onHandleChange} />
        <button className="btn btn-primary" onClick={this.onChangeLink}>Change Header Link</button>
      </div>
    )
  }
}

HomeComponent.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
}
