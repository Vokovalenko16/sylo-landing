import * as React from 'react';

import './styles.scss';
import download_sylo_with_particle from '../../images/download_sylo_with_particle.png';
import apple_app_store from '../../images/footer/app-store-badge-us-b.svg';
import google_play_store from '../../images/footer/google-play-badge-us.svg';

const DownloadWidget: React.StatelessComponent<{}> = () => {
  return (
    <div className="DownloadWidget">
      <div className="caption">
        <img src={download_sylo_with_particle} className="" />
      </div>
      <div className="container">
        <div className="stores">
          <a
            href="https://play.google.com/store/apps/details?id=io.sylo.dapp"
            target="_blank"
          >
            <img src={google_play_store} />
          </a>
          <a href="https://testflight.apple.com/join/1LJpzNNN" target="_blank">
            <img src={apple_app_store} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadWidget;
