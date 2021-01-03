import { Tab, Tabs, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { GridContainer } from '../components/Grid/Grid.styled';
import Layout from '../components/Layout/Layout';
import TrainerRouter from '../components/Routers/TrainerRouter';
import TrainerSection from '../components/TrainerSection/TrainerSection';
import { User } from '../redux/modules/Users/types';

const TrainerPage: React.FC = () => {
  return (
    <Layout>
        <TrainerSection />
    </Layout>
  )
};

export default TrainerPage;
