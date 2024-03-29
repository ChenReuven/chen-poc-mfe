import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Counter from './Counter'

const App = () => (
  <div className="container">
    <div>Name: remote1</div>
    <Counter app={{ name: 'remote1' }} />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
