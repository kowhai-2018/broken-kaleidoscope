import React from 'react'
import Pixel from './Pixel'

function fillArray (value, length) {
  let arr = Array.from({length: 75}, (v, i) => <Pixel/>)
  return arr
}


class App extends React.Component {
  render () {
    return fillArray()
  }
}

export default App
