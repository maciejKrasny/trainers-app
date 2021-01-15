import React from "react";
import { GridContainer } from "../Grid/Grid.styled";
import { FooterContainer, FooterContent, InfoContainer, AboutCompany, AboutCompanyText, AboutContainer,InfoRow,InfoText } from './Footer.styled';
import {LocationOn, MailOutline, Phone} from "@material-ui/icons";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
          <InfoContainer>
            <InfoRow>
              <LocationOn/>
              <InfoText>ul. Kwiatkowskiego, Poznań</InfoText>
            </InfoRow>
              <InfoRow>
                  <Phone/>
                  <InfoText>+48 123 112 123</InfoText>
              </InfoRow>
              <InfoRow>
                  <MailOutline/>
                  <InfoText>trzenerzy@skrzynka.pl</InfoText>
              </InfoRow>
          </InfoContainer>
          <AboutContainer>
              <AboutCompany>O firmie</AboutCompany>
              <AboutCompanyText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </AboutCompanyText>
          </AboutContainer>
      </FooterContent>
    </FooterContainer>
  )
};

export default Footer;
