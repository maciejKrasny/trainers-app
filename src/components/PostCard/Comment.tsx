import React from 'react';
import {CommentContainer, ContentContainer, useStyles, UserName, CommentContent} from './PostCard.styled';
import {Avatar} from "@material-ui/core";

interface CommentProps {
    name: string;
    surname: string;
    comment: string;
}

const Comment: React.FC<CommentProps> = ({name, surname, comment}) => {
    const classes = useStyles();

    return (
        <CommentContainer>
            <Avatar className={classes.avatar}>{`${name[0]}${surname[0]}`}</Avatar>
            <div>
                <UserName>{`${name} ${surname}`}</UserName>
                <CommentContent>{comment}</CommentContent>
            </div>
        </CommentContainer>
    );
}

export default Comment;