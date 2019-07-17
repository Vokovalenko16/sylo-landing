import * as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import LandingPage from './components/Landing/LandingPage'

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <ParallaxProvider>
      <HashRouter>
        <Route component={LandingPage} />
      </HashRouter>
    </ParallaxProvider>
  )
}
