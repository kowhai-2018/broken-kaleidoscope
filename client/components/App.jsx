import React from 'react'
import Pixel from './color.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  addColor (num) {
    let print = []
    for (let i = 0; i < num; i++) {
      print.push(<Pixel />)
    }
    return print
  }

  render () {
    return (
      <div id='app'>
        {this.addColor(100)}
      </div>
    )
  }
}

export default App
