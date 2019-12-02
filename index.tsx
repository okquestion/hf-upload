import React from 'react'
import ReactDom from 'react-dom'
import Example from './example'

function App() {
  return <Example />
}

ReactDom.render(<App />, document.getElementById('root'))
