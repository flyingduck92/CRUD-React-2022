import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'

const root = document.querySelector('#root')
const StrictModeApp =
  <React.StrictMode>
    <App />
  </React.StrictMode>

ReactDOM.render(StrictModeApp, root)