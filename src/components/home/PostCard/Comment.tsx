import React from 'react';
import {CommentContainer, ContentContainer, useStyles, UserName, CommentContent, DropdownContainer} from './PostCard.styled';
import {Avatar} from "@material-ui/core";
import DropdownReport from "../DropdownReport/DropdownReport";
import {api_url} from "../../../api/setup";
import {DetailsContainer} from "../TrainerCard/TrainerCard.styled";

interface CommentProps {
    id: string;
    name: string;
    surname: string;
    comment: string;
    avatar?: string;
}

const Comment: React.FC<CommentProps> = ({id, name, surname, comment, avatar}) => {
    const classes = useStyles();

    return (
        <CommentContainer>
            <Avatar className={classes.avatar} src={avatar ? `http://trenerzy.tomkowiak.eu/avatars/${avatar}` : undefined}>{`${name[0]}${surname[0]}`}</Avatar>
            <div>
                <UserName>{`${name} ${surname}`}</UserName>
                <CommentContent>{comment}</CommentContent>
            </div>
            <DropdownContainer>
                <DropdownReport reportType="COMMENT" reportId={id}/>
            </DropdownContainer>
        </CommentContainer>
    );
}

export default Comment;