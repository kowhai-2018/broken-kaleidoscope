import React from 'react'
import Pixel from './color.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id='app'>
        <div>yup</div>
        <div><Pixel /> </div>
      </div>
    )
  }
}

export default App
