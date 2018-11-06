import React from 'react'
import Pixel from './Pixel'
const _ = require('lodash')

const App = () => {
  const loop = _.times(10000, () => {
    return <Pixel />
  })
  return loop
}

export default App
