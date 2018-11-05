import React from 'react'

const randomHexColor = () => 
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: randomHexColor(),
        height: '50px',
        width: '50px'
      }
    }
  }
  clickHandler = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: randomHexColor(),
        height: '50px',
        width: '50px'
      }
    })
  }

  mouseEnter = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: 'green',
        height: '50px',
        width: '50px'
      }
    })
  }

  contextMenu = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: 'black',
        height: '50px',
        width: '50px'
      }
    })
  }

  doubleClick = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: 'white',
        height: '50px',
        width: '50px'
      }
    })
  }

  dragEnter = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: 'yellow',
        height: '50px',
        width: '50px'
      }
    })
  }

  render () {
    return (
      <div 
      onDragEnter={this.dragEnter} 
      onDoubleClick={this.doubleClick} 
      onMouseEnter={this.mouseEnter} 
      onClick={this.clickHandler} 
      onContextMenu={this.contextMenu} 
      style={this.state.style}>
      </div>
    )
  }
}

export default Pixel
