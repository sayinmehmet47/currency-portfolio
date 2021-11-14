import styled from "styled-components";
import { FaDice } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #eeeff4;
  padding: 1rem 0 1rem 0;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #707070;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 50px;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 14px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 5px;
  font-size: 10px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  font-size: 14px;
  color: #707070;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #707070;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #30161671;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  justify-self: start;
`;

export const WebsiteRights = styled.small`
  color: #707070;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #707070;
  font-size: 24px;
  &:hover {
    border: 1.7px solid #fab1a0;
    transition: 0.1s ease-out;
  }
`;

export const License = styled.h4`
  color: #5a6274;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  background-color: black;
  padding: 30px 0px;
`;
