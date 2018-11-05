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

class Pixel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      style: {
        fontFamily: 'Times New Roman',
        height: '60px',
        width: '60px',
        backgroundColor: 'skyblue'
      }}
  }

  render () {
    return (
      <div style={this.state.style}></div>
    )
  }
}

export default Pixel
