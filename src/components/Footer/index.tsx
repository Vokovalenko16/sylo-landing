import * as React from 'react'
import DownloadWidget from '../DownloadWidget'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faMediumM,
  faTelegramPlane,
  faLinkedinIn,
  faYoutube,
  faRedditAlien,
  faBtc
} from '@fortawesome/free-brands-svg-icons'

import './styles.scss'

import gecko from '../../images/Gecko.svg'
export const Footer: React.StatelessComponent<{}> = () => {
  return (
    <div className="Footer">
      <div className="download-area">
        <DownloadWidget />
      </div>
      <div className="bottom_line">
        <div className="gecko_area">
        <a href="https://medium.com/sylo-io/sylo-awarded-the-worlds-first-official-ico-compliance-stamp-by-gecko-governance-e039b4423246" target="_blank">

          <img src={gecko} />
          <span>Gecko Accredited</span>
          </a>
        </div>
        <div className="introduction_text_area">
          <span>Whitepaper</span>
          <span>Media</span>
          <span>Our Team</span>
        </div>
        <div className="social_icon_area">
          <div className="up">
            <a href="https://twitter.com/sylo" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="social_icon" />
            </a>
            <a href="https://www.facebook.com/sylo.io" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="social_icon" />
            </a>
            <a href="https://medium.com/sylo-io" target="_blank">
              <FontAwesomeIcon icon={faMediumM} className="social_icon" />
            </a>
            <a href="https://www.linkedin.com/company/sylo.io" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} className="social_icon" />
            </a>
          </div>
          <div className="down">
            <a href="https://www.youtube.com/c/sylo_io" target="_blank">
              <FontAwesomeIcon icon={faYoutube} className="social_icon" />
            </a>
            <a href="https://t.me/sylo_io" target="_blank">
              <FontAwesomeIcon icon={faTelegramPlane} className="social_icon" />
            </a>
            <a href="https://www.reddit.com/r/sylo_io" target="_blank">
              <FontAwesomeIcon icon={faRedditAlien} className="social_icon" />
            </a>
            <a
              href="https://bitcointalk.org/index.php?topic=5034972"
              target="_blank"
            >
              <FontAwesomeIcon icon={faBtc} className="social_icon" />
            </a>
          </div>
        </div>
        <div className="privacy_area">
          <span className="policy">Privacy Policy</span>
          <span>© Sylo</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
