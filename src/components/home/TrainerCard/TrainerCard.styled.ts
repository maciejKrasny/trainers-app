import styled from 'styled-components';
import {Card, CardContent, Chip, Typography} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {deepOrange} from "@material-ui/core/colors";

export const StyledCard = styled(Card)`
    position: relative;
    width: 100%;
    margin-top: 1px;
`;

export const StyledCardContent = styled(CardContent)`
    position: relative;
`;

export const SpecializationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 300px;
  margin-right: 2rem;
`;

export const StyledChip = styled(Chip)`
    margin-left: 0.5rem;

    :first-child {
        margin-left: 0;
    }
`;

export const ViewProfileButtonContainer = styled.div`
    position: absolute;
    right: 2rem;
    bottom: 1rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DetailsInfoContainer = styled.div`
  margin-left: 1rem;
`;

export const Location = styled.div`
  font-size: 1rem;
`;

export const Description = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }),
);