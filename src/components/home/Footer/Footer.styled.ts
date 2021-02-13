import styled from 'styled-components';
import {GridContainer} from "../Grid/Grid.styled";

export const FooterContainer = styled.div`
position: sticky;
  top: 100vh;
  padding: 1.5rem;
  margin-top: 6rem;
  background: rgb(31,31,37);
  background: linear-gradient(90deg, rgba(31,31,37,1) 0%, rgba(46,47,55,1) 14%, rgba(32,33,38,1) 50%, rgba(46,47,55,1) 86%, rgba(31,31,37,1) 96%);
`;

export const FooterContent = styled(GridContainer)`
  display: flex;
  flex-direction: row;
  color: white;
`;

export const InfoContainer = styled.div`
`;

export const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  margin-bottom: 0.5rem;
`;

export const InfoText = styled.div`
  margin-left: 1rem;
  font-size: 1rem;
  line-height: 1rem;
  white-space: nowrap;
`;

export const AboutContainer = styled.div`
  margin-left: 10rem;
`;

export const AboutCompany = styled.div`
  font-weight: 700;
`;

export const AboutCompanyText = styled.div`
    color: #ccc;
  text-align: justify;
`;