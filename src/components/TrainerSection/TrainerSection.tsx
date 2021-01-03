import React, {useEffect, useState} from 'react';
import {BackgroundImage, Container, ContainerCard, CoverGrid, InfoContainer, InfoRow, InfoText, UserInfo, useStyles} from './TrainerSection.styled';
import {useSelector} from "react-redux";
import {User} from "../../redux/modules/Users/types";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {Avatar, Card, CardContent, Tab, Tabs, Typography} from "@material-ui/core";
import TrainerRouter from "../Routers/TrainerRouter";
import { Phone, MailOutline, LocationOn } from '@material-ui/icons'
import {
    DetailsContainer,
    DetailsInfoContainer,
    SpecializationsContainer, StyledCardContent, StyledChip
} from "../TrainerCard/TrainerCard.styled";
import {Rating} from "@material-ui/lab";


interface TrainerSectionProps {

}

const TrainerSection: React.FC<TrainerSectionProps> = () => {
    const classes = useStyles();
    const { users } = useSelector(state => state.users);
    const [currentUser, setCurrentUser] = useState<User>();
    const { url } = useRouteMatch();
    const match = useRouteMatch<{ slug: string }>('/:id/:slug');
    const { id } = useParams<{ id: string }>();
    const history = useHistory();

    useEffect(() => {
        if (id) {
            const user = users.find(user => user.id === parseInt(id));
            setCurrentUser(user);
        }
    }, [id, users]);


    return (
        <Container>
            <BackgroundImage />
            <CoverGrid id="myCard">
                <ContainerCard>
                <UserInfo>
                <InfoContainer>
                    <DetailsContainer>
                        <Avatar className={classes.avatar} >{`${currentUser?.name[0]}${currentUser?.surname[0]}`}</Avatar>
                        <DetailsInfoContainer>
                            <Typography variant="h5" component="h5">{`${currentUser?.name} ${currentUser?.surname}`}</Typography>
                            <InfoRow><LocationOn style={{fontSize: '16px'}}/><InfoText>{currentUser?.city}</InfoText></InfoRow>
                            <InfoRow><Phone style={{fontSize: '16px'}}/><InfoText>{currentUser?.nrPhone}</InfoText></InfoRow>
                            <InfoRow><MailOutline style={{fontSize: '16px'}}/><InfoText>{currentUser?.email}</InfoText></InfoRow>
                        </DetailsInfoContainer>
                    </DetailsContainer>
                        <div>
                            Aktywności:
                            <SpecializationsContainer>
                                {currentUser?.specializations.map(specialization => (
                                    <StyledChip key={specialization} label={specialization} variant="outlined" />
                                ))}
                            </SpecializationsContainer>
                        </div>
                    </InfoContainer>
                    <Rating readOnly value={3}/>
                    <Typography style={{marginTop: '0.5rem'}} color="textSecondary">
                        {currentUser?.shortDescription}
                    </Typography>
                    </UserInfo>
                    <Tabs value={match?.params.slug || 'blog'} onChange={(_, value) => history.push(`${url}/${value}`)} indicatorColor="primary">
                        <Tab label="Posty" value="blog" />
                        <Tab label="Recenzje" value="recenzje" />
                        <Tab label="Wydarzenia" value="wydarzenia" />
                        <Tab label="Cennik" value="cennik" />
                    </Tabs>
                    <TrainerRouter user={currentUser} />
                </ContainerCard>
            </CoverGrid>
        </Container>
    );
}

export default TrainerSection;