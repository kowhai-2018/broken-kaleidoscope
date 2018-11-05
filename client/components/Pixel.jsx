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

  render () {
    return (
      <div style={this.state.style}></div>
    )
  }
}

export default Pixel
