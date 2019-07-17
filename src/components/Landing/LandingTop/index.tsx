import * as React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'
import { Parallax } from 'react-scroll-parallax'
import { CSSTransitionGroup } from 'react-transition-group'
import { Animated } from 'react-animated-css'

import plane from '../../../images/plane.png'
import top_mountain_effect_landing from '../../../images/top_mountain_effect_landing.png'
import middle_mountain_effect_landing from '../../../images/middle_mountain_effect_landing.png'
import bottom_mountain_effect_landing from '../../../images/bottom_mountain_effect_landing.png'

import phone_front_landing from '../../../images/phone_front_landing.png'
import phone_back_landing from '../../../images/phone_back_landing.png'

import man from '../../../images/man.png'
import lady from '../../../images/lady.png'

import app_store_landing from '../../../images/app_store_landing.png'
import google_play_landing from '../../../images/google_play_landing.png'

import './styles.scss'
import '../../../styles/global.scss'

const LandingTop: React.StatelessComponent<{}> = () => {
  return (
    <div className="LandingTop">
      <div className="text_area">
        <Animated
          animationIn="slideInUpCustom"
          animationOut="fadeOut"
          animationInDelay={0}
          animationInDuration={500}
          isVisible={true}
        >
          <div className="heading">A BETTER WAY TO CONNECT</div>
          <div className="content">
            <span className="color_red">Private</span> messaging
            <br className="rwd-break" /> like never before
          </div>
        </Animated>

        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDelay={1000}
          animationInDuration={1000}
          isVisible={true}
        >
          <div className="store_buttons">
            <img src={app_store_landing} className="app_store" />
            <img src={google_play_landing} className="google_store" />
          </div>
        </Animated>
      </div>

      <div className="image_area">
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDelay={1500}
          isVisible={true}
        >
          <ResponsiveImage className="plane_img">
            <ResponsiveImageSize default minWidth={0} path={''} />
            <ResponsiveImageSize minWidth={576} path={plane} />
          </ResponsiveImage>
        </Animated>
        <Animated
          animationIn="bounceInUpOneTime"
          animationOut="fadeOut"
          animationInDuration={1500}
          animationInDelay={0}
          isVisible={true}
          className="top_mountain"
        >
          <Parallax className="" y={[0, -20]}>
            <img src={top_mountain_effect_landing} />
          </Parallax>
        </Animated>
        <Animated
          animationIn="bounceInUpOneTimeMiddleMountain"
          animationOut="fadeOut"
          animationInDuration={1000}
          animationInDelay={0}
          isVisible={true}
          className="middle_mountain"
        >
          <img src={middle_mountain_effect_landing} className="" />
        </Animated>
        <Parallax className="bottom_mountain" y={[5, -25]}>
          <img src={bottom_mountain_effect_landing} className="" />
        </Parallax>
        <Animated
          animationIn="bounceInUpOneTime"
          animationOut="fadeOut"
          animationInDuration={1300}
          animationInDelay={100}
          isVisible={true}
          className="phone_back"
        >
          <img src={phone_back_landing} className="" />
        </Animated>
        <Animated
          animationIn="bounceInUpOneTime"
          animationOut="fadeOut"
          animationInDuration={1000}
          animationInDelay={100}
          isVisible={true}
          className="phone_front"
        >
          <img src={phone_front_landing} className="" />
        </Animated>
        <Animated
          animationIn="ManPopUp"
          animationOut="fadeOut"
          animationInDuration={1200}
          animationInDelay={300}
          isVisible={true}
          className="man"
        >
          <img src={man} className="" />
        </Animated>
        <Animated
          animationIn="LadyPopUp"
          animationOut="fadeOut"
          animationInDuration={1000}
          animationInDelay={300}
          isVisible={true}
          className="lady"
        >
          <Parallax className="bottom_mountain" y={[0, -25]}>
            <img src={lady} className="" />
          </Parallax>
        </Animated>
      </div>
    </div>
  )
}

export default LandingTop
