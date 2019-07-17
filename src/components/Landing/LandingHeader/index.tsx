import * as React from 'react'
import { NavLink } from 'react-router-dom'
import HoverImage from 'react-hover-image'

import logo from '../../../images/logo.png'
import download_ios_btn_normal from '../../../images/download_ios_btn_normal.png'
import download_ios_btn_hover from '../../../images/download_ios_btn_hover.png'

import download_android_btn_normal from '../../../images/download_android_btn_normal.png'
import download_android_btn_hover from '../../../images/download_android_btn_hover.png'

import get_the_app_btn_normal from '../../../images/get_the_app_btn_normal.png'
import get_the_app_btn_hover from '../../../images/get_the_app_btn_hover.png'

import { Navbar, Nav } from 'react-bootstrap'
import './styles.scss'

const LandingHeader: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <div className="LandingHeader row justify-content-center fixed-top">
        <Navbar className="col-10 col-sm-8" expand="sm">
          <Navbar.Brand href="#/">
            {' '}
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ml-sm-auto">
            <a
              href="https://testflight.apple.com/join/1LJpzNNN"
              target="_blank"
              className="nav-link landscape"
            >
              <HoverImage
                src={download_ios_btn_normal}
                hoverSrc={download_ios_btn_hover}
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=io.sylo.dapp"
              target="_blank"
              className="nav-link landscape"
            >
              <HoverImage
                src={download_android_btn_normal}
                hoverSrc={download_android_btn_hover}
              />
            </a>
            <NavLink className="nav-link mobile" to="/">
              <HoverImage
                src={get_the_app_btn_normal}
                hoverSrc={get_the_app_btn_hover}
              />
            </NavLink>
          </Nav>
        </Navbar>
      </div>
    </div>
  )
}

export default LandingHeader
