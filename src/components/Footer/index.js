import {
  FooterDiv,
  FooterImg,
  FollowUsP,
  SocialMediaImgDiv,
  SocialMediaIcon,
} from './styledComponents'

const Footer = () => (
  <>
    <FooterDiv>
      <FooterImg
        src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719054497/Frame_62_cdjq6o.png"
        alt="footer image"
      />
      <div>
        <FollowUsP>Follow us on</FollowUsP>
        <SocialMediaImgDiv>
          <SocialMediaIcon
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719055511/001-instagram_uhzysd.png"
            alt="social media icon"
          />
          <SocialMediaIcon
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719056120/002-youtube_tl43jz.png"
            alt="social media icon"
          />
          <SocialMediaIcon
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719069709/003-twitter_beoqnc.png"
            alt="social media icon"
          />
          <SocialMediaIcon
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719069770/004-facebook_qophvo.png"
            alt="social media icon"
          />
          <SocialMediaIcon
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719069814/005-linkedin_bpusgd.png"
            alt="social media icon"
          />
        </SocialMediaImgDiv>
      </div>

      <FooterImg
        src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719054497/Frame_62_cdjq6o.png"
        alt="footer image"
      />
    </FooterDiv>
  </>
)

export default Footer
