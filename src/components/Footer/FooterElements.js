import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: black;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
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
  color: white;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #1be3d6;
    transition: 0.3 ease-out;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 20px;
`;

export const SocialMediaWrap = styled.div`
  text-align: center;
  font-size: 20px;
`;

export const SocialLogo = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const WebsiteRights = styled.p`
  font-size: 15px;
`;
