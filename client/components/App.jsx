import React from 'react'
import Pixel from './Pixel.jsx'

class App extends React.Component {
  state = {
    visible: true
}

  generatePixel (num) {
    let print = []
    for (let i = 0; i < num; i++) {
      print.push(<Pixel />)
    }
    return print
  }

  clickHandler = (evt) => {
    this.setState({
      visible: false
    })
  }

  render () {
    return (
      <div id='app'>
        {this.generatePixel(100)}
        
          <button onClick={this.clickHandler}>HIDE ME</button>
          {this.state.visible && <Pixel />}
      
      </div>
    )
  }
}

export default App
