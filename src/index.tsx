import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppRouter } from './router'
import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'
import './components/Landing/LandingPage'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Raleway', 'sans-serif']
  }
})

ReactDOM.render(<AppRouter />, document.getElementById('root'))
registerServiceWorker()
