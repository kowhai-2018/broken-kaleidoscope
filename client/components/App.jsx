import React from 'react'
import Pixel from './Pixel'


function fillArray(value, length) {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(value)
  }
  return arr
}


let x = fillArray(<Pixel/>, 75)

// setInterval(render, 1000)

class App extends React.Component {
  
  render () {
    return x
  }
}

export default App
