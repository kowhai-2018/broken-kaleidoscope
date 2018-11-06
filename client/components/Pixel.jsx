import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
      }
    }
  }
  // this.setState({
  //   style: style
  // })
  render () {
    return (
      <div style={this.state.style}>
      </div>
    )
  }
}

export default Pixel
