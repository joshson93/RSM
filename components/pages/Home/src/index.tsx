import React from 'react';
import { INTRODUCTION } from './constants';
import BreweryTable from '../../BreweryTable/src';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const HomePage: React.FC = () => {
  return (
    <>
      <StyledTypography variant='h5'>{INTRODUCTION}</StyledTypography>
      <BreweryTable />
    </>
  );
};

export default HomePage;

const StyledTypography = styled(Typography)`
  margin-top: 25px;
  margin-left: 5%;
`;
