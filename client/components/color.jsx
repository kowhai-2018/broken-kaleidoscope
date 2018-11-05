import React from 'react'
import { height } from 'window-size';

class Pixel extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <div style={{backgroundColor: 'blue', height: '100px', width: '100px', position: 'absolute'}}> Try me</div>
    )
  }
}

export default Pixel 