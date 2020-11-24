import { Tab, Tabs, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { GridContainer } from '../components/Grid/Grid.styled';
import Layout from '../components/Layout/Layout';
import TrainerRouter from '../components/Routers/TrainerRouter';
import { User } from '../redux/modules/Users/types';

const TrainerPage: React.FC = () => {
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
    <Layout>
      <GridContainer>
        <Typography variant="h5" style={{marginTop: '1rem', marginBottom: '1rem'}}>
          {`${currentUser?.name} ${currentUser?.surname}`}
        </Typography>
        <Tabs value={match?.params.slug || 'informacje'} onChange={(_, value) => history.push(`${url}/${value}`)} indicatorColor="primary">
          <Tab label="Informacje" value="informacje" />
          <Tab label="Blog" value="blog">
          </Tab>
          <Tab label="Cennik" value="cennik" />
        </Tabs>
        <TrainerRouter user={currentUser} />
      </GridContainer>
    </Layout>
  )
};

export default TrainerPage;
