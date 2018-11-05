import React from 'react'

// const Pixel = () => {
//   return (
//     <div style={{
//       fontFamily: 'Times New Roman',
//       height: '60px',
//       width: '60px',
//       backgroundColor: 'skyblue'
//     }}></div>
//   )
// }

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      style: {
        fontFamily: 'Times New Roman',
        height: '60px',
        width: '60px',
        backgroundColor: randomHexColor()
      }}    
  }

  clickHandler = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '60px',
        width: '60px',
        backgroundColor: randomHexColor()
      }
      
    })
  }

  mouseEnter = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '60px',
        width: '60px',
        backgroundColor: 'green'
      }
      
    })
  }

  rightClick = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '60px',
        width: '60px',
        backgroundColor: 'black'
      }
      
    })
  }

  doubleClick = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '60px',
        width: '60px',
        backgroundColor: 'white'
      }
      
    })
  }

  dragEnter = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '60px',
        width: '60px',
        backgroundColor: 'yellow'
      }
      
    })
  }

  render () {
    return (
      <div onClick={this.clickHandler} onMouseEnter={this.mouseEnter} onContextMenu={this.rightClick} onDoubleClick={this.doubleClick} onDragEnter={this.dragEnter} style={this.state.style}></div>
    )
  }
}

export default Pixel
