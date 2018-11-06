import React from 'react'

const randomHexColor = () => 
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const height = 150
const width = height

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: randomHexColor(),
        height, width
        }
    }
  }
  clickHandler = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: randomHexColor(),
        height, width
      }
    })
  }

  mouseEnter = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: 'green',
        height, width
      }
    })
  }

  contextMenu = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: 'black',
        height, width
      }
    })
  }

  doubleClick = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: 'white',
        height, width
      }
    })
  }

  dragEnter = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        backgroundColor: 'yellow',
        height, width
      }
    })
  }

  render () {
    return (
      <div 
      onDragEnter={this.dragEnter} 
      onDoubleClick={this.doubleClick} 
      onMouseEnter={this.mouseEnter} 
      onClick={setInterval(this.clickHandler,1000)} 
      onContextMenu={this.contextMenu} 
      style={this.state.style}>
      </div>
    )
  }
}

export default Pixel
