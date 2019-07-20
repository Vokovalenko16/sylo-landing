import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import LandingPage from './components/Landing/LandingPage';
import { render } from 'react-dom';

import Lottie from 'react-lottie';
import animationData from './images/sylo-logo-animation.json';

interface IState {
  isLoading: boolean;
}
export class AppRouter extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { isLoading: true };
  }
  // fake authentication Promise
  private authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      this.setState({ isLoading: false });
      console.log(this.state.isLoading);
    });
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <ParallaxProvider>
        <HashRouter>
          {this.state.isLoading ? (
            <Lottie options={defaultOptions} height={400} width={400} />
          ) : (
            <Route component={LandingPage} />
          )}
        </HashRouter>
      </ParallaxProvider>
    );
  }
}
