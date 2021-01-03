import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import {Card, CardActions, TextField} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {deepOrange} from "@material-ui/core/colors";

export const ReadMore = styled.span`
  display: inline;
  margin-left: 1rem;
  cursor: pointer;      
  color: ${({theme}) => theme.palette.primary.main};
  :hover {
    color: #123b15;
  }
  transition: ${({theme}) => theme.transition};
`;

export const ContentContainer = styled(Typography)`
        height: auto;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;

`;

export const StyledCard = styled(Card)`
  height: auto;

  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
`;

export const CommnetsContainer = styled.div`
  border-top: 1px solid #E0E0E0;
  padding: 1rem;
`;

export const AddCommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  margin-right: 1rem;
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
`;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
            width: theme.spacing(5),
            height: theme.spacing(5),
            fontSize: 16,
            marginRight: 16
        },
    }),
);

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
`;

export const UserName = styled.div`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54)`;

export const CommentContent = styled.div`
  font-size: 14px;
`;