import styled from 'styled-components';
import {Card} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

export const TrainerCard = styled(Card)`
  margin-top: 2rem;
  :nth-child(odd) {
    margin-right: 1.5rem;
  }
  :nth-child(even) {
    margin-left: 1.5rem;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #E0E0E0;
  padding: 1.25rem 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Location = styled.div`
  font-size: 1rem;
`;

export const ReviewContainer = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #E0E0E0;
  height: 300px;
`;

export const VisitButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0.75rem 0;
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