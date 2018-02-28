/*eslint-disable no-unused-vars*/
import React from 'react'
/*eslint-enable no-unused-vars*/

import ReactDOM from 'react-dom'
import App from './App'

import './css/index.css'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()