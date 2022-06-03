import React from 'react'
import ReactDOM from 'react-dom'

import { OasysProvider } from './contexts'
import App from './components/App'

ReactDOM.render(
  <OasysProvider>
    <App />
  </OasysProvider>,
  document.getElementById('root')
)
