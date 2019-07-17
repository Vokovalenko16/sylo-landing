import * as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import LandingPage from './components/Landing/LandingPage'
import { render } from 'react-dom'

export class AppRouter extends React.Component {
  componentDidMount() {
    const ele = document.getElementById('ipl-progress-indicator')
    if (ele) {
      // fade out
      ele.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = ''
      }, 2000)
    }
  }
  render() {
    return (
      <ParallaxProvider>
        <HashRouter>
          <Route component={LandingPage} />
        </HashRouter>
      </ParallaxProvider>
    )
  }
}
