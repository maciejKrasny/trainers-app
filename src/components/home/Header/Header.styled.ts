import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import { GridContainer } from '../Grid/Grid.styled';
import {Typography} from "@material-ui/core";
import {hexToRGB, remCalc} from "../../../utils/styles/utils";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {deepOrange} from "@material-ui/core/colors";
import {ArrowDropDown} from "@material-ui/icons";

export const BackgroundContainer = styled.div<{isSticky?: boolean}>`
  position: ${({isSticky}) => isSticky ? 'sticky' : 'fixed'};
  z-index: 3;
  top: 0;
  width: 100%;
  ${({ theme }) => css`
    background-color: ${hexToRGB(theme.palette.primary.main, 0.85)}
  `};
  background: rgb(19,66,23);
  background: linear-gradient(90deg, rgba(19,66,23,0.9) 0%, rgba(20,69,24,0.9) 14%, rgba(25,85,30,0.9) 50%, rgba(20,69,24,0.9) 86%, rgba(19,66,23,0.9) 96%);
`;

export const HeaderContainer = styled(GridContainer)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primary};
  padding: 0.5rem 0;
`;

export const ActionContainer = styled.div`
  display: flex;
  color: white;
`;

export const Action = styled(Typography)`
    font-size: ${remCalc(18)};
  margin-left: 1rem;
  padding: 0.25rem 0;
  :hover {
    color: #E0E0E0;
    cursor: pointer;
  }
  transition: ${(props) => props.theme.transition} ;
`;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      avatar: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        width: theme.spacing(5),
        height: theme.spacing(5),
        fontSize: '1rem',
      },
    }),
);

export const AvatarContainer = styled.div`
  position: relative;
`;
