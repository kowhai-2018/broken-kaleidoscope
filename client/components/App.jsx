import React from 'react'
import Pixel from './Pixel'

const App = () => {
  // return [
  //   <Pixel />,
  //   <Pixel />,
  //   <Pixel />,
  //   <Pixel />,
  //   <Pixel />
  // ]
  return Array.from({length: 10000}, () => <Pixel />)
}

export default App
