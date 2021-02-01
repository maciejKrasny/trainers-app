import React, {useEffect, useState} from 'react';
import {
    BackgroundImage,
    Container,
    ContainerCard,
    CoverGrid,
    InfoContainer,
    InfoRow,
    InfoText,
    ObserveContainer,
    UserInfo,
    useStyles
} from './TrainerSection.styled';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {Avatar, Button, CircularProgress, Tab, Tabs, Typography} from "@material-ui/core";
import TrainerRouter from "../Routers/TrainerRouter";
import {LocationOn, MailOutline, Phone} from '@material-ui/icons'
import {
    DetailsContainer,
    DetailsInfoContainer,
    SpecializationsContainer,
    StyledChip
} from "../TrainerCard/TrainerCard.styled";
import {Rating} from "@material-ui/lab";
import UnavailableSite from "./UnavailableSite";
import * as postThunks from "../../../redux/modules/Posts/thunks";
import {User} from "../../../redux/modules/Users/types";
import * as userThunks from '../../../redux/modules/Users/thunks';
import { useHttpErrorHandler } from '../../../utils/hooks/useHttpErrorHandler';
import {resetPosts} from "../../../redux/modules/Posts/actions";
import {api_url} from "../../../api/setup";


interface TrainerSectionProps {

}

const TrainerSection: React.FC<TrainerSectionProps> = () => {
    const classes = useStyles();
    const { users, pending: trainersPending, observedUsers } = useSelector(state => state.users);
    const { pending: eventsPending } = useSelector(state => state.events);
    const { pending: postsPending } = useSelector(state => state.posts);
    const { pending: servicesPending } = useSelector(state => state.services);
    const { authorization } = useSelector(state => state.authorizationUsers);
    const [currentTrainer, setCurrentTrainer] = useState<User>();
    const { url } = useRouteMatch();
    const match = useRouteMatch<{ slug: string }>('/:id/:slug');
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const dispatch = useDispatch();
    const handler = useHttpErrorHandler()

    useEffect(() => {
        if (id) {
            const trainer = users.filter(trainer => trainer.type === 'TRAINER').find(trainer => trainer._id === id);
            setCurrentTrainer(trainer);
        }
        if (authorization?.token) {
            dispatch(userThunks.fetchObservedUsers());
        }
    }, [users]);

    if (trainersPending) {
        return (
            <Container>
                <BackgroundImage />
                <CoverGrid id="myCard">
                    <ContainerCard style={{justifyContent: 'center', alignItems: 'center'}}>
                        <CircularProgress />
                    </ContainerCard>
                </CoverGrid>
            </Container>
        );
    }

    return (
        <Container>
            <BackgroundImage />
            <CoverGrid id="myCard">
                <ContainerCard>
                    {currentTrainer
                     ? (
                         <>
                        <UserInfo>
                            <InfoContainer>
                                <DetailsContainer>
                                    <Avatar className={classes.avatar} src={currentTrainer.userDetails.avatar ? `http://trenerzy.tomkowiak.eu/avatars/${currentTrainer.userDetails.avatar}` : undefined}>{`${currentTrainer?.userDetails.firstName[0]}${currentTrainer?.userDetails.lastName[0]}`}</Avatar>
                                    <DetailsInfoContainer>
                                        <Typography variant="h5" component="h5">{`${currentTrainer?.userDetails.firstName} ${currentTrainer?.userDetails.lastName}`}</Typography>
                                        <InfoRow><LocationOn style={{fontSize: '16px'}}/><InfoText>{currentTrainer?.userDetails.city}</InfoText></InfoRow>
                                        <InfoRow><Phone style={{fontSize: '16px'}}/><InfoText>{currentTrainer?.userDetails.phone}</InfoText></InfoRow>
                                        <InfoRow><MailOutline style={{fontSize: '16px'}}/><InfoText>{currentTrainer?.email}</InfoText></InfoRow>
                                    </DetailsInfoContainer>
                                </DetailsContainer>
                                    <div>
                                        Aktywności:
                                        <SpecializationsContainer>
                                            {currentTrainer.specializations?.map(specialization => (
                                                <StyledChip key={specialization} label={specialization} variant="outlined" />
                                            ))}
                                        </SpecializationsContainer>
                                    </div>
                                </InfoContainer>
                                    <Rating readOnly value={currentTrainer.reviewsSummary.averageGrade}/>
                                <ObserveContainer>
                                     <Typography style={{marginRight: 250}} color="textSecondary">
                                        {currentTrainer.userDetails.description}
                                    </Typography>
                                    {currentTrainer._id !== authorization?.user._id && !!authorization && (
                                     <Button style={{position: 'absolute', top: 0, right: 0}} onClick={() => dispatch(userThunks.trainerToObserved(currentTrainer._id))}  variant={observedUsers.includes(currentTrainer._id) ? 'outlined' : 'contained'} color={'primary'}>{observedUsers.includes(currentTrainer._id) ? 'Usuń z obserwowanych' : 'Dodaj do obserwowanych'}</Button>
                                    )}
                                    </ObserveContainer>
                                </UserInfo>
                                <Tabs value={match?.params.slug || 'blog'} onChange={(_, value) => history.push(`${url}/${value}`)} indicatorColor="primary">
                                    <Tab label="Posty" value="blog" />
                                    <Tab label="Recenzje" value="recenzje" />
                                    <Tab label="Wydarzenia" value="wydarzenia" />
                                    <Tab label="Cennik" value="cennik" />
                                </Tabs>
                                <TrainerRouter userId={id} />
                                </>
                 )
                  : <UnavailableSite />}
                </ContainerCard>
            </CoverGrid>
        </Container>
    );
}

export default TrainerSection;