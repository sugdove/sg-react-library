import React from 'react'
import ReactDOM from 'react-dom/client'
import { Wordle } from './src/index'
const root = ReactDOM.createRoot(
  document.getElementById('my-app') as HTMLElement
)
root.render(<Wordle />)
