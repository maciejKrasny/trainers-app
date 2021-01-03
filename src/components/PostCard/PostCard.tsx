import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React, {useState} from 'react';
import photo from '../../components/FilterSection/landing_img.png';
import {Comment} from "../../redux/modules/Posts/types";
import {
    AddCommentContainer,
    CommnetsContainer,
    ContentContainer,
    ReadMore,
    StyledCard,
    StyledTextField,
    useStyles,
    StyledCardActions
} from './PostCard.styled';
import {Avatar, } from "@material-ui/core";
import {useSelector} from "react-redux";
import CommentComponent from './Comment';
import {commentEnd} from "./PostCard.utils";

interface PostCardProps {
    title: string;
    content: string;
    image: string;
    id: string;
    comments?: Comment[];
    currentUserInitials?: string;
}

const PostCard: React.FC<PostCardProps> = ({content, title, comments, currentUserInitials}) => {
    const { users } = useSelector(state => state.users);
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const classes = useStyles();

    const shorterContent = content.length > 300 ? content.substr(0, 300) : content;
    return (
        <StyledCard style={{marginBottom: '1rem'}}>
            <CardMedia
                style={{height: 400}}
                image={photo}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <ContentContainer variant="body2" color="textSecondary">
                    {isReadMoreOpen ? content : `${shorterContent}...`}
                    {content.length > 300 && <ReadMore onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}>{isReadMoreOpen ? "Pokaż mniej" : "Pokaż więcej"}</ReadMore>}
                </ContentContainer>
            </CardContent>
            <StyledCardActions>
                <Button color="primary" onClick={() => setIsCommentsOpen(!isCommentsOpen)}>{isCommentsOpen ? "Ukryj komentarze" : "Pokaż komentarze"}</Button>
                <span>{`${comments?.length || 0} ${commentEnd(comments?.length || 0)}`}</span>
            </StyledCardActions>
            <CommnetsContainer>
                <AddCommentContainer>
                    <Avatar className={classes.avatar}>{currentUserInitials}</Avatar>
                    <StyledTextField placeholder="Napisz komentarz"/>
                    <Button variant="contained" color="primary">Dodaj</Button>
                </AddCommentContainer>
                {isCommentsOpen && comments?.map(comment => {
                    const commentOwner = users?.find(user => user.id === comment?.creator);
                    return <CommentComponent
                        comment={comment.content}
                        name={commentOwner?.name || ''}
                        surname={commentOwner?.surname || ''}
                    />
                }) }
                </CommnetsContainer>
        </StyledCard>
    );
}

export default PostCard;