import * as React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'
import ScrollAnimation from 'react-animate-on-scroll'

import digital_middle_landing_mobile from '../../../images/digital_middle_landing_mobile.png'
import digital_middle_landing_landscape from '../../../images/digital_middle_landing_landscape.png'

import './styles.scss'
import '../../../styles/global.scss'

const LandingMiddle: React.StatelessComponent<{}> = () => {
  return (
    <div className="LandingMiddle">
      <ScrollAnimation animateIn="fadeIn" delay={300} className="text_area">
        {/* <div className="text_area"> */}
        <div className="heading">
          Your best digital life,
          <br /> powered by <span className="color_red">Sylo</span>
        </div>
        <div className="content">
          The Sylo app creatively combines next-gen technologies to
          <br /> redefine connection, security and privacy.
          <br />
          <br /> We couldn't see your messages even if we wanted to.
          <br />
          <br /> Our vision is to break the cycle and empower you with choice.
          <br />
          From design to data, you come first.
        </div>
        {/* </div> */}
      </ScrollAnimation>
      <ResponsiveImage className="phone_img">
        <ResponsiveImageSize
          default
          minWidth={0}
          path={digital_middle_landing_mobile}
        />
        <ResponsiveImageSize
          minWidth={576}
          path={digital_middle_landing_landscape}
        />
      </ResponsiveImage>
    </div>
  )
}

export default LandingMiddle
