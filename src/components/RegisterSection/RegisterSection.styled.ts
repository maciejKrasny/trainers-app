import styled from 'styled-components';
import {GridContainer} from "../Grid/Grid.styled";
import registerImage from './register_image.jpg';
import {hexToRGB} from "../../utils/styles/utils";

export const RegisterContainer = styled.div`
  position: relative;
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

`;

export const BackgroundContainer = styled.div`
  width: 100%;      
  height: 400px;
  background-image: url(${registerImage});
  background-size: cover;
  :after {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({theme}) => hexToRGB(theme.colors.darkGrey03, 0.6)};
  }
`;

export const InfoContainer = styled(GridContainer)`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Question = styled.div`
    color: white;
    font-size: 1.75rem;
    font-weight: 700;
`;

export const Answer = styled.div`
  color: white;
  font-size: 1.25rem;
  font-weight: 400;
  margin-top: 0.75rem;
  margin-bottom: 3rem;
`;



