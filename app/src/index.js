import React from 'react'
import ReactDOM from 'react-dom'
import TagManager from 'react-gtm-module'

import App from './components/App'

TagManager.initialize({
  gtmId: 'GTM-MLFLVWP'
})

ReactDOM.render(<App />, document.getElementById('root'))
