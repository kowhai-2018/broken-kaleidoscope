import React from 'react'
import Pixel from './Pixel.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
}

  generatePixel (num) {
    let print = []
    for (let i = 0; i < num; i++) {
      print.push(<Pixel />)
    }
    return print
  }

  render () {
    return (
      <div id='app'>
        {this.generatePixel(1000)}
      </div>
    )
  }
}

export default App
