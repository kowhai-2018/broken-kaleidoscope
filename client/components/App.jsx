import React from 'react'
import Pixel from './Pixel'


function fillArray(value, length) {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(value)
  }
  return arr
}

class App extends React.Component {
  render () {
    return fillArray(<Pixel/>, 1000)
  }
}

export default App
