import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const width = 100
const height = width

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        width,
        height,
        backgroundColor: randomHexColor()
    }
  }
  }
  changeColour = () => {
    const style = {
      width,
      height,
      backgroundColor: randomHexColour()
    }

    this.setState({
      style
    })
}
render () {
    const { style } = this.state
    return (
      <div
        onClick={() => this.changeColour()}
        onMouseEnter={() => this.changeColour()}
        style={style} />
    )
}
}

export default Pixel
