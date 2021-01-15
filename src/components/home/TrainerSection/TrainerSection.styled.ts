import styled from 'styled-components';
import trainer from './coach_profile.jpg';
import {Card} from "@material-ui/core";
import {GridContainer} from "../Grid/Grid.styled";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {deepOrange} from "@material-ui/core/colors";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  min-height: 300px;
  background-image: url(${trainer});
  background-size: cover;
`;

export const CoverGrid = styled(GridContainer)`
    margin-top: -100px;

`;

export const ContainerCard = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 200px;
  flex-direction: column;
  justify-content: center;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const InfoText = styled.div`
  font-size: 1rem;
  margin-left: 0.5rem;
`;

export const UnavailableSiteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
            width: theme.spacing(14),
            height: theme.spacing(14),
            fontSize: '2rem',
        },
    }),
);

export const UserInfo = styled.div`
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.lightGrey01};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0.25rem;
  color: ${({theme}) => theme.colors.darkGrey02}
`;