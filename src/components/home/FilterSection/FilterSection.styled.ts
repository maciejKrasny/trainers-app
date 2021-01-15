import styled from 'styled-components';
import CitySelect from '../Selects/CitySelect';
import background from './landing_img.png';
import {GridContainer} from "../Grid/Grid.styled";
import {Button, Card, Theme, withStyles} from "@material-ui/core";
import {hexToRGB} from "../../../utils/styles/utils";
import {green} from "@material-ui/core/colors";

export const FilterContainer = styled.div`
  position: relative;      
  display: flex;
  height: 700px;
  flex-direction: row;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;

`;

export const Filters = styled(GridContainer)`
  position: absolute;
  top: 50%;
`;

export const BackgroundContainer = styled(Card)`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  border-radius: 5px;
  flex-direction: row;
  background: ${hexToRGB('#ffffff', 0.8)};
`;

export const CitySelectContainer = styled.div`
    width: 350px;
`;

export const SpecializationsSelectContainer = styled.div`
    width: 400px;
`;

export const FindButton = withStyles((theme: Theme) => ({
    root: {
        backgroundColor: hexToRGB(green[900], 0.8),
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgb(18, 65, 22, 0.8)',
        },
    },
}))(Button);