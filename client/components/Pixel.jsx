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

const height = 20
const width = height

const randomHexColor = () => 
   `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


class Pixel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      style: {
        fontFamily: 'Times New Roman',
        height,
        width,
        backgroundColor: randomHexColor()
      }}    
      setInterval(this.changeColor, 1)
  }

  changeColor = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height,
        width,
        backgroundColor: randomHexColor()
      }
      
    })
  }

  clickHandler = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height,
        width,
        backgroundColor: randomHexColor()
      }
      
    })
  }

  mouseEnter = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height,
        width,
        backgroundColor: 'green'
      }
      
    })
  }

  rightClick = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height,
        width,
        backgroundColor: 'black'
      }
      
    })
  }

  doubleClick = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height,
        width,
        backgroundColor: 'white'
      }
      
    })
  }

  dragEnter = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height,
        width,
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
