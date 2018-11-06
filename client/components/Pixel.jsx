import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  let width = 50
  let height = width

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {style: {backgroundColor: randomHexColor(), height, width, display: 'inline'}}
  }

  clickHandler = (evt) => {
    this.setState({style: {backgroundColor: randomHexColor(), height, width, display: 'inline'}})
  }

  onMouseEnterHandler = (evt) => {
    this.setState({style: {backgroundColor: 'green', height, width, display: 'inline'}})
  }

  onContextMenuHandler = (evt) => {
    this.setState({style: {backgroundColor: 'black', height, width, display: 'inline'}})
  }

  // onDragEnterHandler = (evt) => {
  //   this.setState({style: {backgroundColor: 'red', height, width, display: 'inline'}})
  // }
  



  render () {
    return (
      <div>
        <div style={this.state.style} 
        onContextMenu={this.onContextMenuHandler} 
        onClick={this.clickHandler} 
        onMouseEnter={this.onMouseEnterHandler}>
        {/* onDragEnter={this.onDragEnterHandler} */}
        </div>
      </div>
    )
  }
}

export default Pixel
