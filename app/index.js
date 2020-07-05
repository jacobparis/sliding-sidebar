import './index.css'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import * as React from 'react'
import ReactDOM from 'react-dom'

import HomeScene from './scenes/home'

function App() {
  return <HomeScene />
}

ReactDOM.render(<App />, document.getElementById('root'))
