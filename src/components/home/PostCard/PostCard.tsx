import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React, {useMemo, useState} from 'react';
import photo from '../FilterSection/landing_img.png';
import {Comment} from "../../../redux/modules/Posts/types";
import {
    AddCommentContainer,
    CommnetsContainer,
    ContentContainer,
    DetailsContainer,
    InfoContainer,
    Name,
    ReadMore,
    StyledCard,
    StyledCardActions,
    StyledTextField,
    StyledTitle,
    useStyles,
    VisitButton
} from './PostCard.styled';
import {Avatar,} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import CommentComponent from './Comment';
import {commentEnd} from "./PostCard.utils";
import DropdownReport from "../DropdownReport/DropdownReport";
import * as postThunks from '../../../redux/modules/Posts/thunks';
import {useHistory} from "react-router-dom";

interface PostCardProps {
    title: string;
    content: string;
    image: string;
    id: string;
    comments?: Comment[];
    currentUserInitials?: string;
    authorName?: string;
    authorSurname?: string;
}

const PostCard: React.FC<PostCardProps> = ({ authorName, authorSurname, content, title, comments, currentUserInitials, id}) => {
    const history = useHistory();
    const { authorization } = useSelector(state => state.authorizationUsers);
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const shorterContent = content.length > 300 ? content.substr(0, 300) : content;

    const [commentValue, setCommentValue] = useState<string>('');

    const handleOnAdd = () => {
        if (commentValue) {
            dispatch(postThunks.addCommentToPost({postId: id, content: commentValue}));
            setCommentValue('');
        }
    }

    return (
        <StyledCard style={{marginBottom: '1rem'}}>
            {authorName && authorSurname && (
                <DetailsContainer>
                    <Avatar className={classes.avatar}>{`${authorName[0]}${authorSurname[0]}`}</Avatar>
                    <InfoContainer>
                        <Name>{`${authorName} ${authorSurname}`}</Name>
                    </InfoContainer>
                    <VisitButton onClick={() => history.push(`/${id}`)} variant={"contained"} color='primary'>Odwiedź</VisitButton>
                </DetailsContainer>
            )}
            <CardMedia
                style={{height: 400}}
                image={photo}
                title="Contemplative Reptile"
            />
            <CardContent>
                <StyledTitle gutterBottom variant="h5">
                    {title}
                    <DropdownReport />
                </StyledTitle>
                <ContentContainer variant="body2" color="textSecondary">
                    {isReadMoreOpen ? content : `${shorterContent}`}
                    {content.length > 300 && <ReadMore onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}>{isReadMoreOpen ? "Pokaż mniej" : "Pokaż więcej"}</ReadMore>}
                </ContentContainer>
            </CardContent>
            {authorization?.user._id && <StyledCardActions>
                {comments?.length && <Button color="primary" onClick={() => setIsCommentsOpen(!isCommentsOpen)}>{isCommentsOpen ? "Ukryj komentarze" : "Pokaż komentarze"}</Button>}
                <span style={{marginLeft: 'auto'}}>{`${comments?.length || 0} ${commentEnd(comments?.length || 0)}`}</span>
            </StyledCardActions>}
            {authorization?.user._id && <CommnetsContainer>
                <AddCommentContainer>
                    <Avatar className={classes.avatar}>{currentUserInitials}</Avatar>
                    <StyledTextField onChange={(event) => setCommentValue(event.target.value)} value={commentValue} placeholder="Napisz komentarz"/>
                    <Button onClick={() => handleOnAdd()} variant="contained" color="primary">Dodaj</Button>
                </AddCommentContainer>
                {isCommentsOpen && comments?.map(comment => {
                    return <CommentComponent
                        key={comment._id}
                        comment={comment.content}
                        name={comment.author.userDetails.firstName}
                        surname={comment.author.userDetails.lastName}
                    />
                })}
            </CommnetsContainer>
            }
        </StyledCard>
    );
}

export default PostCard;