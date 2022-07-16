import styled from '@emotion/styled';
import { Card, Tooltip } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

const LoadingState = () => {
  return (
    <>
      <StyledBreweryNameSkeleton animation='wave' variant='rectangular' />

      <StyledCard>
        <CardHeader>Brewery Information:</CardHeader>
        {[...Array(3)].map((row, i) => {
          return (
            <InformationContainer key={`${row}-${i}`}>
              <StyledIconSkeleton animation='wave' variant='rectangular' />
              <StyledDescriptionSkeleton animation='wave' variant='rectangular' />
            </InformationContainer>
          );
        })}
        <InformationContainer style={{ marginBottom: '10px' }}>
          <StyledIconSkeleton animation='wave' variant='rectangular' />
          <StyledDescriptionSkeleton animation='wave' variant='rectangular' />
        </InformationContainer>
      </StyledCard>
    </>
  );
};

export default LoadingState;

const StyledCard = styled(Card)`
  margin-top: 50px;
  width: 95%;
  padding: 5px;
`;

const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const CardHeader = styled.label`
  margin-left: 10px;
`;

const StyledIconSkeleton = styled(Skeleton)`
  margin-right: 5px;
  width: 10px;
  height: 20px;
`;

const StyledDescriptionSkeleton = styled(Skeleton)`
  width: 300px;
  border-radius: 10px;
`;

const StyledBreweryNameSkeleton = styled(Skeleton)`
  margin-top: 25px;
  width: 500px;
  height: 75px;
  border-radius: 20px;
`;
