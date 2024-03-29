import { FaLinkedin, FaStackOverflow, FaGithub } from 'react-icons/fa';

import {
  FooterContainer,
  FooterSubscription,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  License,
} from './Footer.elements';

function Footer() {
  return (
    <div className="shadow">
      <FooterContainer>
        <FooterSubscription></FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/sign-up">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/sayinmehmet/"
                target="_blank"
                aria-label="Linkedin"
                className="rounded-circle  px-2 pb-1 glass"
              >
                <FaLinkedin color="#0a66c2" title="linkedin" />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/sayinmehmet47"
                target="_blank"
                aria-label="Github"
                className="rounded-circle  px-2 pb-1 glass"
              >
                <FaGithub color="black" title="github" />
              </SocialIconLink>
              <SocialIconLink
                href="https://stackoverflow.com/users/15106423/sayinmehmet47"
                target="_blank"
                aria-label="Stackoverflow"
                className="rounded-circle px-2 pb-1 glass"
              >
                <FaStackOverflow color="#f48024" title="stackoveflow" />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
      <License>© 2021 MT-BANK</License>
    </div>
  );
}

export default Footer;
