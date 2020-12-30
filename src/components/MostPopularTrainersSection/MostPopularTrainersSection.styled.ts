import styled from 'styled-components';
import {Typography} from "@material-ui/core";
import {GridContainer} from "../Grid/Grid.styled";
import {Link} from "react-router-dom";

export const MostPopularTrainersTitle = styled(Typography)`
`;

export const MostPopularTrainersContainer = styled(GridContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const MostPopularTrainersGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
`;

export const MostPopularTrainersDescription = styled.div`
  font-weight: 300;
  color: ${({theme}) => theme.colors.darkGrey01};
  :after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: ${({theme}) => theme.palette.primary.main};
    margin: 13px auto 0;
  }
`;

export const AllTrainersLink = styled(Link)`
    font-size: 1.5rem;
    margin-top: 2.5rem;
    color: ${({theme}) => theme.colors.darkGrey02};
    :hover {
      color: ${({theme}) => theme.colors.darkGrey01};
    }
    transition: ${({theme}) => theme.transition};
`;