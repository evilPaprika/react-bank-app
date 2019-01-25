import React, { Component } from "react";
import "../styles/Footer.css";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  TelegramIcon,
  WhatsappIcon
} from "react-share";

class Footer extends Component {
  state = {};
  render() {
    const shareUrl = "http://example.com";
    const title = "example";
    return (
      <div className="box-wrapper footer-wrapper">
        <div>Поделитесь информацией о нас в соцсетях:</div>
        <div className="share">
          <div className="share__some-network">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="share__some-network__share-button"
            >
              <FacebookIcon size={24} round />
            </FacebookShareButton>
          </div>
          <div className="share__some-network">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="share__some-network__share-button"
            >
              <TwitterIcon size={24} round />
            </TwitterShareButton>
          </div>
          <div className="share__some-network">
            <TelegramShareButton
              url={shareUrl}
              title={title}
              className="share__some-network__share-button"
            >
              <TelegramIcon size={24} round />
            </TelegramShareButton>
          </div>
          <div className="share__some-network">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              className="share__some-network__share-button"
            >
              <WhatsappIcon size={24} round />
            </WhatsappShareButton>
          </div>
          <div className="share__some-network">
            <GooglePlusShareButton
              url={shareUrl}
              className="share__some-network__share-button"
            >
              <GooglePlusIcon size={24} round />
            </GooglePlusShareButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
