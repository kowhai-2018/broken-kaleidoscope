import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {style: {backgroundColor: 'cornflowerblue', height: '100px', width: '100px', display: 'inline'}}
  }

  render () {
    return (
      <div style={this.state.style}></div>
    )
  }
}

export default Pixel
