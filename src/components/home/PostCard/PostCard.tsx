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
import {api_url} from "../../../api/setup";

interface PostCardProps {
    title: string;
    content: string;
    image?: string;
    id: string;
    comments?: Comment[];
    authorName?: string;
    authorSurname?: string;
    commentsCount: number;
    avatar?: string;
    authorId?: string;
}

const featuredImageUrl = (featuredImage = '') => {
    return `http://trenerzy.tomkowiak.eu/featured-images/${featuredImage}`;
}

const PostCard: React.FC<PostCardProps> = ({ authorId, avatar, image, commentsCount, authorName, authorSurname, content, title, comments, id}) => {
    const history = useHistory();
    const { authorization } = useSelector(state => state.authorizationUsers);
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const shorterContent = content.length > 300 ? content.substr(0, 300) : content;

    const [commentValue, setCommentValue] = useState<string>('');

    const handleOnAdd = () => {
        if (commentValue.trim()) {
            dispatch(postThunks.addCommentToPost({postId: id, content: commentValue.trim()}, Boolean(authorId)));
            setCommentValue('');
        }
    }

    const handleToggleComments = (comments: Comment[], commentsCount: number) => {
        if (comments?.length !== commentsCount && !isCommentsOpen) {
           dispatch(postThunks.fetchPostComments(id, Boolean(authorId)));
        }
        setIsCommentsOpen(!isCommentsOpen);
    }

    return (
        <StyledCard style={{marginBottom: '1rem'}}>
            {authorName && authorSurname && (
                <DetailsContainer>
                    <Avatar className={classes.avatar} src={avatar ? `http://trenerzy.tomkowiak.eu/avatars/${avatar}` : undefined}>{`${authorName[0]}${authorSurname[0]}`}</Avatar>
                    <InfoContainer>
                        <Name>{`${authorName} ${authorSurname}`}</Name>
                    </InfoContainer>
                    <VisitButton onClick={() => history.push(`/${authorId}`)} variant={"contained"} color='primary'>Odwiedź</VisitButton>
                </DetailsContainer>
            )}
            <CardMedia
                style={{height: 400}}
                image={featuredImageUrl(image)}
            />
            <CardContent>
                <StyledTitle gutterBottom variant="h5">
                    {title}
                    <DropdownReport reportType="POST" reportId={id}/>
                </StyledTitle>
                <ContentContainer variant="body2" color="textSecondary">
                    {isReadMoreOpen ? content : `${shorterContent}`}
                    {content.length > 300 && <ReadMore onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}>{isReadMoreOpen ? "Pokaż mniej" : "Pokaż więcej"}</ReadMore>}
                </ContentContainer>
            </CardContent>
            {authorization?.user._id && <StyledCardActions>
                {!!commentsCount && <Button color="primary" onClick={() => handleToggleComments(comments || [], commentsCount)}>{isCommentsOpen ? "Ukryj komentarze" : "Pokaż komentarze"}</Button>}
                <span style={{marginLeft: 'auto'}}>{`${commentsCount} ${commentEnd(commentsCount)}`}</span>
            </StyledCardActions>}
            {authorization?.user._id && <CommnetsContainer>
                <AddCommentContainer>
                    <Avatar className={classes.avatar} src={authorization.user.userDetails.avatar ? `http://trenerzy.tomkowiak.eu/avatars/${authorization.user.userDetails.avatar}` : undefined}>{`${authorization.user.userDetails.firstName[0]}${authorization.user.userDetails.lastName[0]}`}</Avatar>
                    <StyledTextField onChange={(event) => setCommentValue(event.target.value)} value={commentValue} placeholder="Napisz komentarz"/>
                    <Button onClick={() => handleOnAdd()} variant="contained" color="primary">Dodaj</Button>
                </AddCommentContainer>
                {isCommentsOpen && comments?.length && comments.map(comment => {
                    return <CommentComponent
                        id={comment.id}
                        key={comment.id}
                        comment={comment.content}
                        name={comment.user.userDetails.firstName}
                        surname={comment.user.userDetails.lastName}
                        avatar={comment.user.userDetails.avatar}
                    />
                })}
            </CommnetsContainer>
            }
        </StyledCard>
    );
}

export default PostCard;